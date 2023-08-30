import { useState } from 'react';
import { HomeWrapper } from './style';
import { Helmet } from 'react-helmet';
import Step1 from './components/Step1';
import StepHeader from './components/StepHeader';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import ModalGenerateSuccess from './components/Modals/ModalGenerateSuccess';

const Home = () => {
  const [step, setStep] = useState(1);
  const [sessionId, setSessionId] = useState('');
  const [images, setImages] = useState<any>([]);
  const [gender, setGender] = useState('');
  const [styles, setStyles] = useState<any>([]);
  const [listStyles, setListStyles] = useState<any>([]);
  const [price, setPrice] = useState<any>();

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
      localStorage.setItem('passGender', gender);
      setStep(2);
      setListStyles([]);
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
            setListStyles={setListStyles}
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
};

export default Home;
