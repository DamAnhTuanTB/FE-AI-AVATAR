import { CONFIG } from '@/config/service';
import { loginWithSocialAccount, logOut } from '@/store/slices/authSlice';
import { Store } from '@reduxjs/toolkit';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { get } from 'lodash';
import { APIs, HTTP_STATUS } from './config/api';
import { signatureHeaders } from './config/signature';
import tokenAuthService from './tokenAuth.service';
import { eraseCookie } from '@/utils/cookies';

let store: Store;
export const injectStore = (_store: Store) => {
  store = _store;
};

const BASE_URL = CONFIG.BASE_URL || '';

class BaseRequest {
  baseUrl: string;
  instanceAxios: AxiosInstance;
  constructor(
    baseUrl?: string,
    requestOption?: AxiosRequestConfig,
    isSignature?: boolean
  ) {
    this.baseUrl = baseUrl || BASE_URL;
    this.instanceAxios = axios.create({
      baseURL: baseUrl || BASE_URL,
    });
    this.setAuth(requestOption, isSignature);
  }

  setAuth(requestOption?: AxiosRequestConfig, isSignature?: boolean) {
    this.instanceAxios.interceptors.request.use(
      async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
        const authObj = tokenAuthService.getLocalAccessToken();
        const token =
          get(authObj, 'accessToken', '') || get(authObj, 'token', '');
        config.withCredentials = false;
        config.timeout = 2000000;
        config.headers = config.headers || {};
        if (requestOption?.headers) {
          config.headers = {
            ...config.headers,
            ...requestOption.headers,
          };
        }
        if (requestOption?.responseType) {
          config = { ...config, responseType: requestOption.responseType };
        }
        if (token) {
          config.headers = {
            ...config.headers,
            authorization: 'Bearer ' + token,
          };
        }

        if (isSignature) {
          const { encrypted, timestamp, keyId, appName } =
            await signatureHeaders();
          config.headers = {
            ...config.headers,
            'x-api-signature': encrypted,
            'x-api-timestamp': `${timestamp}`,
            'x-api-keyid': keyId,
            'app-name': appName,
            'Cross-Origin-Embedder-Policy': 'same-origin',
          };
        }

        return config;
      },
      (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
      }
    );

    this.instanceAxios.interceptors.response.use(
      async (res: AxiosResponse) => {
        return res;
      },
      async (err) => {
        const statusCode = err?.response.status;

        if (statusCode === HTTP_STATUS.UNAUTHORIZED) {
          await store.dispatch(logOut());
          eraseCookie('auth-user');
        }

        const originalConfig = err.config;
        const refreshToken = tokenAuthService.getLocalRefreshToken();
        if (refreshToken) {
          if (
            originalConfig.url &&
            !originalConfig.url.includes(CONFIG.AUTHEN_BASE_URL) &&
            err.response
          ) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
              originalConfig._retry = true;
              const authServiceEndpoint = process.env.REACT_APP_AUTHEN_BASE_URL;
              try {
                const res = await axios.post(
                  authServiceEndpoint + APIs.GENERATE_TOKEN,
                  {
                    token: refreshToken,
                  }
                );
                const data = res.data.data;
                if (data.accessToken && data.refreshToken) {
                  store.dispatch(
                    loginWithSocialAccount({
                      accessToken: data.accessToken,
                      refreshToken: data.refreshToken,
                    })
                  );
                  localStorage.setItem('check-auth-user', data.accessToken);
                }
              } catch (_error) {
                // Logging out the user by removing all the tokens from local
                // tokenAuthService.removeAuthUser();
                // window.location.href = window.location.origin;
                return Promise.reject(_error);
              }
            }
          }
        }

        return Promise.reject(err);
      }
    );
  }

  async get(path = '', params = {}): Promise<any> {
    try {
      return await this.instanceAxios.get(path, {
        params: params,
      });
    } catch (error) {
      return error;
    }
  }

  async post(path = '', data = {}, config = {}): Promise<any> {
    try {
      return await this.instanceAxios.post(path, data, config);
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  async put(path = '', data = {}): Promise<any> {
    try {
      return await this.instanceAxios.put(path, data);
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  async delete(path = '', params = {}): Promise<any> {
    try {
      return await this.instanceAxios.delete(path, { data: params });
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  async patch(path = '', data = {}): Promise<any> {
    try {
      return await this.instanceAxios.patch(path, data);
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  async _errorHandler(err: any) {
    throw err;
  }
}

export const baseRequest = new BaseRequest('', {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const generateRequest = new BaseRequest();

export const baseServerRequest = new BaseRequest(CONFIG.BASE_SERVER_URL);

export const authRequest = new BaseRequest(CONFIG.AUTHEN_BASE_URL);
