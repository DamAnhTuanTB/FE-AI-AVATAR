import LogoSrc from '@/assets/images/logo-secondary.svg';
import WatchLottie from '@/assets/jsons/stop-watch.json';
import CountDown from '@/components/CountDown';
import useCountDown from '@/hooks/useCountDown';
import { nextTimeIncreasePrice } from '@/utils/constants';
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

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: WatchLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function SaleHeader() {
  const countdown = useCountDown(nextTimeIncreasePrice);
  const [stopWatch, setStopWatch] = useState(false);

  useEffect(() => {
    if (
      countdown.days === '00' &&
      countdown.hours === '00' &&
      countdown.minutes === '00' &&
      countdown.seconds === '00'
    ) {
      setStopWatch(true);
    }
  }, [JSON.stringify(countdown)]);

  return (
    <Wrapper>
      <Logo src={LogoSrc} alt="logo" />

      <ContentWrapper>
        <SubTitle>Pre-launch Offer</SubTitle>
        <Title>{`Elevate Your Digital Presence with \n AI-Powered Avatars! 🚀`}</Title>
        <Description>
          Craft Personalized Avatars that Mirror Your Style and Personal
        </Description>
      </ContentWrapper>

      <PriceWrapper>
        <PriceTitleWrapper>
          <Description>The price increased by 15% in</Description>
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
