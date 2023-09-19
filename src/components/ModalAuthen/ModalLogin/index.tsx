import CustomModalAuthentication from "@/components/ModalAuthen/CustomModalAuthen";
import {Dispatch, SetStateAction, useState} from "react";
import {useSearchParams} from "react-router-dom";
import LoginComponent from "@/components/ModalAuthen/LoginComponent";
import SignUpComponent from "@/components/ModalAuthen/SignUpComponent";
import {AuthEnum} from "@/components/ModalAuthen/constant";

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
    }

    return (
        <CustomModalAuthentication open={props.open}>
            {renderForm()}
        </CustomModalAuthentication>
    )
}
