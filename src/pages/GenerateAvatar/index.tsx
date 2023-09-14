import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
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
import { CONFIG } from '@/config/service';
import ModalPressEmail from './components/Modals/ModalPressEmail';
import useScreenSize from '@/hooks/useScreenSize';
import StepHeaderPC from './components/StepHeaderPC';
import Step1PC from './components/Step1PC';
import Step2PC from './components/Step2PC';
import Step3PC from './components/Step3PC';
import Step4PC from './components/Step4PC';

const prices = [
  {
    id: 1,
    name: '50 images (5 styles)',
    price: 4.99,
    maxStyle: 5,
  },
  {
    id: 2,
    name: '100 images (10 styles)',
    price: 7.99,
    maxStyle: 10,
    bestOffer: true,
  },
  {
    id: 3,
    name: '200 images (20 styles)',
    price: 12.99,
    maxStyle: 20,
  },
];

export default function GenerateAvatar() {
  const [step, setStep] = useState(StepEnum.GUIDE);
  const [sessionId, setSessionId] = useState('');
  const [images, setImages] = useState<any>([]);
  const [gender, setGender] = useState('');
  const [styles, setStyles] = useState<any>([]);
  const [listStyles, setListStyles] = useState<any>([]);
  const [price, setPrice] = useState<any>(prices[1]);
  const [email, setEmail] = useState('');

  const [showModalPayment, setShowModalPayment] = useState(false);
  const [showModalPressEmail, setShowModalPressEmail] = useState(false);
  const [successPurchase, setSuccessPurchase] = useState(false);

  const { isDesktop } = useScreenSize();

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
      onSuccess: (res: any) => {
        setStep(StepEnum.GENERATE_SUCCESS);
        setSuccessPurchase(false);
        setShowModalPressEmail(false);
        mutationCreateSession.mutate({
          email,
          name: 'you',
          sessionId,
        });
      },
    }
  );

  const mutationCreateSession = useMutation(
    (payload: any) => generateService.createSession(payload),
    {
      onSuccess: (res: any) => {
        setEmail('');
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
      // localStorage.setItem('passGender', gender);
    } else if (step === StepEnum.GENERATE_SUCCESS) {
      setStep(StepEnum.CHOOSE_STYLE);
      // localStorage.removeItem('passGender');
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
    setEmail('');
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
              setShowModalPressEmail={setShowModalPressEmail}
            />
          )}
          {step === StepEnum.GENERATE_SUCCESS && (
            <Step4PC handleClickBackToHome={handleClickBackToHome} />
          )}
        </HomeWrapper>
      ) : (
        <HomeWrapper>
          <StepHeader
            step={step}
            successPurchase={successPurchase}
            onClick={handleClickBack}
          />
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
            />
          )}
          {step === StepEnum.PREVIEW_STYLE && (
            <PreviewStyle
              setStep={setStep}
              listStyles={listStyles}
              successPurchase={successPurchase}
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
              setShowModalPressEmail={setShowModalPressEmail}
            />
          )}
          {step === StepEnum.GENERATE_SUCCESS && (
            <Step4 handleClickBackToHome={handleClickBackToHome} />
          )}
        </HomeWrapper>
      )}
      {showModalPayment && !successPurchase && (
        <ModalPayment
          setStep={setStep}
          prices={prices}
          open={showModalPayment}
          setOpen={setShowModalPayment}
          price={price}
          setPrice={setPrice}
          setSuccessPurchase={setSuccessPurchase}
        />
      )}
      {showModalPressEmail && (
        <ModalPressEmail
          open={showModalPressEmail}
          setOpen={setShowModalPressEmail}
          email={email}
          setEmail={setEmail}
          handleGenerate={handleGenerate}
        />
      )}
    </>
  );
}
