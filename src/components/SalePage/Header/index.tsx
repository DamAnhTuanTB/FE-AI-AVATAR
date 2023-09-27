import LogoSrc from '@/assets/images/logo-secondary.svg';
import WatchLottie from '@/assets/jsons/stop-watch.json';
import CountDown from '@/components/CountDown';
import useCountDown from '@/hooks/useCountDown';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import {
  ClockWrapper,
  ContentWrapper,
  CountDownWrapper,
  Description,
  Logo,
  PriceTitleWrapper,
  PriceWrapper,
  SubTitle,
  Title,
  Wrapper,
} from './styles';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import useFetchSaleConfig from '@/hooks/useFetchSaleConfig';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: WatchLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function SaleHeader({ prices, priceSelected }: { prices: any[], priceSelected: any}) {
  const { nextTimeIncreasePrice, nextDiscountValue, discountValue } = useFetchSaleConfig();
  const countdown = useCountDown(nextTimeIncreasePrice);
  const [stopWatch, setStopWatch] = useState(false);
  const [increasePrice, setIncreasePrice] = useState(0.5);
  const tolerance = discountValue > 0 ? 0.01 : 0;
  // console.log('pricesssss', prices);
  
  useEffect(() => {
    if (prices.length || priceSelected) {
      console.log('discountValue', discountValue);
      const discountPrice = priceSelected?.price || prices[1]?.price;
      const originalPrice = discountPrice / (1 - discountValue) + tolerance; 
      
      console.log('discountPrice', originalPrice, discountPrice);
      
      const nextDiscountPrice = originalPrice * (1 - nextDiscountValue);
      console.log('priceeeee', nextDiscountValue, originalPrice, discountPrice, nextDiscountPrice);
      const newIncreasePrice = (nextDiscountPrice - discountPrice) / discountPrice;
      console.log('newIncreasePrice', newIncreasePrice);
      setIncreasePrice(newIncreasePrice)
    }
  }, [nextDiscountValue, prices, priceSelected])

  useEffect(() => {
    if (
      countdown.days === '00' &&
      countdown.hours === '00' &&
      countdown.minutes === '00' &&
      countdown.seconds === '00'
    ) {
      setStopWatch(true);
    } else {
      setStopWatch(false);
    }
  }, [JSON.stringify(countdown)]);

  return (
    <Wrapper>
      <Link to={ROUTES.HOME}>
        <Logo src={LogoSrc} alt="logo" />
      </Link>

      <ContentWrapper>
        <SubTitle>Pre-launch Offer</SubTitle>
        <Title>{`Elevate Your Digital Presence with \n AI-Powered Avatars! 🚀`}</Title>
        <Description>
          Craft Personalized Avatars that Mirror Your Style and Personal
        </Description>
      </ContentWrapper>

      <PriceWrapper>
        <PriceTitleWrapper>
          <Description>
            {discountValue > 0 ? `The price increased by ${(increasePrice * 100).toFixed(0
              
              )}% in` : 'This deal is expired'}
          </Description>
          <ClockWrapper>
            <Lottie options={defaultOptions} isStopped={stopWatch} />
          </ClockWrapper>
        </PriceTitleWrapper>

         <CountDownWrapper>
          <CountDown />
        </CountDownWrapper>
      </PriceWrapper>
    </Wrapper>
  );
}
