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
import { shuffleArray } from '@/utils/helpers';

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
  const [step, setStep] = useState(1);
  const [sessionId, setSessionId] = useState('');
  const [images, setImages] = useState<any>([]);
  const [gender, setGender] = useState('');
  const [styles, setStyles] = useState<any>([]);
  const [listStyles, setListStyles] = useState<any>([]);
  const [price, setPrice] = useState<any>(prices[1]);

  const [showModalPayment, setShowModalPayment] = useState(false);

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

  const mutationGenerate = useMutation(
    (payload: any) => generateService.generateImage(payload),
    {
      onSuccess: (res: any) => {
        setStep(4);
      },
    }
  );

  const handleGenerate = () => {
    const payload: any = {
      styles,
      gender: gender.toLowerCase(),
      sessionId,
      numImagesEachStyle: 10,
      notifyTo: 'anhtuantb2422@gmail.com',
      notifyType: 'email',
      bundleId: '1:440595538066:web:85b4c721ac6bf45a32c64b',
    };
    if (styles.length < price.maxStyle) {
      const additionalStyles: any = [];
      let restListStyles: any = listStyles.filter(
        (item: any) => !styles.includes(item.alias)
      );
      const countRandom = price.maxStyle - styles.length;

      for (let i = 0; i < countRandom; i++) {
        const shuffArray = shuffleArray(restListStyles);
        additionalStyles.push(shuffArray[0].alias);
        restListStyles = shuffArray;
        restListStyles.shift();
      }
      payload.styles = [...styles, ...additionalStyles];
    }
    mutationGenerate.mutate(payload);
  };

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
    } else if (step === 2.5) {
      setPrice(prices[1]);
      setStep(2);
    } else if (step === 3) {
      setStep(2.5);
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
        {step === 2.5 && (
          <PreviewStyle
            listStyles={listStyles}
            setShowModalPayment={setShowModalPayment}
          />
        )}
        {step === 3 && (
          <Step3
            styles={styles}
            setStyles={setStyles}
            listStyles={listStyles}
            gender={gender}
            handleGenerate={handleGenerate}
          />
        )}
        {step === 4 && <Step4 setStep={setStep} />}

        {showModalPayment && (
          <ModalPayment
            setStep={setStep}
            prices={prices}
            open={showModalPayment}
            setOpen={setShowModalPayment}
            price={price}
            setPrice={setPrice}
          />
        )}
      </HomeWrapper>
    </>
  );
}
