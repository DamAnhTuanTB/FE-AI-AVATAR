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
  creditsConfig: any;
  plans: any[];
  currentSubscriptionPlan: any;
  isFreeSubscription: boolean;
}

export const initialUserInfo = {
  userName: '',
  userAvatar: '',
  userEmail: '',
  userCredits: '0',
  stripeCustomerId: '',
  stripePriceId: '',
  stripeSubscriptionId: '',
  creditExpiredAt: 0,
  subscriptionExpiredAt: 0,
};

const initialState: AppSlice = {
  selectedKeys: [],
  defaultOpenKeys: [],
  breadcrumb: [],
  showSidebar: null,
  hiddenSidebar: false,
  userInfor: initialUserInfo,
  creditsConfig: {},
  plans: [],
  currentSubscriptionPlan: null,
  isFreeSubscription: true,
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
      state.userInfor = action.payload;
    },
    setHiddenSidebar: (state, action: PayloadAction<boolean>) => {
      state.hiddenSidebar = action.payload;
    },
    setCreditsConfig: (state, action: PayloadAction<any>) => {
      state.creditsConfig = { ...state.creditsConfig, ...action.payload };
    },
    setPlans: (state, action: PayloadAction<any[]>) => {
      state.plans = action.payload;
    },

    setCurrentSubscriptionPlan: (state, action: PayloadAction<any>) => {
      state.currentSubscriptionPlan = action.payload;
    },
    setIsFreeSubscriptionPlan: (state, action: PayloadAction<boolean>) => {
      state.isFreeSubscription = action.payload;
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
  setCreditsConfig,
  setPlans,
  setCurrentSubscriptionPlan,
  setIsFreeSubscriptionPlan,
} = appSlice.actions;
export default appSlice.reducer;
