import { initializeApp } from 'firebase/app';
import { getAnalytics, setUserProperties, logEvent } from 'firebase/analytics';
import { getRemoteConfig } from 'firebase/remote-config';
import { firebaseConfig } from './firebase';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import moment from 'moment';

const app = initializeApp(firebaseConfig);

// const messaging = getMessaging(app);

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

// export const fetchToken = async (setTokenFound: any, setToken: any) => {
//   return getToken(messaging, {
//     vapidKey:
//       'BJnaRFJYAJSk-_jObH_hmIBDvY2tmPovkcZ0w6MUT2QMSOArstZqxviWngV0KiONUSg-6PR3jQ7pIHRrG8wEDbM',
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log('current token for client: ', currentToken);
//         setTokenFound(true);
//         setToken(currentToken);
//         // Track the token -> client mapping, by sending to backend server
//         // show on the UI that permission is secured
//       } else {
//         console.log(
//           'No registration token available. Request permission to generate one.'
//         );
//         setTokenFound(false);
//         // shows on the UI that permission is required
//       }
//     })
//     .catch((err) => {
//       console.log('An error occurred while retrieving token. ', err);
//       // catch error while creating client token
//     });
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
//   });
