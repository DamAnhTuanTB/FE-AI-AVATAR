import {LoginWithSocialWrapper, ModalTextTitle, OrTextWrapper} from "@/components/ModalAuthen/ModalLogin/styles";
import {AUTH_ERROR_MESSAGE, AuthEnum, loginWithSocialArr} from "@/components/ModalAuthen/constant";
import AuthenForm from "@/components/ModalAuthen/AuthenForm";
import {useEffect, useState} from "react";
import {generateRandomString} from "@/utils/helpers";
import authServices from "@/services/auth.service";
import {HTTP_STATUS} from "@/services/config/api";
import {loginWithSocialAccount} from "@/store/slices/authSlice";
import {useAppDispatch} from "@/store/hooks";
import {useSearchParams} from "react-router-dom";
import {getCookie, setCookie} from "@/utils/cookies";
import {CONFIG} from "@/config/service";

const SignUpComponent = () => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const auth = searchParams.get('auth');

    const accessToken = searchParams.get('token');
    const refreshToken = searchParams.get('refresh_token');
    const errorCode = searchParams.get('errorCode');
    const errorMessage = searchParams.get('errorMessage');
    const platform = searchParams.get('platform');

    const authUser = getCookie(CONFIG.COOKIE_AUTH_TOKEN);
    const parseAuthUser = authUser ? JSON.parse(authUser) : '';
    const cookieToken = parseAuthUser.token;

    const tokenFromLocalStorage = localStorage.getItem('check-auth-user');
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
            setErrorMessageApi(error);
        }
    }, [errorCode, accessToken]);

    useEffect(() => {
        if (accessToken && refreshToken) {
            // Chưa Login
            if (accessToken !== localStorageToken) {
                const payload = {accessToken, refreshToken};
                dispatch(loginWithSocialAccount(payload));
                localStorage.setItem('check-auth-user', accessToken);
                setCookie('isRedirectRoute', 'true');
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
        console.log('newPath', newPath)

        const redirectRoute = `${process.env.REACT_APP_AUTHEN_BASE_URL}/${platform}?redirect_url=${newPath}&user_type=${process.env.REACT_APP_USER_TYPE}&platform=${platform}`;
        window.location.href = redirectRoute;
    };

    const handleSubmit = async (formData: any) => {
        const payload = {
            firstName: `${generateRandomString(
                Math.floor(Math.random() * 10 + 3)
            )}`,
            lastName: `${generateRandomString(
                Math.floor(Math.random() * 10 + 2)
            )}`,
            userName: `${generateRandomString(
                Math.floor(Math.random() * 10 + 10)
            )}`,
            email: formData?.email.trim(),
            password: formData?.password,
            userType: process.env.REACT_APP_USER_TYPE
        };
        try {
            const res = await authServices.signUp(payload);

            if (res && res.status === HTTP_STATUS.CREATED) {
                const payloadLogin = {
                    email: formData?.email.trim(),
                    password: formData?.password,
                    userType: process.env.REACT_APP_USER_TYPE
                };
                const loginRes = await authServices.login(payloadLogin);

                if (loginRes && loginRes.status === HTTP_STATUS.SUCCESS) {
                    const loginData = loginRes.data.data
                    const obj = {
                        accessToken: loginData?.accessToken,
                        refreshToken: loginData?.refreshToken
                    };
                    dispatch(loginWithSocialAccount(obj));
                    searchParams.delete('auth');
                    setSearchParams(searchParams);
                }

            }
        } catch (err: any) {
            console.log('err', err, err.response)
            const errMsg = err?.response?.data?.message || AUTH_ERROR_MESSAGE.SIGN_UP.SIGN_UP_FAILED;
            setErrorMessageApi(errMsg)
        }
    }

    return (
        <>
            {/* Title */}
            <ModalTextTitle>
                Sign up
            </ModalTextTitle>

            {/*    Login via social buttons */}
            <LoginWithSocialWrapper>
                {loginWithSocialArr.map((item: any) => {
                    return (
                        <div
                            key={item.platform}
                            className={'login-social-button'}
                            onClick={() => handleLoginWithSocial(item.platform)}>
                            <div className="login-icon-wrapper">
                                <img src={item.icon} alt="" className='login-icon'/>
                            </div>
                            <div className="button-title">
                                {item.title}
                            </div>
                        </div>
                    )
                })}
            </LoginWithSocialWrapper>

            {/*    OR text */}
            <OrTextWrapper>
                <div className="dash"/>
                <div className="text">or</div>
                <div className="dash"/>
            </OrTextWrapper>

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
}

export default SignUpComponent
