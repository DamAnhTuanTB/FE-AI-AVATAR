import React from 'react';
import { StatisticPrimaryText, TimeNumber } from './styles';
import useCountDown from '@/hooks/useCountDown';
import { nextTimeIncreasePrice } from '@/utils/constants';

function CountDown() {
  const cowndown = useCountDown(nextTimeIncreasePrice);
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
