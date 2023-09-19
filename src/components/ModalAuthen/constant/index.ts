import IcGoogle from '@/assets/icons/ic_login_with_google.svg';
import IcFacebook from '@/assets/icons/ic_login_with_facebook.svg';

export const loginWithSocialArr = [
    {
        platform: 'google',
        icon: IcGoogle,
        title: 'Continue with Google'
    },
    // {
    //     platform: 'facebook',
    //     icon: IcFacebook,
    //     title: 'Continue with Facebook'
    // }
]

export const AuthEnum = {
    Login: 'login',
    SignUp: 'sign-up',
    ForgetPassword: 'forget-password',
    ResetPassword: 'reset-password'
}
