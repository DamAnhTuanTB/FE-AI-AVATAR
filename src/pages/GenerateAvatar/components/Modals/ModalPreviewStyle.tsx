import { eventTracking } from '@/firebase/firebase';
import IconClose from '@/assets/images/icon-delete-image.svg';
import useScreenSize from '@/hooks/useScreenSize';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { Skeleton } from 'antd';
import Button from '../Button';
import { Wrapper } from './style';
import { useSearchParams } from 'react-router-dom';
import IconBackPreview from '@/assets/images/icon-back-preview.svg';
import { useState } from 'react';
import useGetListStyles from '@/hooks/useGetListStyles';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useMutation } from 'react-query';
import generateService from '@/services/generate.service';
import { eraseCookie, setCookie } from '@/utils/cookies';
import { ROUTES } from '@/routes/routes';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setShowModalPayment?: any;
  gender: string;
  hasClose?: boolean;
  savingData?: boolean;
  setSavingData?: any;
  price?: any;
  handleSaveData?: any;
}

export default function ModalPreviewStyle({
  open,
  setOpen,
  setShowModalPayment,
  gender,
  hasClose = false,
  savingData,
  setSavingData,
  price,
  handleSaveData,
}: IProps) {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);

  const [genderPreview, setGenderPreview] = useState(gender);
  const { logEvent } = useTrackingEvent();
  const { isMobile, isDesktop } = useScreenSize();
  const [searchParams] = useSearchParams();

  const listStyles = useGetListStyles(genderPreview);

  const handleCancel = () => {
    setOpen(false);
    if (setShowModalPayment) {
      setShowModalPayment(true);
    }
  };
  const handleClickNext = () => {
    handleCancel();
    logEvent(eventTracking.preview_style_click_next.name, {
      [eventTracking.preview_style_click_next.params.source]:
        searchParams.get('from'),
    });
  };

  const purchaseMutation = useMutation(
    (payload: any) => generateService.purchaseNow(payload),
    {
      onSuccess: (res: any) => {
        if (res.data?.url) {
          handleSaveData(res.data?.url);
        }
      },
    }
  );

  const handleClickPurchase = () => {
    let redirectUrl = `${window.location.protocol}//${window.location.host}${ROUTES.APP_PAGE}?payment-success=1`;
    if (searchParams.get('from')) {
      redirectUrl += `&from=${searchParams.get('from')}`;
    }
    const payload: any = {
      priceId: price.id,
      redirectUrl,
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
      eraseCookie('isComeFirst');
    }

    logEvent(eventTracking.purchase_click_button.name, {
      [eventTracking.purchase_click_button.params.gender]:
        gender?.toLowerCase(),
      [eventTracking.purchase_click_button.params.sales]: 'none',
      [eventTracking.purchase_click_button.params.package]:
        price?.maxStyle + 'style',
      [eventTracking.purchase_click_button.params.source]:
        searchParams.get('from'),
    });
    setSavingData(true);
    purchaseMutation.mutate(payload);
  };
  return (
    <Wrapper
      width={isMobile ? 343 : 1328}
      centered
      open={open}
      footer={false}
      closable={false}
    >
      {hasClose && (
        <img
          className="icon-close"
          src={IconClose}
          alt=""
          onClick={handleCancel}
        />
      )}

      <div
        className="modal-preview-style"
        style={{ paddingBottom: hasClose ? '24px' : '104px' }}
      >
        <div className="title-first">
          {!hasClose && (
            <div className="back" onClick={handleClickNext}>
              <img src={IconBackPreview} alt="" />
              <span>Back</span>
            </div>
          )}

          <div className="title">View all styles</div>
          <div className="description">
            Preview those styles that you can use to create amazing avatars the
            way you want.
          </div>
        </div>

        <div className="gender">
          <div
            onClick={() => setGenderPreview('Female')}
            className={`${genderPreview === 'Female' && 'active'}`}
          >
            Female
          </div>
          <div
            onClick={() => setGenderPreview('Male')}
            className={`${genderPreview === 'Male' && 'active'}`}
          >
            Male
          </div>
        </div>

        <div className="parent-list-styles">
          <div
            className="list-styles"
            style={{ paddingBottom: hasClose ? '0px' : '56px' }}
          >
            {listStyles?.length === 0
              ? Array(20)
                  .fill(1)
                  .map((item: any, index: number) => (
                    <div className="item-style" key={index}>
                      <Skeleton.Button className="skeleton-image" active />
                      <Skeleton.Button className="skeleton-text" active />
                    </div>
                  ))
              : listStyles.map((item: any) => (
                  <div key={item.id} className="item-style">
                    <img className="image-style" src={item.thumbnail} alt="" />
                    <div className="name-style">{item.displayName}</div>
                  </div>
                ))}
          </div>
        </div>
        {!hasClose && (
          <div className="bottom">
            <Button
              loading={savingData}
              onClick={handleClickPurchase}
              text="Continue Purchasing"
              width={isDesktop ? '212px' : '100%'}
              height="45px"
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
