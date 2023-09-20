import CustomModalAuthentication from "@/components/ModalAuthen/CustomModalAuthen";
import {Dispatch, SetStateAction, useState} from "react";
import {useSearchParams} from "react-router-dom";
import LoginComponent from "@/components/ModalAuthen/LoginComponent";
import SignUpComponent from "@/components/ModalAuthen/SignUpComponent";
import {AuthEnum} from "@/components/ModalAuthen/constant";
import ForgetPasswordComponent from "@/components/ModalAuthen/ForgetPasswordComponent";
import ResetPasswordComponent from "@/components/ModalAuthen/ResetPasswordComponent";

interface IModalLogin {
    open: boolean;
}

export default function ModalLogin(props: IModalLogin) {
    const [searchParams, setSearchParams] = useSearchParams()
    const auth = searchParams.get('auth');

    const renderForm = () => {
        if (!auth || auth === AuthEnum.Login) {
            return <LoginComponent/>
        }
        if (auth === AuthEnum.SignUp) {
            return <SignUpComponent/>
        }
        if (auth === AuthEnum.ForgetPassword) {
            return <ForgetPasswordComponent />
        }
        if (auth === AuthEnum.ResetPassword) {
            return <ResetPasswordComponent />
        }
    }

    return (
        <CustomModalAuthentication open={props.open}>
            {renderForm()}
        </CustomModalAuthentication>
    )
}
