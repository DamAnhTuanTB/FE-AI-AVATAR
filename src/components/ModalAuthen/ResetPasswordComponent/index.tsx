import {ForgetPasswordWrapper} from "@/components/ModalAuthen/ModalLogin/styles";
import AuthenForm from "@/components/ModalAuthen/AuthenForm";
import {AUTH_ERROR_MESSAGE, AuthEnum} from "@/components/ModalAuthen/constant";
import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import authServices from "@/services/auth.service";
import {HTTP_STATUS} from "@/services/config/api";
import IcLogo from '@/assets/images/ic_logo.png'

export default function ResetPasswordComponent() {
    const [searchParams, setSearchParams] = useSearchParams();

    const resetPasswordToken = searchParams.get('token');

    const [errorMessageApi, setErrorMessageApi] = useState('')
    const [IsLinkInvalid, setIsLinkInvalid] = useState(false);

    const handleCheckTokenResetPassword = async () => {
        if (resetPasswordToken) {
            const payload = {
                token: resetPasswordToken
            };
            try {
                const res = await authServices.checkTokenInUse(payload);
                if (res && res.status === HTTP_STATUS.SUCCESS) {
                    const isInUse = res.data.data.isInUse;
                    setIsLinkInvalid(!isInUse)
                }
            } catch (err: any) {
                console.log('err', err)
                setIsLinkInvalid(false)
            }
        }
    }

    useEffect(() => {
        if (resetPasswordToken) {
            handleCheckTokenResetPassword()
        }
    }, [resetPasswordToken]);

    const handleSubmit = async (formData: any) => {

        const payload = {
            token: resetPasswordToken,
            newPassword: formData?.password
        }
        try {
            const res = await authServices.resetPassword(payload);
            if (res && res.status === HTTP_STATUS.CREATED) {
                searchParams.set('auth', AuthEnum.Login);
                setSearchParams(searchParams)
            }
        } catch (err: any) {
            console.log('err', err)
            const errMsg = err?.response.data.message || AUTH_ERROR_MESSAGE.RESET_PASSWORD.RESET_PASSWORD_FAILED;
            setErrorMessageApi(errMsg)
        }
    }

    return (
        <ForgetPasswordWrapper>
            <div className="icon">
                <img src={IcLogo} alt=""/>
            </div>

            {!IsLinkInvalid
                ? (
                    <div className="text-wrapper">
                        <div className="title">Set new password</div>
                    </div>
                )
                : (
                    <div className="text-wrapper">
                        <div className="title">Whoops, the link has been expired</div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <div className="subtitle">The password reset link has expired. Please try again.
                        </div>
                    </div>
                )
            }

            <AuthenForm
                errorMessageApi={errorMessageApi}
                typeForm={AuthEnum.ResetPassword}
                handleSubmit={handleSubmit}
                submitButtonLabel={'Set new password'}
                showForm={!IsLinkInvalid}
                showBackToSignInButton={true}
            />

        </ForgetPasswordWrapper>
    );
}

