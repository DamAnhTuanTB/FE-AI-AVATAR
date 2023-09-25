import { ROUTES } from '@/routes/routes';
import generateService from '@/services/generate.service';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { getCookie, setCookie } from '@/utils/cookies';
import { useMutation } from 'react-query';

export default function usePurchase() {
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const purchaseMutation = useMutation(
    (payload: any) => generateService.purchaseNow(payload),
    {
      onSuccess: (res: any) => {
        if (res.data?.url) {
          window.location.assign(res.data?.url);
        }
      },
    }
  );

  const handlePurchase = (priceId?: string) => {
    const payload: any = {
      priceId,
      redirectUrl: `${window.location.protocol}//${window.location.host}${ROUTES.APP_PAGE}?from=email_pre_launch`,
      // redirectUrl: 'https://avatar.apero.vn/',
    };
    if (isLoggedIn) {
      payload.userId = userInfor.id;
      payload.email = userInfor.userEmail;
    } else {
      const userIdFake =
        (Math.floor(Math.random() * (999999999999999 - 1 + 1)) + 1).toString() +
        (Math.floor(Math.random() * (999999999999999 - 1 + 1)) + 1).toString();
      payload.userId = 'fake' + userIdFake;
      setCookie('userIdFake', 'fake' + userIdFake);
      getCookie('isComeFirst');
    }
    purchaseMutation.mutate(payload);
  };

  return { handlePurchase };
}
