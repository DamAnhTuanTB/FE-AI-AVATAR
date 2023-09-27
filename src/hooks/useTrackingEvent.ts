import { analyticsLogEvent } from '@/firebase';
import { eventTracking } from '@/firebase/firebase';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useCallback } from 'react';

export default function useTrackingEvent() {
  const { userInfor } = useAppSelector((state: RootState) => state.app);

  const logEvent = useCallback(
    (event: string, params: any = {}) => {
      const userIdParam: any = {};
      if (userInfor?.id) {
        userIdParam[eventTracking.call_api_checking_photo.params.userId] =
          userInfor?.id;
      }

      analyticsLogEvent(event, { ...params, ...userIdParam });
    },
    [userInfor?.id]
  );

  return { logEvent };
}
