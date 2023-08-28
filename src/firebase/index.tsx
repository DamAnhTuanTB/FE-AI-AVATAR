import { initializeApp } from 'firebase/app';
import { getAnalytics, setUserProperties, logEvent } from 'firebase/analytics';
import { getRemoteConfig } from 'firebase/remote-config';
import { firebaseConfig } from './firebase';
import moment from 'moment';

const app = initializeApp(firebaseConfig);

export const remoteConfig = getRemoteConfig(app);

remoteConfig.settings.minimumFetchIntervalMillis = 0;

const analytics = getAnalytics(app);
export const analyticsLogEvent = (event: string, params?: any) => {
  if (process.env.REACT_APP_ENABLE_TRACKING) {
    // console.log('params', event, params);
    return logEvent(analytics, event, params);
  }
};
export const userPropertiesLogEvent = () => {
  const userInforData = localStorage.getItem('user-infor');
  const parsedUserInforData = userInforData && JSON.parse(userInforData);
  // console.log('userInforData', userInforData);

  const payload = {
    user_id: parsedUserInforData?.id,
    created_at: parsedUserInforData?.activeAt,
    subscription_date: parsedUserInforData?.subscriptionExpiredAt
      ? moment(parsedUserInforData?.subscriptionExpiredAt)
          .subtract(30, 'd')
          .utc()
          .format()
      : '',
    user_type: parsedUserInforData?.stripeCustomerId
      ? 'subscriber'
      : 'register',
  };

  // console.log('payload', payload);

  if (process.env.REACT_APP_ENABLE_TRACKING === 'true') {
    return setUserProperties(analytics, payload);
  }
};
