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
import { CONFIG } from '@/config/service';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import authServices from '@/services/auth.service';
import { HTTP_STATUS } from '@/services/config/api';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setEmailSuccessPaymentButNotAuth,
  setUserExists,
} from '@/store/slices/appSlice';
import { loginWithSocialAccount } from '@/store/slices/authSlice';
import { RootState } from '@/store/store';
import {eraseCookie, getCookie, setCookie} from '@/utils/cookies';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {analyticsLogEvent, userPropertiesLogEvent} from "@/firebase";
import AuthenForm from "@/components/ModalAuthen/AuthenForm";

const LoginComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = searchParams.get('auth');
  const { logEvent } = useTrackingEvent();

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
        analyticsLogEvent(eventTracking.signInClick.name, {
            [eventTracking.signInClick.params.status]: 'failed',
            [eventTracking.signInClick.params.source]: `${platform}`,
        });
        userPropertiesLogEvent();
        eraseCookie(CONFIG.COOKIE_SIGN_IN_PLATFORM);

      setErrorMessageApi(error);
    }
  }, [errorCode, accessToken]);

  const cookiesPlatform = getCookie(CONFIG.COOKIE_SIGN_IN_PLATFORM)

  useEffect(() => {
    if (accessToken && refreshToken) {
      // Chưa Login
      if (accessToken !== localStorageToken) {
        const payload = { accessToken, refreshToken };
        dispatch(loginWithSocialAccount(payload));
        localStorage.setItem(CONFIG.LOCAL_STORAGE_TOKEN, accessToken);

        analyticsLogEvent(eventTracking.signInClick.name, {
          [eventTracking.signInClick.params.status]: 'success',
          [eventTracking.signInClick.params.source]: cookiesPlatform || 'google',
        });
        userPropertiesLogEvent();
        eraseCookie(CONFIG.COOKIE_SIGN_UP_PLATFORM);

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
    console.log('newPath', newPath);
    
    const redirectRoute = `${process.env.REACT_APP_AUTHEN_BASE_URL}/${platform}?redirect_url=${newPath}&user_type=${process.env.REACT_APP_USER_TYPE}&platform=${platform}`;
    console.log('redirectRoute', redirectRoute);
    setCookie(CONFIG.COOKIE_SIGN_IN_PLATFORM, platform)
    // window.location.href = redirectRoute;
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

        analyticsLogEvent(eventTracking.signInClick.name, {
          [eventTracking.signInClick.params.status]: 'success',
          [eventTracking.signInClick.params.source]: 'enter_email',
        });
        userPropertiesLogEvent()

        setSearchParams(searchParams);
        if (emailSuccessPaymentButNotAuth) {
          logEvent(eventTracking.login_purchase_click_button.name);
        }
      }
    } catch (err: any) {
      console.log('err', err);
      let errMsg =
        err?.response?.data?.message || AUTH_ERROR_MESSAGE.LOGIN.LOGIN_FAILED;
      if (errMsg === AUTH_ERROR_MESSAGE.LOGIN.EMAIL_PASSWORD_WRONG_API) {
        errMsg = AUTH_ERROR_MESSAGE.LOGIN.EMAIL_PASSWORD_WRONG_DISPLAY;
      }
      analyticsLogEvent(eventTracking.signInClick.name, {
          [eventTracking.signInClick.params.status]: 'failed',
          [eventTracking.signInClick.params.source]: 'enter_email',
        });
        userPropertiesLogEvent()

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
      {/* {!emailSuccessPaymentButNotAuth && ( */}
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
      {/* )} */}

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
