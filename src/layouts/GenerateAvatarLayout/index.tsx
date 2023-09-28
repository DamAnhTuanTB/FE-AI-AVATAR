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
import { eraseCookie, getCookie, setCookie } from '@/utils/cookies';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { Outlet, useSearchParams } from 'react-router-dom';
import { ContentWrapper, DefaultLayoutWrapper } from './style';
import SaleBanner from '@/components/SaleBanner';
import { StepEnum } from '@/pages/GenerateAvatar/contants';
import { ROUTES } from '@/routes/routes';

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
            const price: any = res.data.price;
            logEvent(eventTracking.login_purchase_view.name);
            const params = {
              [eventTracking.purchase_buy_package_success.params.package]:
                price.metadata.numberStyle + 'style',
              [eventTracking.purchase_buy_package_success.params.sales]:
                price.metadata.type,
              [eventTracking.purchase_buy_package_success.params.from]:
                searchParams.get('from'),
              [eventTracking.purchase_buy_package_success.params.value]:
                price.unit_amount / 100,
              [eventTracking.purchase_buy_package_success.params.mail]:
                res.data.email,
            };

            if (getCookie('savedGender') || getCookie('savedGenderCopy')) {
              params.gender =
                getCookie('savedGender') || getCookie('savedGenderCopy');
            }
            logEvent(eventTracking.purchase_buy_package_success.name, params);
            eraseCookie('savedGender');
            eraseCookie('savedGenderCopy');
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

  const step = useAppSelector((state: RootState) => state.app.step);

  const showBanner =
    step === StepEnum.GUIDE ||
    step === StepEnum.UPLOAD_IMAGE ||
    step === StepEnum.PICK_GENDER;

  return (
    <DefaultLayoutWrapper>
      {showBanner && <SaleBanner src={ROUTES.SALE_PAGE} />}
      <Header />
      <ContentWrapper
        style={{
          height: showBanner ? 'calc(100vh - 70px)' : 'calc(100vh - 70px)',
        }}
      >
        <Outlet />
      </ContentWrapper>
      {/* <Footer /> */}
      {openModal && <ModalLogin open={openModal} />}
    </DefaultLayoutWrapper>
  );
}
