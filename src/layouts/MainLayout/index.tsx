import authServices from '@/services/auth.service';
import { HTTP_STATUS } from '@/services/config/api';
import generateService from '@/services/generate.service';
import { useAppSelector } from '@/store/hooks';
import { setListPrice, setUserInfor } from '@/store/slices/appSlice';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import AvatarDefault from '@/assets/images/avatar-default.svg';

export default function MainLayout() {
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const getMeFromAuthenService = async () => {
    try {
      const res = await authServices.getUserInforFromAuthenService();
      if (res && res.status === HTTP_STATUS.SUCCESS) {
        const data = res.data.data;
        const obj = {
          userAvatar: data?.avatar || AvatarDefault,
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

  useQuery(
    ['get-list-price'],
    () => generateService.getListPrice({ type: 'main' }),
    {
      onSuccess: (res: any) => {
        const listPrice = res.data?.map((item: any) => ({
          id: item.id,
          name: item.metadata.name,
          price: item.unit_amount / 100,
          maxStyle: Number(item.metadata.numberStyle),
          bestOffer: item.metadata?.popular === 'true',
        }));
        dispatch(setListPrice(listPrice));
      },
    }
  );

  useEffect(() => {
    if (isLoggedIn) {
      // getUserInfo()
      getMeFromAuthenService();
    }
  }, [pathname, isLoggedIn]);
  return (
    <>
      <Outlet />
    </>
  );
}
