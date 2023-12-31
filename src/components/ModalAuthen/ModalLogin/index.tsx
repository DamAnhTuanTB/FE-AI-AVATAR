import CustomModalAuthentication from '@/components/ModalAuthen/CustomModalAuthen';
import { Dispatch, SetStateAction, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import LoginComponent from '@/components/ModalAuthen/LoginComponent';
import SignUpComponent from '@/components/ModalAuthen/SignUpComponent';
import { AuthEnum } from '@/components/ModalAuthen/constant';
import ForgetPasswordComponent from '@/components/ModalAuthen/ForgetPasswordComponent';
import ResetPasswordComponent from '@/components/ModalAuthen/ResetPasswordComponent';
import { useQuery } from 'react-query';
import generateService from '@/services/generate.service';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import {analyticsLogEvent, userPropertiesLogEvent} from "@/firebase";
import {eventTracking} from "@/firebase/firebase";

interface IModalLogin {
  open: boolean;
}

export default function ModalLogin(props: IModalLogin) {
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = searchParams.get('auth');

  const userExists = useAppSelector((state: RootState) => state.app.userExists);

  const renderForm = () => {
    if (
      auth === AuthEnum.Login ||
      (userExists === 1 &&
        auth !== AuthEnum.ForgetPassword &&
        auth !== AuthEnum.ResetPassword)
    ) {
      analyticsLogEvent(eventTracking.signInView.name);
      userPropertiesLogEvent()
      return <LoginComponent />;
    }
    if (auth === AuthEnum.SignUp || userExists === 0) {
      analyticsLogEvent(eventTracking.signUpView.name);
      userPropertiesLogEvent();
      return <SignUpComponent />;
    }
    if (
      auth === AuthEnum.ForgetPassword ||
      (auth === AuthEnum.ForgetPassword && userExists === 1)
    ) {
      return <ForgetPasswordComponent />;
    }
    if (
      auth === AuthEnum.ResetPassword ||
      (auth === AuthEnum.ResetPassword && userExists === 1)
    ) {
      return <ResetPasswordComponent />;
    }
  };

  return (
    <CustomModalAuthentication open={props.open}>
      {renderForm()}
    </CustomModalAuthentication>
  );
}
