import { remoteConfig } from '@/firebase';
import { fetchAndActivate, getValue } from '@firebase/remote-config';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SALE_SCHEDULED = [
  { day: 0, discount: 0.5 },
  { day: 1, discount: 0.5 },
  { day: 2, discount: 0.25 },
  { day: 3, discount: 0.25 },
  { day: 4, discount: 0.25 },
  { day: 5, discount: 0 },
  { day: 6, discount: 0 },
];

const format = 'YYYY/MM/DD';

export default function useFetchSaleConfig() {
  const [discountValue, setDiscountValue] = useState(0);
  const [nextDiscountValue, setNextDiscountValue] = useState<any>(0);
  const [nextDayIncreasePrice, setNextDayIncreasePrice] = useState(0);
  const [nextTimeIncreasePrice, setNextTimeIncreasePrice] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [searchParams] = useSearchParams();
  const startDateQuery = searchParams.get('token_code');

  const getConfigSaleSchedule = useCallback((startDate: string | number) => {
    const currentDate = moment();

    const saleStartAt = moment(startDate).format(format);

    setStartDate(saleStartAt);

    const diffDays = currentDate.diff(moment(saleStartAt), 'days');
    // console.log('diffDays', diffDays);

    const discountValue =
      SALE_SCHEDULED.find((schedule) => schedule.day === diffDays)?.discount ||
      0;
    const nextDiscountValue = SALE_SCHEDULED.find(
      (schedule) => schedule.discount < discountValue
    )?.discount;

    // console.log('discountValue', discountValue, nextDiscountValue);
    let nextDayIncreasePrice = 0;
    for (let i = 0; i < SALE_SCHEDULED.length; i++) {
      if (discountValue > SALE_SCHEDULED[i].discount) {
        nextDayIncreasePrice = SALE_SCHEDULED[i].day;
        break;
      }
    }

    // console.log('nextDayIncreasePrice', nextDayIncreasePrice);

    const nextTimeIncreasePrice =
      nextDayIncreasePrice === 0 ||
      process.env.REACT_APP_PRICING_SALE_ENABLE !== 'true'
        ? moment().valueOf() - 1000
        : moment(saleStartAt).add(nextDayIncreasePrice, 'd').valueOf();
    // const day = nextTimeIncreasePrice.format('DD');
    // : nextDayIncreasePrice > weekday
    // ? moment().weekday(nextDayIncreasePrice).valueOf()
    // : moment().weekday(nextDayIncreasePrice).add(7, 'd').valueOf();
    // console.log('nextTimeIncreasePrice', nextTimeIncreasePrice);
    setNextDiscountValue(nextDiscountValue);
    setDiscountValue(discountValue);
    setNextDayIncreasePrice(nextDayIncreasePrice);
    setNextTimeIncreasePrice(nextTimeIncreasePrice);
  }, []);

  const getIncreasePrice = (prices: any[], priceSelected: any) => {
    const tolerance = discountValue > 0 ? 0.01 : 0;
    if (!(prices.length || priceSelected)) return 0;

    // console.log('discountValue', discountValue);
    const discountPrice = priceSelected?.price || prices[1]?.price;
    const originalPrice = discountPrice / (1 - discountValue) + tolerance;

    // console.log('discountPrice', originalPrice, discountPrice);

    const nextDiscountPrice = originalPrice * (1 - nextDiscountValue);
    // console.log('priceeeee', nextDiscountValue, originalPrice, discountPrice, nextDiscountPrice);
    const newIncreasePrice =
      (nextDiscountPrice - discountPrice) / discountPrice;
    // console.log('newIncreasePrice', newIncreasePrice);
    return newIncreasePrice;
  };

  useEffect(() => {
    if (startDateQuery) {
      getConfigSaleSchedule(Number(startDateQuery || 0));
    } else if (remoteConfig) {
      fetchAndActivate(remoteConfig)
        .then(() => {
          const startDate: any = getValue(
            remoteConfig,
            'start_date_campaign_config'
          );
          const saleStartDateRemote = startDate._value;

          getConfigSaleSchedule(saleStartDateRemote);
        })
        .catch((err) => {
          console.log('Failed to fetch remote config', err);
        });
    }
  }, []);

  return {
    nextDiscountValue,
    discountValue,
    nextDayIncreasePrice,
    nextTimeIncreasePrice,
    startDate,
    format,
    getIncreasePrice,
  };
}
