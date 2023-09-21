import IcGoogle from '@/assets/icons/ic_login_with_google.svg';
import IcFacebook from '@/assets/icons/ic_login_with_facebook.svg';

export const AUTH_ERROR_MESSAGE = {
    LOGIN: {
        LOGIN_FAILED: 'Sign in failed. Please try again.',
        EMAIL_PASSWORD_WRONG_API: 'Email or password is wrong',
        EMAIL_PASSWORD_WRONG_DISPLAY: 'Account or password is invalid.'
    },
    SIGN_UP: {
        SIGN_UP_FAILED: 'Sign up failed. Please try again.'
    },
    FORGET_PASSWORD: {
        FORGET_PASSWORD_FAILED: 'Send email failed. Please try again.',
        NO_USER_FOUND: 'Not found user.',
        NO_EMAIL_FOUND: 'This email has not been signed up yet. Please try a new one.'
    },
    RESET_PASSWORD: {
        RESET_PASSWORD_FAILED: 'Reset password failed. Please try again.'
    }
}

export const loginWithSocialArr = [
    {
        platform: 'google',
        icon: IcGoogle,
        title: 'Continue with Google'
    },
    {
        platform: 'facebook',
        icon: IcFacebook,
        title: 'Continue with Facebook'
    }
]

export const AuthEnum = {
    Login: 'login',
    SignUp: 'sign-up',
    ForgetPassword: 'forget-password',
    ResetPassword: 'reset-password'
}
