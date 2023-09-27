import useCountDown from '@/hooks/useCountDown';
import useFetchSaleConfig from '@/hooks/useFetchSaleConfig';
import React from 'react';
import { StatisticPrimaryText, TimeNumber } from './styles';

function CountDown() {
  const { nextTimeIncreasePrice } = useFetchSaleConfig();
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
