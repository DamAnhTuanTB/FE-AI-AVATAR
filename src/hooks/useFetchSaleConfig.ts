import { remoteConfig } from '@/firebase';
import { fetchAndActivate, getValue } from '@firebase/remote-config';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';

const SALE_SCHEDULED = [
  { day: 1, discount: 0.5 },
  { day: 2, discount: 0.5 },
  { day: 3, discount: 0.25 },
  { day: 4, discount: 0.25 },
  { day: 5, discount: 0.25 },
  { day: 6, discount: 0 },
  { day: 7, discount: 0 },
];

export default function useFetchSaleConfig() {
  const increasePrice = 0.5;
  const [discountPrice, setDiscountPrice] = useState(0);
  const [nextDayIncreasePrice, setNextDayIncreasePrice] = useState(0);
  const [nextTimeIncreasePrice, setNextTimeIncreasePrice] = useState(0);
  const [startDate, setStartDate] = useState('');

  const getConfigSaleSchedule = useCallback((startDate: string) => {
    const currentDate = moment();

    const saleStartAt = moment(startDate).format('YYYY/MM/DD');

    const diffDays = currentDate.diff(moment(saleStartAt), 'days');

    const discountPrice =
      SALE_SCHEDULED.find((schedule) => schedule.day === diffDays)?.discount ||
      0;

    let nextDayIncreasePrice = 0;
    for (let i = 0; i < SALE_SCHEDULED.length; i++) {
      if (discountPrice > SALE_SCHEDULED[i].discount) {
        nextDayIncreasePrice = SALE_SCHEDULED[i].day;
        break;
      }
    }

    const nextTimeIncreasePrice =
      nextDayIncreasePrice === 0 ||
      process.env.REACT_APP_PRICING_SALE_ENABLE !== 'true'
        ? moment().valueOf() - 1000
        : moment(saleStartAt).add(nextDayIncreasePrice, 'd').valueOf();
    // : nextDayIncreasePrice > weekday
    // ? moment().weekday(nextDayIncreasePrice).valueOf()
    // : moment().weekday(nextDayIncreasePrice).add(7, 'd').valueOf();

    setDiscountPrice(discountPrice);
    setNextDayIncreasePrice(nextDayIncreasePrice);
    setNextTimeIncreasePrice(nextTimeIncreasePrice);
  }, []);

  useEffect(() => {
    if (remoteConfig) {
      fetchAndActivate(remoteConfig)
        .then(() => {
          const startDate: any = getValue(
            remoteConfig,
            'start_date_campaign_config'
          );
          const saleStartDateRemote = startDate._value;
          setStartDate(saleStartDateRemote);
          getConfigSaleSchedule(saleStartDateRemote);
        })
        .catch((err) => {
          console.log('Failed to fetch remote config', err);
        });
    }
  }, []);

  return {
    increasePrice,
    discountPrice,
    nextDayIncreasePrice,
    nextTimeIncreasePrice,
    startDate,
  };
}
