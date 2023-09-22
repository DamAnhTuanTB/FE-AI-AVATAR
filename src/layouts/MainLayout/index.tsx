import generateService from '@/services/generate.service';
import { setListPrice } from '@/store/slices/appSlice';
import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';

export default function MainLayout() {
  const dispatch = useDispatch();
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
  return (
    <>
      <Outlet />
    </>
  );
}
