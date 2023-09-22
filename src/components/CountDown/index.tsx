import useCountDown from '@/hooks/useCountDown';
import React from 'react';
import { Colon, TimeBlock, TimeNumber, TimeString, Wrapper } from './styles';

function CountDown() {
  const cowndown = useCountDown(`${process.env.REACT_APP_PRICING_SALE_DATE}`);

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
    </Wrapper>
  );
}

export default React.memo(CountDown);
