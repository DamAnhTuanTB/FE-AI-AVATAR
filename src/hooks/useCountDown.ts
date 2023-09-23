import moment from 'moment';
import React, { useEffect, useState } from 'react';

interface CountdownType {
  days: string | null;
  hours: string | null;
  minutes: string | null;
  seconds: string | null;
}

const dayUnit = 60 * 60 * 24;
const hourUnit = 60 * 60;
const minuteUnit = 60;

export default function useCountDown(targetTime: string | number) {
  const [countdown, setCountDown] = useState<CountdownType>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    let interval: any;
    if (targetTime) {
      const targetTimeUnix = moment(targetTime).unix();
      interval = setInterval(() => {
        const currentTimeUnix = moment().unix();

        const duration = targetTimeUnix - currentTimeUnix;

        const days = Math.trunc(duration / dayUnit);
        const hours = Math.trunc((duration - days * dayUnit) / hourUnit);
        const minutes = Math.trunc(
          (duration - days * dayUnit - hours * hourUnit) / minuteUnit
        );
        const seconds =
          duration - days * dayUnit - hours * hourUnit - minutes * minuteUnit;
        setCountDown({
          days: days <= 0 ? '00' : days < 10 ? `0${days}` : `${days}`,
          hours: hours <= 0 ? '00' : hours < 10 ? `0${hours}` : `${hours}`,
          minutes:
            minutes <= 0 ? '00' : minutes < 10 ? `0${minutes}` : `${minutes}`,
          seconds:
            seconds <= 0 ? '00' : seconds < 10 ? `0${seconds}` : `${seconds}`,
        });
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [targetTime]);
  return countdown;
}
