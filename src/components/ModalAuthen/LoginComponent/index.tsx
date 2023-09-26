import {
  LoginWithSocialWrapper,
  ModalTextTitle,
  NoticeText,
  OrTextWrapper,
} from '@/components/ModalAuthen/ModalLogin/styles';
import {
  AUTH_ERROR_MESSAGE,
  AuthEnum,
  loginWithSocialArr,
} from '@/components/ModalAuthen/constant';
import AuthenForm from '@/components/ModalAuthen/AuthenForm';
import React, { useEffect, useState } from 'react';
import authServices from '@/services/auth.service';
import { HTTP_STATUS } from '@/services/config/api';
import { loginWithSocialAccount } from '@/store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useSearchParams } from 'react-router-dom';
import { getCookie } from '@/utils/cookies';
import { CONFIG } from '@/config/service';
import { RootState } from '@/store/store';
import {
  setEmailSuccessPaymentButNotAuth,
  setUserExists,
} from '@/store/slices/appSlice';
import { analyticsLogEvent } from '@/firebase';
import { eventTracking } from '@/firebase/firebase';

const LoginComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = searchParams.get('auth');

  const errorCode = searchParams.get('errorCode');
  const accessToken = searchParams.get('token');
  const refreshToken = searchParams.get('refresh_token');
  const errorMessage = searchParams.get('errorMessage');
  const platform = searchParams.get('platform');

  const authUser = getCookie(CONFIG.COOKIE_AUTH_TOKEN);
  const parseAuthUser = authUser ? JSON.parse(authUser) : '';
  const cookieToken = parseAuthUser.token;

  const tokenFromLocalStorage = localStorage.getItem(
    CONFIG.LOCAL_STORAGE_TOKEN
  );
  const localStorageToken = tokenFromLocalStorage || '';
  const emptyTextsArray = ['null', 'empty', 'Null', 'Empty'];
  const [errorMessageApi, setErrorMessageApi] = useState('');

  const emailSuccessPaymentButNotAuth = useAppSelector(
    (state: RootState) => state.app.emailSuccessPaymentButNotAuth
  );

  useEffect(() => {
    let error = '';
    if (errorCode && errorMessage && !accessToken && !cookieToken) {
      if (emptyTextsArray.some((v) => errorMessage.includes(v))) {
        error = `Your ${
          platform || ''
        } account has an error. ${errorMessage}. Please fix and login again.`;
      } else {
        error = 'Access denied. Please login again!';
      }
      setErrorMessageApi(error);
    }
  }, [errorCode, accessToken]);

  useEffect(() => {
    if (accessToken && refreshToken) {
      // Chưa Login
      if (accessToken !== localStorageToken) {
        const payload = { accessToken, refreshToken };
        dispatch(loginWithSocialAccount(payload));
        localStorage.setItem(CONFIG.LOCAL_STORAGE_TOKEN, accessToken);
        searchParams.delete('auth');
        searchParams.delete('token');
        searchParams.delete('refresh_token');
        setSearchParams(searchParams);
      }
      // Đã Login
      else {
        searchParams.delete('auth');
        setSearchParams(searchParams);
      }
    }
  }, []);

  const handleLoginWithSocial = (platform: string) => {
    if (errorCode) {
      searchParams.delete('errorCode');
    }
    const newPath = `${window.location.protocol}//${window.location.host}${window.location.pathname}?auth=${auth}`;

    const redirectRoute = `${process.env.REACT_APP_AUTHEN_BASE_URL}/${platform}?redirect_url=${newPath}&user_type=${process.env.REACT_APP_USER_TYPE}&platform=${platform}`;
    window.location.href = redirectRoute;
  };

  const handleSubmit = async (formData: any) => {
    const payload = {
      email: formData?.email.trim(),
      password: formData?.password,
      userType: process.env.REACT_APP_USER_TYPE,
    };
    try {
      const res = await authServices.login(payload);
      if (res && res.status === HTTP_STATUS.SUCCESS) {
        const data = res.data.data;
        const obj = {
          accessToken: data.accessToken,
          refreshToken: formData.isChecked ? data.refreshToken : '',
        };
        dispatch(loginWithSocialAccount(obj));
        searchParams.delete('auth');
        localStorage.removeItem('userIdFake');
        dispatch(setEmailSuccessPaymentButNotAuth(''));
        dispatch(setUserExists(-1));
        setSearchParams(searchParams);
        if (emailSuccessPaymentButNotAuth) {
          analyticsLogEvent(eventTracking.login_purchase_click_button.name);
        }
      }
    } catch (err: any) {
      console.log('err', err);
      let errMsg =
        err?.response?.data?.message || AUTH_ERROR_MESSAGE.LOGIN.LOGIN_FAILED;
      if (errMsg === AUTH_ERROR_MESSAGE.LOGIN.EMAIL_PASSWORD_WRONG_API) {
        errMsg = AUTH_ERROR_MESSAGE.LOGIN.EMAIL_PASSWORD_WRONG_DISPLAY;
      }
      setErrorMessageApi(errMsg);
    }
  };

  return (
    <>
      {/* Title */}
      <ModalTextTitle>
        {emailSuccessPaymentButNotAuth
          ? 'Welcome back'
          : ' Sign in to your account'}
      </ModalTextTitle>

      {emailSuccessPaymentButNotAuth && (
        <NoticeText>
          Your email has been registered in this site. Please log in to link
          your payment with your account:
        </NoticeText>
      )}

      {/*    Login via social buttons */}
      {!emailSuccessPaymentButNotAuth && (
        <LoginWithSocialWrapper>
          {loginWithSocialArr.map((item: any) => {
            return (
              <div
                key={item.platform}
                className={'login-social-button'}
                onClick={() => handleLoginWithSocial(item.platform)}
              >
                <div className="login-icon-wrapper">
                  <img src={item.icon} alt="" className="login-icon" />
                </div>
                <div className="button-title">{item.title}</div>
              </div>
            );
          })}
        </LoginWithSocialWrapper>
      )}

      {/*    OR text */}
      {!emailSuccessPaymentButNotAuth && (
        <OrTextWrapper>
          <div className="dash" />
          <div className="text">or</div>
          <div className="dash" />
        </OrTextWrapper>
      )}

      {/*    Form */}
      <AuthenForm
        errorMessageApi={errorMessageApi}
        setErrorMessageApi={setErrorMessageApi}
        typeForm={AuthEnum.Login}
        handleSubmit={handleSubmit}
        submitButtonLabel={'Sign In'}
      />
    </>
  );
};

export default LoginComponent;
