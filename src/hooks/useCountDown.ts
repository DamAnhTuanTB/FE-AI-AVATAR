import moment from 'moment';
import React, { useEffect, useState } from 'react';

interface CountdownType {
  days: number | null;
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
}

const dayUnit = 60 * 60 * 24;
const hourUnit = 60 * 60;
const minuteUnit = 60;

export default function useCountDown(targetTime: string | number) {
  const [countdown, setCountDown] = useState<CountdownType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (targetTime) {
      const targetTimeUnix = moment(targetTime).unix();
      const interval = setInterval(() => {
        const currentTimeUnix = moment().unix();

        const duration = targetTimeUnix - currentTimeUnix;

        const days = Math.trunc(duration / dayUnit);
        const hours = Math.trunc((duration - days * dayUnit) / hourUnit);
        console.log(hours);
        console.log(duration - days * hourUnit - hours * hourUnit);
        const minutes = Math.trunc(
          (duration - days * hourUnit - hours * hourUnit) / minuteUnit
        );
        console.log(duration);
        const seconds =
          duration - days * hourUnit - hours * hourUnit - minutes * minuteUnit;
        // console.log(days);
        // console.log(hours);
        // console.log(minutes);
        // console.log(seconds);
      }, 1000);
    }
  }, [targetTime]);
  return null;
}
