import moment from 'moment';

const weekday = moment().weekday();

const currentDate = moment();

export const LIMIT_DEFAULT = 10;

const SALE_START_AT = '2023-9-25';

const SALE_SCHEDULED = [
  { day: 1, discount: 0.5 },
  { day: 2, discount: 0.5 },
  { day: 3, discount: 0.25 },
  { day: 4, discount: 0.25 },
  { day: 5, discount: 0.25 },
  { day: 6, discount: 0 },
  { day: 7, discount: 0 },
];

const diffDays = currentDate.diff(moment(SALE_START_AT), 'days');

export const discountPrice =
  SALE_SCHEDULED.find((schedule) => schedule.day === diffDays)?.discount || 0;

export const INCREASE_PRICE = 0.5;

let nextDayIncreasePrice = 0;
for (let i = 0; i < SALE_SCHEDULED.length; i++) {
  if (discountPrice > SALE_SCHEDULED[i].discount) {
    nextDayIncreasePrice = SALE_SCHEDULED[i].day;
    break;
  }
}

export const nextTimeIncreasePrice =
  nextDayIncreasePrice === 0 ||
  process.env.REACT_APP_PRICING_SALE_ENABLE !== 'true'
    ? moment().valueOf() - 1000
    : moment(SALE_START_AT).add(nextDayIncreasePrice, 'd').valueOf();
// : nextDayIncreasePrice > weekday
// ? moment().weekday(nextDayIncreasePrice).valueOf()
// : moment().weekday(nextDayIncreasePrice).add(7, 'd').valueOf();
