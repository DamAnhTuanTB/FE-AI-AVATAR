import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { BreadcrumbItem } from '@/types/common';
import { getUserInfo } from './app.thunk';

export interface AppSlice {
  selectedKeys: string[];
  defaultOpenKeys: string[];
  breadcrumb: BreadcrumbItem[];
  showSidebar: any;
  hiddenSidebar: boolean;
  userInfor: any;
  emailSuccessPaymentButNotAuth: string;
  userExists: number;
  prices: any[];
  showModalUploadFilesExtendLimit: boolean;
  step: number;
  paymentSuccessLoginGoogle: boolean;
}

export const initialUserInfo = {
  userName: '',
  userAvatar: '',
  userEmail: '',
};

const initialState: AppSlice = {
  selectedKeys: [],
  defaultOpenKeys: [],
  breadcrumb: [],
  showSidebar: null,
  hiddenSidebar: false,
  userInfor: initialUserInfo,
  emailSuccessPaymentButNotAuth: '',
  userExists: -1,
  prices: [],
  showModalUploadFilesExtendLimit: false,
  step: 0,
  paymentSuccessLoginGoogle: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<any>) => {
      state.defaultOpenKeys = action.payload.defaultOpenKeys;
      state.selectedKeys = action.payload.selectedKeys;
      state.breadcrumb = action.payload.breadcrumb;
    },
    setShowSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload;
    },
    setUserInfor: (state, action: PayloadAction<any>) => {
      state.userInfor = { ...state.userInfor, ...action.payload };
    },
    setHiddenSidebar: (state, action: PayloadAction<boolean>) => {
      state.hiddenSidebar = action.payload;
    },
    setEmailSuccessPaymentButNotAuth: (
      state,
      action: PayloadAction<string>
    ) => {
      state.emailSuccessPaymentButNotAuth = action.payload;
    },
    setUserExists: (state, action: PayloadAction<number>) => {
      state.userExists = action.payload;
    },
    setListPrice: (state, action: PayloadAction<any[]>) => {
      state.prices = action.payload;
    },
    setStepGenerate: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setPaymentSuccessLoginGoogle: (state, action: PayloadAction<boolean>) => {
      state.paymentSuccessLoginGoogle = action.payload;
    },
    setShowModalUploadFilesExtendLimit: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.showModalUploadFilesExtendLimit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userInfor = action.payload;
    });
  },
});

export const selectAppSlice = (state: RootState) => state.app;

export const {
  setAppState,
  setShowSidebar,
  setUserInfor,
  setHiddenSidebar,
  setEmailSuccessPaymentButNotAuth,
  setUserExists,
  setListPrice,
  setShowModalUploadFilesExtendLimit,
  setStepGenerate,
  setPaymentSuccessLoginGoogle,
} = appSlice.actions;
export default appSlice.reducer;
