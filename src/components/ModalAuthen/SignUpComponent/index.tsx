import AuthenForm from '@/components/ModalAuthen/AuthenForm';
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
import { generateRandomString } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {analyticsLogEvent, userPropertiesLogEvent} from "@/firebase";
import {eventTracking} from "@/firebase/firebase";

const SignUpComponent = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = searchParams.get('auth');
  const { logEvent } = useTrackingEvent();

  const accessToken = searchParams.get('token');
  const refreshToken = searchParams.get('refresh_token');
  const errorCode = searchParams.get('errorCode');
  const errorMessage = searchParams.get('errorMessage');
  const platform = searchParams.get('platform');

  const authUser = getCookie(CONFIG.COOKIE_AUTH_TOKEN);
  const parseAuthUser = authUser ? JSON.parse(authUser) : '';
  const cookieToken = parseAuthUser.token;

  const cookiesPlatform = getCookie(CONFIG.COOKIE_SIGN_UP_PLATFORM)

  const tokenFromLocalStorage = localStorage.getItem(
    CONFIG.LOCAL_STORAGE_TOKEN
  );
  const localStorageToken = tokenFromLocalStorage || '';

  const [errorMessageApi, setErrorMessageApi] = useState('');
  const emptyTextsArray = ['null', 'empty', 'Null', 'Empty'];

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

      analyticsLogEvent(eventTracking.signUpClick.name, {
        [eventTracking.signUpClick.params.status]: 'failed',
        [eventTracking.signUpClick.params.source]: cookiesPlatform || 'google',
      });
      userPropertiesLogEvent()

      eraseCookie(CONFIG.COOKIE_SIGN_UP_PLATFORM)

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

        analyticsLogEvent(eventTracking.signUpClick.name, {
          [eventTracking.signUpClick.params.status]: 'success',
          [eventTracking.signUpClick.params.source]: cookiesPlatform || 'google',
        });
        userPropertiesLogEvent()

        eraseCookie(CONFIG.COOKIE_SIGN_UP_PLATFORM)

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
    setCookie(CONFIG.COOKIE_SIGN_UP_PLATFORM, platform)
    window.location.href = redirectRoute;
  };

  const handleSubmit = async (formData: any) => {
    const payload = {
      firstName: `${generateRandomString(Math.floor(Math.random() * 10 + 3))}`,
      lastName: `${generateRandomString(Math.floor(Math.random() * 10 + 2))}`,
      userName: `${generateRandomString(Math.floor(Math.random() * 10 + 10))}`,
      email: formData?.email.trim(),
      password: formData?.password,
      userType: process.env.REACT_APP_USER_TYPE,
    };
    try {
      const res = await authServices.signUp(payload);

      if (res && res.status === HTTP_STATUS.CREATED) {
        analyticsLogEvent(eventTracking.signUpClick.name, {
          [eventTracking.signUpClick.params.status]: 'success',
          [eventTracking.signUpClick.params.source]: 'enter_email',
        });
        userPropertiesLogEvent()

        const payloadLogin = {
          email: formData?.email.trim(),
          password: formData?.password,
          userType: process.env.REACT_APP_USER_TYPE,
        };
        const loginRes = await authServices.login(payloadLogin);

        if (loginRes && loginRes.status === HTTP_STATUS.SUCCESS) {
          const loginData = loginRes.data.data;
          const obj = {
            accessToken: loginData?.accessToken,
            refreshToken: loginData?.refreshToken,
          };
          dispatch(loginWithSocialAccount(obj));
          searchParams.delete('auth');
          localStorage.removeItem('userIdFake');
          dispatch(setEmailSuccessPaymentButNotAuth(''));
          dispatch(setUserExists(-1));
          setSearchParams(searchParams);
          if (emailSuccessPaymentButNotAuth) {
            logEvent(eventTracking.login_purchase_click_button.name);
          }
        }
      }
    } catch (err: any) {
      console.log('err', err, err.response);
      analyticsLogEvent(eventTracking.signUpClick.name, {
        [eventTracking.signUpClick.params.status]: 'failed',
        [eventTracking.signUpClick.params.source]: 'enter_email',
      });
      userPropertiesLogEvent();

      const errMsg =
        err?.response?.data?.message ||
        AUTH_ERROR_MESSAGE.SIGN_UP.SIGN_UP_FAILED;
      setErrorMessageApi(errMsg);
    }
  };

  const emailSuccessPaymentButNotAuth = useAppSelector(
    (state: RootState) => state.app.emailSuccessPaymentButNotAuth
  );

  return (
    <>
      {/* Title */}
      <ModalTextTitle>
        {emailSuccessPaymentButNotAuth ? 'Welcome back' : ' Sign up'}
      </ModalTextTitle>

      {emailSuccessPaymentButNotAuth && (
        <NoticeText>
          To access the generated results, please register for an account using
          the email address previously used for payments:
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
        typeForm={AuthEnum.SignUp}
        handleSubmit={handleSubmit}
        submitButtonLabel={'Register'}
      />
    </>
  );
};

export default SignUpComponent;
