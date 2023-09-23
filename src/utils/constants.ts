import moment from 'moment';

const weekday = moment().weekday();

export const LIMIT_DEFAULT = 10;

export const SALE_SCHEDULED = [
  { day: 1, discount: 0.5 },
  { day: 2, discount: 0.5 },
  { day: 3, discount: 0.25 },
  { day: 4, discount: 0.25 },
  { day: 5, discount: 0.25 },
  { day: 6, discount: 0 },
  { day: 7, discount: 0 },
];

export const discountPrice =
  SALE_SCHEDULED.find((schedule) => schedule.day === weekday)?.discount || 0;

export const INCREASE_PRICE = discountPrice === 0 ? 0 : 0.5;

export let nextWeekdayIncreasePrice = 0;
for (let i = 0; i < SALE_SCHEDULED.length; i++) {
  if (discountPrice > SALE_SCHEDULED[i].discount) {
    nextWeekdayIncreasePrice = SALE_SCHEDULED[i].day;
    break;
  }
}

export const nextTimeIncreasePrice =
  nextWeekdayIncreasePrice === 0 ||
  process.env.REACT_APP_PRICING_SALE_ENABLE !== 'true'
    ? moment().valueOf() - 1000
    : moment().weekday(nextWeekdayIncreasePrice).valueOf();
