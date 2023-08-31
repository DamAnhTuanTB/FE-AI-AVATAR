import { useState } from 'react';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';
import { HomeWrapper } from './style';
import Step1 from './components/Step1';
import StepHeader from './components/StepHeader';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import ModalGenerateSuccess from './components/Modals/ModalGenerateSuccess';
import generateService from '@/services/generate.service';

export default function GenerateAvatar() {
  const [step, setStep] = useState(1);
  const [sessionId, setSessionId] = useState('');
  const [images, setImages] = useState<any>([]);
  const [gender, setGender] = useState('');
  const [styles, setStyles] = useState<any>([]);
  const [listStyles, setListStyles] = useState<any>([]);
  const [price, setPrice] = useState<any>();

  useQuery(['get-list-style', gender], () => generateService.getListStyles(), {
    onSuccess: (res: any) => {
      const stylesFilter = res?.data?.data?.values[gender.toLowerCase()] || [];

      const listStyles = stylesFilter.map((style: any) => ({
        id: style._id,
        thumbnail:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hIGZLu2ePulh7ycFBxMhkE_2SccWiRqCOKP9SQRbcjMPnaNsrC3FjhcLEci7r-Jg4IQ&usqp=CAU',
        alias: style.alias,
        displayName: style.displayName,
      }));

      setListStyles(listStyles);
    },
    enabled: !!gender,
  });

  const [showModalGenerateSuccess, setShowModalGenerateSuccess] =
    useState(false);

  const handleClickBack = () => {
    if (step === 1 && images.length > 0) {
      setImages([]);
      setGender('');
      setSessionId('');
      setStyles([]);
      setListStyles([]);
      setPrice('');
    } else if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
      localStorage.setItem('passGender', gender);
    } else if (step === 4) {
      setStep(3);
      localStorage.removeItem('passGender');
    }
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <HomeWrapper>
        <StepHeader step={step} onClick={handleClickBack} />
        {step === 1 && (
          <Step1
            setStep={setStep}
            images={images}
            setImages={setImages}
            setSessionId={setSessionId}
          />
        )}
        {step === 2 && (
          <Step2
            setStep={setStep}
            gender={gender}
            setGender={setGender}
            setStyles={setStyles}
          />
        )}
        {step === 3 && (
          <Step3
            setStep={setStep}
            styles={styles}
            setStyles={setStyles}
            listStyles={listStyles}
            gender={gender}
          />
        )}
        {step === 4 && (
          <Step4
            price={price}
            setPrice={setPrice}
            sessionId={sessionId}
            styles={styles}
            listStyles={listStyles}
            gender={gender}
            setStep={setStep}
            setShowModalGenerateSuccess={setShowModalGenerateSuccess}
          />
        )}
        {showModalGenerateSuccess && (
          <ModalGenerateSuccess
            open={showModalGenerateSuccess}
            setOpen={setShowModalGenerateSuccess}
          />
        )}
      </HomeWrapper>
    </>
  );
}
