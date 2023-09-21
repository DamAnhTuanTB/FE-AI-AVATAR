import React, { useRef } from 'react';
import useCountDown from '@/hooks/useCountDown';
import {
  ClockWrapper,
  Colon,
  TimeBlock,
  TimeNumber,
  TimeString,
  Wrapper,
} from './styles';
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

function CountDown() {
  const cowndown = useCountDown(`${process.env.REACT_APP_PRICING_SALE}`);
  const animationRef = useRef(null);
  return (
    <Wrapper>
      <TimeBlock>
        <TimeNumber>{cowndown.days}</TimeNumber>
        <TimeString>DAY</TimeString>
      </TimeBlock>
      <Colon>:</Colon>
      <TimeBlock>
        <TimeNumber>{cowndown.hours}</TimeNumber>
        <TimeString>HOURS</TimeString>
      </TimeBlock>
      <Colon>:</Colon>
      <TimeBlock>
        <TimeNumber>{cowndown.minutes}</TimeNumber>
        <TimeString>MINUTES</TimeString>
      </TimeBlock>
      <Colon>:</Colon>
      <TimeBlock>
        <TimeNumber>{cowndown.seconds}</TimeNumber>
        <TimeString>SECONDS</TimeString>
      </TimeBlock>

      <ClockWrapper>
        <Lottie options={defaultOptions} ref={animationRef} />
      </ClockWrapper>
    </Wrapper>
  );
}

export default React.memo(CountDown);
