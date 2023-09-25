export const firebaseConfig = {
  apiKey: 'AIzaSyDZlrGHkSKaxoUM-VY3nZfjoTEg4aeyHNU',
  authDomain: 'ai-avatar---web.firebaseapp.com',
  projectId: 'ai-avatar---web',
  storageBucket: 'ai-avatar---web.appspot.com',
  messagingSenderId: '440595538066',
  appId: '1:440595538066:web:85b4c721ac6bf45a32c64b',
  measurementId: 'G-6RGWWSF4M4',
};

export const eventTracking = {
  // landingPageView: {
  //   name: 'view_landing_page',
  //   params: {
  //     userId: 'user_id',
  //   },
  // },
  uploadPhotoView: {
    name: 'upload_photo_view',
    params: {
      source: 'source',
    },
  },
};

export const landingPageTracking = {
  view: {
    name: 'view_landing_page',
    params: {
      userId: 'user_id',
    },
  },
  clickStart: {
    name: 'landing_page_click_start',
    params: {
      from: 'from',
      userId: 'user_id',
    },
  },
};

export const salePageTracking = {
  view: {
    name: 'sales_page_view',
    params: {
      userId: 'user_id',
      source: 'source',
      day: 'day',
    },
  },
  clickBuyNow: {
    name: 'sales_page_click_buy_now',
    params: {
      package: 'package',
      userId: 'user_id',
    },
  },
};
