import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { Store } from '@reduxjs/toolkit';
import { logOut } from '@/store/slices/authSlice';
import { get } from 'lodash';
import tokenAuthService from '../tokenAuth.service';

// inject store to uncomponent file
let store: Store;
export const injectStore = (_store: Store) => {
  store = _store;
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: false,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const authObj = tokenAuthService.getLocalAccessToken();
    const token = get(authObj, 'accessToken', '');
    if (token && config) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.authorization = 'Bearer ' + token; // for Spring Boot back-end
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse => {
    if (res.data.code === 401) {
      store.dispatch(logOut());
    }
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    const authObj = tokenAuthService.getLocalAccessToken();
    const refreshToken = get(authObj, 'refreshToken', '');
    if (originalConfig.url !== '/auth' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axios.post(
            process.env.REACT_APP_BASE_URL + '/auth',
            { refreshToken }
          );

          const authData = get(rs, 'data.dataSource');
          tokenAuthService.setAuthUser(authData);

          return axiosInstance(originalConfig);
        } catch (_error) {
          // Logging out the user by removing all the tokens from local
          tokenAuthService.removeAuthUser();
          window.location.href = window.location.origin;
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
