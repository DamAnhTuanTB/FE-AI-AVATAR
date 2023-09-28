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
      userId: 'user_id',
    },
  },
  upload_photo_click_upload: {
    name: 'upload_photo_click_upload',
    params: {
      userId: 'user_id',
      source: 'source',
    },
  },
  upload_photo_click_next: {
    name: 'upload_photo_click_next',
    params: {
      userId: 'user_id',
      source: 'source',
    },
  },
  upload_photo_click_upload_more: {
    name: 'upload_photo_click_upload_more',
    params: {
      userId: 'user_id',
      source: 'source',
    },
  },
  upload_photo_checking: {
    name: 'upload_photo_checking',
    params: {
      userId: 'user_id',
      source: 'source',
    },
  },
  select_gender_view: {
    name: 'select_gender_view',
    params: {
      userId: 'user_id',
      source: 'source',
    },
  },
  select_gender_click_next: {
    name: 'select_gender_click_next',
    params: {
      gender: 'gender',
      userId: 'user_id',
      source: 'source',
    },
  },
  preview_style_view: {
    name: 'preview_style_view',
    params: {
      userId: 'user_id',
      source: 'source',
    },
  },
  preview_style_click_next: {
    name: 'preview_style_click_next',
    params: {
      userId: 'user_id',
      source: 'source',
    },
  },
  purchase_view: {
    name: 'purchase_view',
    params: {
      userId: 'user_id',
    },
  },
  purchase_click_button: {
    name: 'purchase_click_button',
    params: {
      package: 'package',
      gender: 'gender',
      sales: 'sales',
      userId: 'user_id',
      source: 'source',
    },
  },
  login_purchase_view: {
    name: 'login _purchase_view',
    params: {
      userId: 'user_id',
    },
  },
  login_purchase_click_button: {
    name: 'login _purchase_click_button',
    params: {
      status: 'status',
      userId: 'user_id',
    },
  },
  register_purchase_view: {
    name: 'register_purchase_view',
    params: {
      userId: 'user_id',
    },
  },
  register_purchase_click_button: {
    name: 'login register_purchase_click_button',
    params: {
      status: 'status',
      userId: 'user_id',
    },
  },
  choose_style_view: {
    name: 'choose_style_view',
    params: {
      package: 'package',
      gender: 'gender',
      userId: 'user_id',
      source: 'source',
    },
  },
  choose_style_click_generate: {
    name: 'choose_style_click_generate',
    params: {
      package: 'package',
      gender: 'gender',
      style: 'style',
      session_id: 'session_id',
      userId: 'user_id',
      source: 'source',
    },
  },
  generating_view: {
    name: 'generating_view',
    params: {
      package: 'package',
      gender: 'gender',
      style: 'style',
      userId: 'user_id',
      source: 'source',
    },
  },
  generating_click_back: {
    name: 'generating_click_back',
    params: {
      userId: 'user_id',
    },
  },
  generating_click_my_avatar: {
    name: 'generating_click_my_avatar',
    params: {
      userId: 'user_id',
    },
  },
  my_avatar_view: {
    name: 'my_avatar_view',
    params: {
      userId: 'user_id',
    },
  },
  my_avatar_click_pack: {
    name: 'my_avatar_click_pack',
    params: {
      userId: 'user_id',
    },
  },
  pack_detail_view: {
    name: 'pack_detail_view',
    params: {
      userId: 'user_id',
    },
  },
  pack_detail_click_save_all: {
    name: 'pack_detail_click_save_all',
    params: {
      userId: 'user_id',
    },
  },
  pack_detail_click_view_all: {
    name: 'pack_detail_click_view_all',
    params: {
      userId: 'user_id',
    },
  },
  photo_detail_view: {
    name: 'photo_detail_view',
    params: {
      userId: 'user_id',
    },
  },
  photo_detail_click_save: {
    name: 'photo_detail_click_save',
    params: {
      style: 'style',
      userId: 'user_id',
    },
  },
  photo_detail_click_delete: {
    name: 'photo_detail_click_delete',
    params: {
      style: 'style',
      userId: 'user_id',
    },
  },
  generate_avatar: {
    name: 'generate_avatar',
    params: {
      status: 'status',
      session_id: 'session_id',
      time: 'time',
      userId: 'user_id',
    },
  },
  call_api_checking_photo: {
    name: 'call_api_checking_photo',
    params: {
      status: 'status',
      userId: 'user_id',
    },
  },
  call_api_generate: {
    name: 'call_api_generate',
    params: {
      status: 'status',
      session_id: 'session_id',
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
  purchase_buy_package_success: {
    name: 'purchase_buy_package_success',
    params: {
      from: 'from',
      userId: 'user_id',
      value: 'value',
      mail: 'mail',
      gender: 'gender',
      package: 'package',
      sales: 'sales',
    },
  },
  mail_start_generate_send: {
    name: 'mail_start_generate_send',
    params: {
      time: 'time',
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
