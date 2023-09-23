import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Helmet } from 'react-helmet';
import { HomeWrapper } from './style';
import Step1 from './components/Step1';
import StepHeader from './components/StepHeader';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import generateService from '@/services/generate.service';
import PreviewStyle from './components/PreviewStyle';
import ModalPayment from './components/Modals/ModalPayment';
import { StepEnum } from './contants';
import useScreenSize from '@/hooks/useScreenSize';
import StepHeaderPC from './components/StepHeaderPC';
import Step1PC from './components/Step1PC';
import Step2PC from './components/Step2PC';
import Step3PC from './components/Step3PC';
import Step4PC from './components/Step4PC';
import ModalPreviewStyle from './components/Modals/ModalPreviewStyle';
import { RootState } from '@/store/store';
import { useAppSelector } from '@/store/hooks';
import { convertLinkImageToFile } from '@/utils/helpers';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/routes/routes';
import { useSearchParams } from 'react-router-dom';
import { AuthEnum } from '@/components/ModalAuthen/constant';
import { CONFIG } from '@/config/service';
import { eraseCookie, getCookie, setCookie } from '@/utils/cookies';
import ModalUploadFilesExtendLimit from '@/components/ModalUploadFilesExtendLimit';

export default function GenerateAvatar() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(StepEnum.GUIDE);
  const [sessionId, setSessionId] = useState('');
  const [images, setImages] = useState<any>([]);
  const [gender, setGender] = useState('');
  const [styles, setStyles] = useState<any>([]);
  const [listStyles, setListStyles] = useState<any>([]);
  const [price, setPrice] = useState<any>();
  const listPrice = useAppSelector((state: RootState) => state.app.prices);

  const [showModalPayment, setShowModalPayment] = useState(false);
  const [showModalPreviewStyle, setShowModalPreviewStyle] = useState(false);

  const { isDesktop } = useScreenSize();

  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const showModalUploadFilesExtendLimit = useAppSelector(
    (state: RootState) => state.app.showModalUploadFilesExtendLimit
  );

  const listGenerate = useAppSelector(
    (state: RootState) => state.app.userInfor.listGenerate
  );

  const currentGenerate = listGenerate?.filter((item: any) => !item.used)[0];

  useEffect(() => {
    if (getCookie('savedImages')) {
      const savedData = JSON.parse(getCookie('savedImages') || '{}');

      const resultConvert: any = [];

      const convertFn = async () => {
        for (const item of savedData) {
          try {
            const file: any = await convertLinkImageToFile(item.file);
            resultConvert.push({
              ...item,
              file,
              src: URL.createObjectURL(file),
            });
          } catch (error) {
            console.error('Lỗi khi xử lý promise:', error);
          }
        }
      };

      convertFn();

      // const resultConvert = savedData.map((item: any) => {
      //   const file = convertBase64toFile(
      //     item.file,
      //     item?.name,
      //     `image/${item?.name?.split('.')[1]}`
      //   );
      //   return {
      //     ...item,
      //     file,
      //     src: URL.createObjectURL(file),
      //   };
      // });

      setImages(resultConvert);
      setGender(getCookie('savedGender') || '');
      setSessionId(getCookie('savedSessionId') || '');
      setStep(StepEnum.CHOOSE_STYLE);
      eraseCookie('savedImages');
      eraseCookie('savedGender');
      eraseCookie('savedSessionId');
    }
  }, []);

  useEffect(() => {
    if (
      searchParams.get('auth') === AuthEnum.ResetPassword &&
      getCookie('savedImagesCopy')
    ) {
      const savedData = JSON.parse(getCookie('savedImagesCopy') || '{}');

      const resultConvert: any = [];

      const convertFn = async () => {
        for (const item of savedData) {
          try {
            const file: any = await convertLinkImageToFile(item.file);
            resultConvert.push({
              ...item,
              file,
              src: URL.createObjectURL(file),
            });
          } catch (error) {
            console.error('Lỗi khi xử lý promise:', error);
          }
        }
      };

      convertFn();

      setImages(resultConvert);
      setGender(getCookie('savedGenderCopy') || '');
      setSessionId(getCookie('savedSessionIdCopy') || '');
      setStep(StepEnum.CHOOSE_STYLE);
      eraseCookie('savedImagesCopy');
      eraseCookie('savedGenderCopy');
      eraseCookie('savedSessionIdCopy');
    }
  }, []);

  useQuery(['get-list-style', gender], () => generateService.getListStyles(), {
    onSuccess: (res: any) => {
      const stylesFilter = res?.data?.data?.values[gender.toLowerCase()] || [];

      const listStyles = stylesFilter.map((style: any) => ({
        id: style._id,
        thumbnail: style.thumbnail,
        alias: style.alias,
        displayName: style.displayName,
      }));

      setListStyles(listStyles);
    },
    enabled: !!gender,
  });

  const mutationGenerate = useMutation(
    (payload: any) => generateService.generateImage(payload),
    {
      onSuccess: async (res: any) => {
        setStep(StepEnum.GENERATE_SUCCESS);

        const firstImageValid = images.find((item: any) => !item.textError);

        const presign = await generateService.getPreSignFile({
          filename: firstImageValid?.file?.name || 'my-photo.jpg',
        });

        const formData = new FormData();
        for (const property in presign.data.fields) {
          formData.append(property, presign.data.fields[property]);
        }

        formData.append('file', firstImageValid?.file);

        await generateService.uploadFileS3(presign?.data?.url, formData);

        mutationCreateSession.mutate({
          email: userInfor.userEmail,
          name: 'you',
          sessionId,
          gender: gender.toLowerCase(),
          styles,
          originFirstImage: presign?.data?.fields?.key,
          timePayment: currentGenerate?.timePayment,
        });
      },
    }
  );

  const mutationCreateSession = useMutation(
    (payload: any) => generateService.createSession(payload),
    {
      onSuccess: (res: any) => {
        queryClient.refetchQueries({ queryKey: ['get-info-user'] });
        setSessionId('');
      },
    }
  );

  const handleGenerate = () => {
    const payload: any = {
      styles,
      gender: gender.toLowerCase(),
      sessionId,
      numImagesEachStyle: 10,
      notifyTo: `${CONFIG.BASE_SERVER_URL}/v1/webhook`,
      // notifyTo: `https://9610-222-252-18-109.ngrok-free.app/api/v1/webhook`,
      notifyType: 'webhook',
      // bundleId: '1:440595538066:web:85b4c721ac6bf45a32c64b',
    };
    // if (styles.length < price.maxStyle) {
    //   const additionalStyles: any = [];
    //   let restListStyles: any = listStyles.filter(
    //     (item: any) => !styles.includes(item.alias)
    //   );
    //   const countRandom = price.maxStyle - styles.length;

    //   for (let i = 0; i < countRandom; i++) {
    //     const shuffArray = shuffleArray(restListStyles);
    //     additionalStyles.push(shuffArray[0].alias);
    //     restListStyles = shuffArray;
    //     restListStyles.shift();
    //   }
    //   payload.styles = [...styles, ...additionalStyles];
    // }
    mutationGenerate.mutate(payload);
  };

  const handleClickBack = () => {
    if (step === StepEnum.UPLOAD_IMAGE) {
      setStep(StepEnum.GUIDE);
      setImages([]);
      setGender('');
      setSessionId('');
      setStyles([]);
      setListStyles([]);
      setPrice('');
    } else if (step === StepEnum.PICK_GENDER) {
      if (isDesktop) {
        setStep(StepEnum.GUIDE);
      } else {
        setStep(StepEnum.UPLOAD_IMAGE);
      }
      setGender('');
    } else if (step === StepEnum.PREVIEW_STYLE) {
      setStep(StepEnum.PICK_GENDER);
    } else if (step === StepEnum.CHOOSE_STYLE) {
      setStep(StepEnum.PICK_GENDER);
      setStyles([]);
      // setCookie('passGender', gender);
    } else if (step === StepEnum.GENERATE_SUCCESS) {
      setStep(StepEnum.CHOOSE_STYLE);
      // eraseCookie('passGender');
    }
  };

  const handleClickBackToHome = () => {
    setStep(StepEnum.GUIDE);
    setImages([]);
    setGender('');
    setSessionId('');
    setStyles([]);
    setListStyles([]);
    setPrice('');
  };

  const handleSaveData = async (url: string) => {
    const results = [];
    for (const item of images) {
      try {
        const presign = await generateService.getPreSignFile({
          filename: item?.file?.name || 'my-photo.jpg',
        });

        const formData = new FormData();
        for (const property in presign.data.fields) {
          formData.append(property, presign.data.fields[property]);
        }

        formData.append('file', item?.file);

        await generateService.uploadFileS3(presign?.data?.url, formData);
        // const file = await convertFileToBase64(item.file);
        results.push({
          ...item,
          file: CONFIG.REACT_APP_AWS_CDN + '/' + presign?.data?.fields?.key,
        });
      } catch (error) {
        console.error('Lỗi khi xử lý promise:', error);
      }
    }

    setCookie('savedImages', JSON.stringify(results));
    setCookie('savedGender', gender);
    setCookie('savedSessionId', sessionId);
    setCookie('savedImagesCopy', JSON.stringify(results));
    setCookie('savedGenderCopy', gender);
    setCookie('savedSessionIdCopy', sessionId);
    window.location.assign(url);
  };

  const handleClickMyAvatar = () => {
    navigate(ROUTES.LIST_AVATAR);
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      {isDesktop ? (
        <HomeWrapper>
          <StepHeaderPC step={step} onClickBack={handleClickBack} />
          {step === StepEnum.GUIDE && (
            <Step1PC
              step={step}
              setStep={setStep}
              images={images}
              setImages={setImages}
              setSessionId={setSessionId}
            />
          )}
          {step === StepEnum.PICK_GENDER && (
            <Step2PC
              setStep={setStep}
              gender={gender}
              setGender={setGender}
              setStyles={setStyles}
              setShowModalPreviewStyle={setShowModalPreviewStyle}
            />
          )}
          {step === StepEnum.CHOOSE_STYLE && (
            <Step3PC
              styles={styles}
              setStyles={setStyles}
              listStyles={listStyles}
              gender={gender}
              price={price}
              handleGenerate={handleGenerate}
            />
          )}
          {step === StepEnum.GENERATE_SUCCESS && (
            <Step4PC
              handleClickBackToHome={handleClickBackToHome}
              handleClickMyAvatar={handleClickMyAvatar}
            />
          )}
        </HomeWrapper>
      ) : (
        <HomeWrapper>
          <StepHeader step={step} onClick={handleClickBack} />
          {(step === StepEnum.GUIDE || step === StepEnum.UPLOAD_IMAGE) && (
            <Step1
              step={step}
              setStep={setStep}
              images={images}
              setImages={setImages}
              setSessionId={setSessionId}
            />
          )}
          {step === StepEnum.PICK_GENDER && (
            <Step2
              setStep={setStep}
              gender={gender}
              setGender={setGender}
              setStyles={setStyles}
              setShowModalPreviewStyle={setShowModalPreviewStyle}
            />
          )}
          {step === StepEnum.PREVIEW_STYLE && (
            <PreviewStyle
              setStep={setStep}
              listStyles={listStyles}
              setShowModalPayment={setShowModalPayment}
            />
          )}
          {step === StepEnum.CHOOSE_STYLE && (
            <Step3
              styles={styles}
              setStyles={setStyles}
              listStyles={listStyles}
              gender={gender}
              price={price}
              handleGenerate={handleGenerate}
            />
          )}
          {step === StepEnum.GENERATE_SUCCESS && (
            <Step4
              handleClickBackToHome={handleClickBackToHome}
              handleClickMyAvatar={handleClickMyAvatar}
            />
          )}
        </HomeWrapper>
      )}
      {showModalPayment && (
        <ModalPayment
          setStep={setStep}
          prices={listPrice}
          open={showModalPayment}
          setOpen={setShowModalPayment}
          price={price}
          setPrice={setPrice}
          handleSaveData={handleSaveData}
        />
      )}

      {showModalPreviewStyle && (
        <ModalPreviewStyle
          open={showModalPreviewStyle}
          setOpen={setShowModalPreviewStyle}
          setStep={setStep}
          setShowModalPayment={setShowModalPayment}
          listStyles={listStyles}
        />
      )}

      {showModalUploadFilesExtendLimit && (
        <ModalUploadFilesExtendLimit open={showModalUploadFilesExtendLimit} />
      )}
    </>
  );
}
