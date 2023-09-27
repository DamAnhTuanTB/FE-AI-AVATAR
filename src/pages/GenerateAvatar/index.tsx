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
import { analyticsLogEvent } from '@/firebase';
import { eventTracking } from '@/firebase/firebase';

export default function GenerateAvatar() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(StepEnum.GUIDE);
  const [sessionId, setSessionId] = useState('');
  const [images, setImages] = useState<any>([]);
  const [gender, setGender] = useState('');
  const [styles, setStyles] = useState<any>([]);
  const [listStyles, setListStyles] = useState<any>([]);
  const [price, setPrice] = useState<any>();
  const [savingData, setSavingData] = useState(false);
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
    if (
      getCookie('savedImages') &&
      searchParams.get('payment-success') === '1'
    ) {
      setSearchParams({});
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
      getCookie('savedImagesCopy') &&
      searchParams.get('payment-success') === '1'
    ) {
      setSearchParams({});
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

  useQuery(
    ['get-list-style', gender],
    () => {
      return generateService.getListStyles();
    },
    {
      onSuccess: (res: any) => {
        const stylesFilter =
          res?.data?.data?.values[gender.toLowerCase()] || [];

        const listStyles = stylesFilter.map((style: any) => ({
          id: style._id,
          thumbnail: style.thumbnail,
          alias: style.alias,
          displayName: style.displayName,
        }));

        setListStyles(listStyles);
      },
      enabled: !!gender,
    }
  );

  const mutationGenerate = useMutation(
    (payload: any) => generateService.generateImage(payload),
    {
      onSuccess: async (res: any) => {
        analyticsLogEvent(eventTracking.call_api_generate.name, {
          [eventTracking.call_api_generate.params.status]: 'success',
          [eventTracking.call_api_generate.params.session_id]: sessionId,
        });

        const listOriginImages = [];

        const imagesValid = images.filter((item: any) => !item.textError);

        for (const item of imagesValid) {
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

            listOriginImages.push(
              CONFIG.REACT_APP_AWS_CDN + '/' + presign?.data?.fields?.key
            );
          } catch (error) {
            console.error('Lỗi khi xử lý promise:', error);
          }
        }

        mutationCreateSession.mutate({
          email: userInfor.userEmail,
          name: 'you',
          sessionId,
          gender: gender.toLowerCase(),
          styles,
          originImages: listOriginImages,
          timePayment: currentGenerate?.timePayment,
          results: {
            ink_stain: [
              'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/ink_stain_f37de994-4440-11ee-b652-0242c0a84004.png',
              'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/ink_stain_f64f79b2-4440-11ee-b652-0242c0a84004.png',
              'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/ink_stain_f4e69fa6-4440-11ee-b652-0242c0a84004.png',
            ],
            aborigine: [
              'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/aborigine_fa883154-4440-11ee-b652-0242c0a84004.png',
              'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/aborigine_f7b35350-4440-11ee-b652-0242c0a84004.png',
              'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/aborigine_f9199574-4440-11ee-b652-0242c0a84004.png',
            ],
            // wizard: [
            //   'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/wizard_fbefccaa-4440-11ee-b652-0242c0a84004.png',
            //   'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/wizard_fecc048e-4440-11ee-b652-0242c0a84004.png',
            //   'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/wizard_fd5d42c0-4440-11ee-b652-0242c0a84004.png',
            // ],
            // angel: [
            //   'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/angel_01af340a-4441-11ee-b652-0242c0a84004.png',
            //   'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/angel_0038d89c-4441-11ee-b652-0242c0a84004.png',
            //   'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/angel_0325f026-4441-11ee-b652-0242c0a84004.png',
            // ],
            // harry_potter: [
            //   'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/harry_potter_077ad394-4441-11ee-b652-0242c0a84004.png',
            //   'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/harry_potter_049b9640-4441-11ee-b652-0242c0a84004.png',
            //   'https://static.apero.vn/ai-avatar/qKdSyKeDlh3AN2J/output/harry_potter_060a1484-4441-11ee-b652-0242c0a84004.png',
            // ],
          },
        });
      },
      onError: () => {
        analyticsLogEvent(eventTracking.call_api_generate.name, {
          [eventTracking.call_api_generate.params.status]: 'failed',
          [eventTracking.call_api_generate.params.session_id]: sessionId,
        });
      },
    }
  );

  const muatationSendMail = useMutation(
    (payload: any) => generateService.sendMail(payload),
    {
      onSuccess: (res: any) => {},
    }
  );

  const mutationCreateSession = useMutation(
    (payload: any) => generateService.createSession(payload),
    {
      onSuccess: (res: any) => {
        setStep(StepEnum.GENERATE_SUCCESS);
        muatationSendMail.mutate({
          subject: 'Your AI Avatar is Underway!',
          template: './await-result',
        });
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
    analyticsLogEvent(eventTracking.generating_click_back.name);
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

    const imagesJSON = JSON.stringify(results);

    setCookie('savedImages', imagesJSON);
    setCookie('savedGender', gender);
    setCookie('savedSessionId', sessionId);
    setCookie('savedImagesCopy', imagesJSON);
    setCookie('savedGenderCopy', gender);
    setCookie('savedSessionIdCopy', sessionId);
    setCookie('savedMainImages', imagesJSON);
    setSavingData(false);
    window.location.replace(url);
  };

  const handleClickMyAvatar = () => {
    analyticsLogEvent(eventTracking.generating_click_my_avatar.name);
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
              sessionId={sessionId}
            />
          )}
          {step === StepEnum.GENERATE_SUCCESS && (
            <Step4PC
              gender={gender}
              styles={styles}
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
              sessionId={sessionId}
            />
          )}
          {step === StepEnum.GENERATE_SUCCESS && (
            <Step4
              gender={gender}
              styles={styles}
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
          gender={gender}
          savingData={savingData}
          setSavingData={setSavingData}
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
