// Scripts for firebase and firebase messaging
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyDZlrGHkSKaxoUM-VY3nZfjoTEg4aeyHNU',
  authDomain: 'ai-avatar---web.firebaseapp.com',
  projectId: 'ai-avatar---web',
  storageBucket: 'ai-avatar---web.appspot.com',
  messagingSenderId: '440595538066',
  appId: '1:440595538066:web:85b4c721ac6bf45a32c64b',
  measurementId: 'G-6RGWWSF4M4',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
