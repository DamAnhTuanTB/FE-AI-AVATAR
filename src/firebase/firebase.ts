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
  upload_photo_click_upload: {
    name: 'upload_photo_click_upload',
  },
  upload_photo_click_next: {
    name: 'upload_photo_click_next',
  },
  upload_photo_click_upload_more: {
    name: 'upload_photo_click_upload_more',
  },
  upload_photo_checking: {
    name: 'upload_photo_checking',
  },
  select_gender_view: {
    name: 'select_gender_view',
  },
  select_gender_click_next: {
    name: 'select_gender_click_next',
    params: {
      gender: 'gender',
    },
  },
  preview_style_view: {
    name: 'preview_style_view',
  },
  preview_style_click_next: {
    name: 'preview_style_click_next',
  },
  purchase_view: {
    name: 'purchase_view',
  },
  purchase_click_button: {
    name: 'purchase_click_button',
    params: {
      package: 'package',
      gender: 'gender',
      sales: 'sales',
    },
  },
  login_purchase_view: {
    name: 'login _purchase_view',
  },
  login_purchase_click_button: {
    name: 'login _purchase_click_button',
    params: {
      status: 'status',
    },
  },
  register_purchase_view: {
    name: 'register_purchase_view',
  },
  register_purchase_click_button: {
    name: 'login register_purchase_click_button',
    params: {
      status: 'status',
    },
  },
  choose_style_view: {
    name: 'choose_style_view',
    params: {
      package: 'package',
      gender: 'gender',
    },
  },
  choose_style_click_generate: {
    name: 'choose_style_click_generate',
    params: {
      package: 'package',
      gender: 'gender',
      style: 'style',
      session_id: 'session_id',
    },
  },
  generating_view: {
    name: 'generating_view',
    params: {
      package: 'package',
      gender: 'gender',
      style: 'style',
    },
  },
  generating_click_back: {
    name: 'generating_click_back',
  },
  generating_click_my_avatar: {
    name: 'generating_click_my_avatar',
  },
  my_avatar_view: {
    name: 'my_avatar_view',
  },
  my_avatar_click_pack: {
    name: 'my_avatar_click_pack',
  },
  pack_detail_view: {
    name: 'pack_detail_view',
  },
  pack_detail_click_save_all: {
    name: 'pack_detail_click_save_all',
  },
  pack_detail_click_view_all: {
    name: 'pack_detail_click_view_all',
  },
  photo_detail_view: {
    name: 'photo_detail_view',
  },
  photo_detail_click_save: {
    name: 'photo_detail_click_save',
    params: {
      style: 'style',
    },
  },
  photo_detail_click_delete: {
    name: 'photo_detail_click_delete',
    params: {
      style: 'style',
    },
  },
  generate_avatar: {
    name: 'generate_avatar',
    params: {
      status: 'status',
      form: 'form',
      time: 'time',
    },
  },
  call_api_checking_photo: {
    name: 'call_api_checking_photo',
    params: {
      status: 'status',
    },
  },
  call_api_generate: {
    name: 'call_api_generate',
    params: {
      status: 'status',
      session_id: 'session_id',
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
