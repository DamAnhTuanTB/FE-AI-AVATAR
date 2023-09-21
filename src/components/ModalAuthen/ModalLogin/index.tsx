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

interface IModalLogin {
  open: boolean;
}

export default function ModalLogin(props: IModalLogin) {
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = searchParams.get('auth');

  const userExists = useAppSelector((state: RootState) => state.app.userExists);

  // const [userExist, setUserExist] = useState(0);

  // useQuery(
  //   ['check-user-exist', localStorage.getItem('userIdFake')],
  //   () =>
  //     generateService.checkUserExist(localStorage.getItem('userIdFake') || ''),
  //   {
  //     onSuccess: (res: any) => {
  //       if (res.data.exist) {
  //         setUserExist(1);
  //       } else {
  //         setUserExist(-1);
  //       }
  //     },
  //     enabled: !!localStorage.getItem('userIdFake'),
  //   }
  // );

  const renderForm = () => {
    if (
      auth === AuthEnum.Login ||
      (userExists === 1 &&
        auth !== AuthEnum.ForgetPassword &&
        auth !== AuthEnum.ResetPassword)
    ) {
      return <LoginComponent />;
    }
    if (auth === AuthEnum.SignUp || userExists === 0) {
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
