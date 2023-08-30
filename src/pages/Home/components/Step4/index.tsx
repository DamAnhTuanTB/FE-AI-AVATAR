import { useEffect } from 'react';
import { Wrapper } from './style';
import IconCheck from '@/assets/images/icon-check.svg';
import Button from '../Button';
import { useMutation } from 'react-query';
import generateService from '@/services/generate.service';
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
  },
  {
    id: 3,
    name: '200 images (20 styles)',
    price: 12.99,
    maxStyle: 20,
  },
];

interface IProps {
  price: any;
  setPrice: any;
  sessionId: string;
  styles: any;
  gender: string;
  listStyles: any;
  setShowModalGenerateSuccess: any;
  setStep: any;
}

export default function Step4({
  price,
  setPrice,
  sessionId,
  styles,
  gender,
  listStyles,
  setShowModalGenerateSuccess,
  setStep,
}: IProps) {
  useEffect(() => {
    setPrice(prices[1]);
  }, []);

  const mutationGenerate = useMutation(
    (payload: any) => generateService.generateImage(payload),
    {
      onSuccess: (res: any) => {
        setShowModalGenerateSuccess(true);
        setStep(3);
      },
    }
  );
  const handleClickPrice = (item: any) => {
    setPrice(item);
  };
  const handleClickNext = () => {
    const payload: any = {
      styles,
      gender: gender.toLowerCase(),
      sessionId,
      numImagesEachStyle: 10,
      notifyTo: 'anhtuantb2422@gmail.com',
      notifyType: 'email',
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
  return (
    <Wrapper>
      <div className="title">Choose a package</div>
      <div className="description">
        We&apos;ve got a plan that s perfect for you!
      </div>
      <div className="list-prices">
        {prices.map((item: any) => (
          <div
            className={`item-price ${item?.id === price?.id && 'price-active'}`}
            key={item.id}
            onClick={() => handleClickPrice(item)}
          >
            {item?.id === price?.id ? (
              <img className="icon-check" src={IconCheck} alt="" />
            ) : (
              <div className="not-check" />
            )}
            <div className="text-price">
              <div>{item.name}</div>
              <div>${item.price} one time</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom">
        <Button
          onClick={handleClickNext}
          text="Next"
          width="100%"
          height="45px"
        />
      </div>
    </Wrapper>
  );
}
