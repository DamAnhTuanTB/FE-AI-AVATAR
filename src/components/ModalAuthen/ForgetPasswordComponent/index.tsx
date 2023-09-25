import {ForgetPasswordWrapper} from "@/components/ModalAuthen/ModalLogin/styles";
import IcLogo from '@/assets/images/ic_logo.png'
import AuthenForm from "@/components/ModalAuthen/AuthenForm";
import {AUTH_ERROR_MESSAGE, AuthEnum} from "@/components/ModalAuthen/constant";
import React, {useEffect, useState} from "react";
import authServices from "@/services/auth.service";
import {HTTP_STATUS} from "@/services/config/api";
import {analyticsLogEvent, userPropertiesLogEvent} from "@/firebase";
import {eventTracking} from "@/firebase/firebase";

export default function ForgetPasswordComponent() {
    const [errorMessageApi, setErrorMessageApi] = useState('')
    const [isSendMailSuccess, setIsSendMailSuccess] = useState(false);

    const handleSubmit = async (formData: any) => {
        const redirectUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?auth=${AuthEnum.ResetPassword}`;

        const payload = {
            email: formData?.email.trim(),
            userType: process.env.REACT_APP_USER_TYPE,
            redirectUrl
        }
        try {
            const res = await authServices.forgetPassword(payload);
            if (res && res.status === HTTP_STATUS.SUCCESS) {
                analyticsLogEvent(eventTracking.forgetPasswordClickRequest.name, {
                    [eventTracking.forgetPasswordClickRequest.params.status]: 'success'
                });
                userPropertiesLogEvent()
                setIsSendMailSuccess(true)
            }
        } catch (err: any) {
            console.log('err', err)
            analyticsLogEvent(eventTracking.forgetPasswordClickRequest.name, {
                [eventTracking.forgetPasswordClickRequest.params.status]: 'failed'
            });
            userPropertiesLogEvent();

            let errMsg = err?.response.data.message || AUTH_ERROR_MESSAGE.FORGET_PASSWORD.FORGET_PASSWORD_FAILED;
            if (errMsg === AUTH_ERROR_MESSAGE.FORGET_PASSWORD.NO_USER_FOUND) {
                errMsg = AUTH_ERROR_MESSAGE.FORGET_PASSWORD.NO_EMAIL_FOUND
            }

            setErrorMessageApi(errMsg)
        }
    }

    return (
        <ForgetPasswordWrapper>
            {/* <div className="icon"> */}
            {/*    <img src={IcLogo} alt=""/> */}
            {/* </div> */}

            {!isSendMailSuccess
                ? (
                    <div className="text-wrapper">
                        <div className="title">Forgot your password?</div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <div className="subtitle">Enter your email and we'll send you a link to reset your password
                        </div>
                    </div>
                )
                : (
                    <div className="text-wrapper">
                        <div className="title">Email sent</div>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <div className="subtitle">We've sent you an email with a link to reset your password. Click link
                            in email to verify.
                        </div>
                    </div>
                )
            }

            {isSendMailSuccess && (
                <div className='resend-email-wrapper'>
                    Wrong Email? {' '}
                    <span onClick={() => setIsSendMailSuccess(false)}>Try again</span>
                </div>
            )}

            <AuthenForm
                errorMessageApi={errorMessageApi}
                setErrorMessageApi={setErrorMessageApi}
                typeForm={AuthEnum.ForgetPassword}
                handleSubmit={handleSubmit}
                submitButtonLabel={'Request password reset'}
                showForm={!isSendMailSuccess}
                showBackToSignInButton={true}
            />

        </ForgetPasswordWrapper>
    );
}
