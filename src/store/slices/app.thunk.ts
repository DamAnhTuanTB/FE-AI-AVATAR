import authService from '@/services/auth.service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserInfo = createAsyncThunk('app/getUserInfo', async () => {
  const response = await authService.getUserInfor();

  const data = response.data;
  const userName = `${data?.firstName ? data?.firstName : ''} ${
    data?.lastName ? data?.lastName : ''
  }`;
  const obj = {
    id: data?.id,
    userName,
    userAvatar: data?.avatar ? data?.avatar : '',
    userEmail: data?.email ? data?.email : '',
    userCredits: data.credits ? parseInt(data.credits) : 0,
    stripeCustomerId: data?.stripeCustomerId ? data?.stripeCustomerId : '',
    stripePriceId: data?.stripePriceId ? data?.stripePriceId : '',
    stripeSubscriptionId: data?.stripeSubscriptionId
      ? data?.stripeSubscriptionId
      : '',
    creditExpiredAt: (data?.creditExpiredAt || 0) * 1000,
    subscriptionExpiredAt: (data?.subscriptionExpiredAt || 0) * 1000,
    userId: data?.id || '',
    activeAt: data?.activeAt,
    userSavePostFirstTimeStatus: data?.userSavePostFirstTimeStatus,
    userDownloadImageFirstTimeStatus: data?.userDownloadImageFirstTimeStatus,
    numberOfTimeUserWatchAd: data?.numberOfTimeUserWatchAd,
    userExportWritingFirstTimeStatus: data?.userExportWritingFirstTimeStatus,
  };
  localStorage.setItem('user-infor', JSON.stringify(obj));
  return {
    ...obj,
  };
});
