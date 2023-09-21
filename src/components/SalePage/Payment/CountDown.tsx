import React from 'react';
import { StatisticPrimaryText, TimeNumber } from './styles';
import useCountDown from '@/hooks/useCountDown';

function CountDown() {
  const cowndown = useCountDown(`${process.env.REACT_APP_PRICING_SALE}`);
  return (
    <StatisticPrimaryText>
      End in <TimeNumber>{cowndown.days}</TimeNumber> day{' '}
      <TimeNumber>{cowndown.hours}</TimeNumber> hrs{' '}
      <TimeNumber>{cowndown.minutes}</TimeNumber> mins{' '}
      <TimeNumber>{cowndown.seconds}</TimeNumber> secs
    </StatisticPrimaryText>
  );
}

export default React.memo(CountDown);
