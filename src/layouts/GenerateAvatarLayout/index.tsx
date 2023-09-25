import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { ContentWrapper, DefaultLayoutWrapper } from './style';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModalLogin from '@/components/ModalAuthen/ModalLogin';
import { AuthEnum } from '@/components/ModalAuthen/constant';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { getUserInfo } from '@/store/slices/app.thunk';
import authServices from '@/services/auth.service';
import { HTTP_STATUS } from '@/services/config/api';
import {
  setEmailSuccessPaymentButNotAuth,
  setUserExists,
  setUserInfor,
} from '@/store/slices/appSlice';
import { useMutation, useQuery } from 'react-query';
import generateService from '@/services/generate.service';
import { analyticsLogEvent } from '@/firebase';
import { eventTracking } from '@/firebase/firebase';
import { getCookie, setCookie } from '@/utils/cookies';

export default function GenerateAvatarLayout() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const [searchParams] = useSearchParams();
  const auth = searchParams.get('auth');
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const emailSuccessPaymentButNotAuth = useAppSelector(
    (state: RootState) => state.app.emailSuccessPaymentButNotAuth
  );

  const mutationCheckCaseSuccessPaymentButNotAuth = useMutation(
    (id: string) => generateService.checkUserExist(id),
    {
      onSuccess: (res: any) => {
        if (res.data) {
          setCookie('isComeFirst', '1');
          dispatch(setEmailSuccessPaymentButNotAuth(res.data.email));
          dispatch(setUserExists(res.data.exists ? 1 : 0));
          if (res.data.exists) {
            analyticsLogEvent(eventTracking.login_purchase_view.name);
          } else {
            analyticsLogEvent(eventTracking.register_purchase_view.name);
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

  const getMeFromAuthenService = async () => {
    try {
      const res = await authServices.getUserInforFromAuthenService();
      if (res && res.status === HTTP_STATUS.SUCCESS) {
        const data = res.data.data;
        const obj = {
          userAvatar: data?.avatar,
          userEmail: data?.email,
          id: data?.id,
        };
        dispatch(setUserInfor(obj));
      }
    } catch (err: any) {}
  };

  useQuery(['get-info-user', isLoggedIn], () => generateService.getInfoUser(), {
    onSuccess: (res: any) => {
      const obj = {
        listGenerate: res.data.listGenerate,
      };
      dispatch(setUserInfor(obj));
    },
    enabled: isLoggedIn,
  });

  useEffect(() => {
    if (isLoggedIn) {
      // getUserInfo()
      getMeFromAuthenService();
    }
  }, [pathname, isLoggedIn]);

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
