import LogoSrc from '@/assets/images/logo-secondary.svg';
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
import CountDown from '@/components/CountDown';
import { useRef } from 'react';
import Lottie from 'react-lottie';
import WatchLottie from '@/assets/jsons/stop-watch.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: WatchLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function SaleHeader() {
  const animationClockRef = useRef(null);
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
            <Lottie options={defaultOptions} ref={animationClockRef} />
          </ClockWrapper>
        </PriceTitleWrapper>

        <CountDownWrapper>
          <CountDown />
        </CountDownWrapper>
      </PriceWrapper>
    </Wrapper>
  );
}
