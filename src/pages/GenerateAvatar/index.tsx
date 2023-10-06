import { AuthEnum } from '@/components/ModalAuthen/constant';
import ModalUploadFilesExtendLimit from '@/components/ModalUploadFilesExtendLimit';
import { CONFIG } from '@/config/service';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { ROUTES } from '@/routes/routes';
import generateService from '@/services/generate.service';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { eraseCookie, getCookie, setCookie } from '@/utils/cookies';
import { convertLinkImageToFile } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import ModalPayment from './components/Modals/ModalPayment/ModalPayment';
import ModalPreviewStyle from './components/Modals/ModalPreviewStyle';
import PreviewStyle from './components/PreviewStyle';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import StepHeader from './components/StepHeader';
import { StepEnum } from './contants';
import { HomeWrapper } from './style';
import {
  setPaymentSuccessLoginGoogle,
  setStepGenerate,
} from '@/store/slices/appSlice';
import useGetListStyles from '@/hooks/useGetListStyles';

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
  const [savingData, setSavingData] = useState(false);
  const [loadingGenerate, setLoadingGenerate] = useState(false);
  const listPrice = useAppSelector((state: RootState) => state.app.prices);
  const fromQuery = searchParams.get('from');
  const { logEvent } = useTrackingEvent();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setStepGenerate(step));
  }, [step]);

  const [showModalPayment, setShowModalPayment] = useState(false);
  const [showModalPreviewStyle, setShowModalPreviewStyle] = useState(false);

  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const paymentSuccessGoogleLogin = useAppSelector(
    (state: RootState) => state.app.paymentSuccessLoginGoogle
  );
  const showModalUploadFilesExtendLimit = useAppSelector(
    (state: RootState) => state.app.showModalUploadFilesExtendLimit
  );

  const listGenerate = useAppSelector(
    (state: RootState) => state.app.userInfor.listGenerate
  );

  const currentGenerate = listGenerate
    ?.filter((item: any) => !item.used)
    .reverse()[0];

  useEffect(() => {
    const eventParams: any = {};
    if (fromQuery) {
      eventParams[eventTracking.uploadPhotoView.params.source] = fromQuery;
    }
    if (userInfor?.id) {
      eventParams[eventTracking.uploadPhotoView.params.userId] = userInfor?.id;
    }
    logEvent(eventTracking.uploadPhotoView.name, eventParams);
  }, [fromQuery]);

  // Logic chuyển đến step3 và hiển thị lại dữ liệu trước đó khi thanh toán thành công
  useEffect(() => {
    if (
      getCookie('savedImages') &&
      searchParams.get('payment-success') === '1'
    ) {
      // setSearchParams({});
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
      // eraseCookie('savedGender');
      eraseCookie('savedSessionId');
    }
  }, []);

  // Logic chuyển đến step3 và hiển thị lại dữ liệu trước đó khi thanh toán thành công và đăng nhập bằng google
  useEffect(() => {
    if (
      paymentSuccessGoogleLogin &&
      getCookie('savedImagesGoogleLogin') &&
      userInfor?.userEmail &&
      getCookie('emailPaymentSuccess') === userInfor?.userEmail
    ) {
      setStep(StepEnum.CHOOSE_STYLE);
      // setSearchParams({});
      const savedData = JSON.parse(getCookie('savedImagesGoogleLogin') || '{}');

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
      setGender(getCookie('savedGenderGoogleLogin') || '');
      setSessionId(getCookie('savedSessionIdGoogleLogin') || '');
      eraseCookie('savedImagesGoogleLogin');
      eraseCookie('savedSessionIdGoogleLogin');
      eraseCookie('emailPaymentSuccess');
      dispatch(setPaymentSuccessLoginGoogle(false));
    }
  }, [paymentSuccessGoogleLogin, JSON.stringify(userInfor)]);

  // Logic mở modal resetPassword khi thanh toán thành công
  useEffect(() => {
    if (
      searchParams.get('auth') === AuthEnum.ResetPassword &&
      getCookie('savedImagesCopy') &&
      searchParams.get('payment-success') === '1'
    ) {
      // setSearchParams({});
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
      // eraseCookie('savedGenderCopy');
      eraseCookie('savedSessionIdCopy');
    }
  }, []);

  useGetListStyles(gender, setListStyles);

  // api call generate
  const mutationGenerate = useMutation(
    (payload: any) => generateService.generateImage(payload),
    {
      onSuccess: async (res: any) => {
        logEvent(eventTracking.call_api_generate.name, {
          [eventTracking.call_api_generate.params.status]: 'success',
          [eventTracking.call_api_generate.params.session_id]: sessionId,
        });

        const listOriginImages = [];

        const imagesValid = images.filter((item: any) => !item.textError);

        for (const item of imagesValid) {
          try {
            const presign = await generateService.getPreSignFile({
              filename: 'my-photo.jpg',
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
        });
      },
      onError: () => {
        logEvent(eventTracking.call_api_generate.name, {
          [eventTracking.call_api_generate.params.status]: 'failed',
          [eventTracking.call_api_generate.params.session_id]: sessionId,
        });
      },
    }
  );

  // api send mail chờ kết quả khi generate thành công
  const muatationSendMail = useMutation(
    (payload: any) => generateService.sendMail(payload),
    {
      onSuccess: (res: any) => {
        logEvent(eventTracking.mail_start_generate_send.name, {
          [eventTracking.mail_start_generate_send.params.time]:
            new Date().toISOString(),
        });
      },
    }
  );

  // api create new session khi generate thành công
  const mutationCreateSession = useMutation(
    (payload: any) => generateService.createSession(payload),
    {
      onSuccess: (res: any) => {
        setLoadingGenerate(false);
        setStep(StepEnum.GENERATE_SUCCESS);
        muatationSendMail.mutate({
          subject: 'Your AI Avatar is generating... ⌛',
          template: './await-result',
        });
        queryClient.refetchQueries({ queryKey: ['get-info-user'] });
        setSessionId('');
      },
    }
  );

  const handleGenerate = () => {
    setLoadingGenerate(true);
    const payload: any = {
      styles,
      gender: gender.toLowerCase(),
      sessionId,
      numImagesEachStyle: 10,
      notifyTo: `${CONFIG.BASE_SERVER_URL}/v1/webhook`,
      notifyType: 'webhook',
      // bundleId: '1:440595538066:web:85b4c721ac6bf45a32c64b',
    };
    mutationGenerate.mutate(payload);
  };

  const handleClickBack = () => {
    if (step === StepEnum.PICK_GENDER) {
      setStep(StepEnum.GUIDE);
      // if (!isDesktop) {
      //   setImages([]);
      //   setGender('');
      //   setSessionId('');
      //   setStyles([]);
      //   setListStyles([]);
      //   setPrice('');
      // }
      setGender('');
    } else if (step === StepEnum.PREVIEW_STYLE) {
      setStep(StepEnum.PICK_GENDER);
    } else if (step === StepEnum.CHOOSE_STYLE) {
      setStep(StepEnum.PICK_GENDER);
      setStyles([]);
    } else if (step === StepEnum.GENERATE_SUCCESS) {
      setStep(StepEnum.CHOOSE_STYLE);
    }
  };

  const handleClickBackToHome = () => {
    logEvent(eventTracking.generating_click_back.name);
    setStep(StepEnum.GUIDE);
    setImages([]);
    setGender('');
    setSessionId('');
    setStyles([]);
    setListStyles([]);
    setPrice('');
  };

  // Hàm lưu lại data khi điều hướng đến màn thanh toán
  const handleSaveData = async (url: string) => {
    const results = [];
    for (const item of images) {
      try {
        const presign = await generateService.getPreSignFile({
          filename: 'my-photo.jpg',
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
    setCookie('savedImagesGoogleLogin', imagesJSON);
    setCookie('savedGenderGoogleLogin', gender);
    setCookie('savedSessionIdGoogleLogin', sessionId);
    setSavingData(false);
    window.location.replace(url);
  };

  const handleClickMyAvatar = () => {
    logEvent(eventTracking.generating_click_my_avatar.name);
    navigate(ROUTES.LIST_AVATAR);
  };

  return (
    <>
      <Helmet>
        <title>Generate - Avatarist.ai</title>
        <meta
          name="description"
          content="Your AI avatar is in the making. Stay tuned for its grand reveal."
        />
      </Helmet>
      <HomeWrapper>
        <StepHeader step={step} onClick={handleClickBack} />
        {step === StepEnum.GUIDE && (
          <Step1
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
            setShowModalPayment={setShowModalPayment}
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
            loadingGenerate={loadingGenerate}
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
      {showModalPayment && (
        <ModalPayment
          prices={listPrice}
          open={showModalPayment}
          setOpen={setShowModalPayment}
          price={price}
          setPrice={setPrice}
          handleSaveData={handleSaveData}
          gender={gender}
          savingData={savingData}
          setSavingData={setSavingData}
          setShowModalPreviewStyle={setShowModalPreviewStyle}
        />
      )}

      {showModalPreviewStyle && (
        <ModalPreviewStyle
          price={price}
          savingData={savingData}
          setSavingData={setSavingData}
          open={showModalPreviewStyle}
          setOpen={setShowModalPreviewStyle}
          setShowModalPayment={setShowModalPayment}
          gender={gender}
          handleSaveData={handleSaveData}
        />
      )}

      {showModalUploadFilesExtendLimit && (
        <ModalUploadFilesExtendLimit open={showModalUploadFilesExtendLimit} />
      )}
    </>
  );
}
