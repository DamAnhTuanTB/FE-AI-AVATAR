import Header from '@/components/Header';
import ModalLogin from '@/components/ModalAuthen/ModalLogin';
import { AuthEnum } from '@/components/ModalAuthen/constant';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import generateService from '@/services/generate.service';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setEmailSuccessPaymentButNotAuth,
  setUserExists,
} from '@/store/slices/appSlice';
import { RootState } from '@/store/store';
import { getCookie, setCookie } from '@/utils/cookies';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { Outlet, useSearchParams } from 'react-router-dom';
import { ContentWrapper, DefaultLayoutWrapper } from './style';

export default function GenerateAvatarLayout() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const auth = searchParams.get('auth');
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );
  const emailSuccessPaymentButNotAuth = useAppSelector(
    (state: RootState) => state.app.emailSuccessPaymentButNotAuth
  );
  const { logEvent } = useTrackingEvent();

  const mutationCheckCaseSuccessPaymentButNotAuth = useMutation(
    (id: string) => generateService.checkUserExist(id),
    {
      onSuccess: (res: any) => {
        if (res.data) {
          setCookie('isComeFirst', '1');
          dispatch(setEmailSuccessPaymentButNotAuth(res.data.email));
          dispatch(setUserExists(res.data.exists ? 1 : 0));
          if (res.data.exists) {
            logEvent(eventTracking.login_purchase_view.name);
          } else {
            logEvent(eventTracking.register_purchase_view.name);
          }
        } else {
          dispatch(setEmailSuccessPaymentButNotAuth(''));
        }
      },
    }
  );

  useEffect(() => {
    if (getCookie('userIdFake') && !getCookie('isComeFirst')) {
      mutationCheckCaseSuccessPaymentButNotAuth.mutate(
        getCookie('userIdFake') || ''
      );
    }
    if (getCookie('userIdFake') && auth === AuthEnum.ResetPassword) {
      mutationCheckCaseSuccessPaymentButNotAuth.mutate(
        getCookie('userIdFake') || ''
      );
    }
  }, []);

  const openModal = (auth && !isLoggedIn) || !!emailSuccessPaymentButNotAuth;

  return (
    <DefaultLayoutWrapper>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      {/* <Footer /> */}
      {openModal && <ModalLogin open={openModal} />}
    </DefaultLayoutWrapper>
  );
}
