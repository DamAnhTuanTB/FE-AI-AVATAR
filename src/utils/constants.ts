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
