import {ForgetPasswordWrapper} from "@/components/ModalAuthen/ModalLogin/styles";
import IcForgetPasswordLogo from '@/assets/icons/ic_forget_password_logo.svg'
import AuthenForm from "@/components/ModalAuthen/AuthenForm";
import {AuthEnum} from "@/components/ModalAuthen/constant";
import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";

export default function ForgetPasswordComponent() {
    const [errorMessageApi, setErrorMessageApi] = useState('')
    const [isSendMailSuccess, setIsSendMailSuccess] = useState(false)
    const handleSubmit = (formData: any) => {
        console.log('formData', formData)
        setIsSendMailSuccess(true)
    }

    return (
        <ForgetPasswordWrapper>
            <div className="icon">
                <img src={IcForgetPasswordLogo} alt=""/>
            </div>

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
                        <div className="subtitle">We've sent you an email with a link to reset your password. Click link in email to verify.
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
                typeForm={AuthEnum.ForgetPassword}
                handleSubmit={handleSubmit}
                submitButtonLabel={'Request password reset'}
                showForm={!isSendMailSuccess}
                showBackToSignInButton={true}
            />

        </ForgetPasswordWrapper>
    );
}
