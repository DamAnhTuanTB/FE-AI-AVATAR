/* eslint-disable react/no-unescaped-entities */
import IconBestSale from '@/assets/images/best-sale.svg';
import IconCheck from '@/assets/images/icon-check-v2.svg';
import IconClose from '@/assets/images/icon-delete-image.svg';
import ImagePayment from '@/assets/images/image-payment-v2.svg';
import { eventTracking } from '@/firebase/firebase';
import useScreenSize from '@/hooks/useScreenSize';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { ROUTES } from '@/routes/routes';
import generateService from '@/services/generate.service';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { eraseCookie, setCookie } from '@/utils/cookies';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import Button from '../Button';
import { Wrapper } from './style';
import { useSearchParams } from 'react-router-dom';
interface IProps {
  prices: any;
  open: boolean;
  setOpen: (open: boolean) => void;
  price: any;
  setPrice: any;
  setStep: any;
  handleSaveData: any;
  gender: string;
  savingData: boolean;
  setSavingData: any;
}

export default function ModalPayment({
  prices,
  open,
  setOpen,
  price,
  setPrice,
  setStep,
  handleSaveData,
  gender,
  savingData,
  setSavingData,
}: IProps) {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );
  const { logEvent } = useTrackingEvent();

  const [searchParams] = useSearchParams();

  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const { isMobile } = useScreenSize();
  useEffect(() => {
    logEvent(eventTracking.purchase_view.name);
    if (prices?.length) {
      prices.forEach((item: any) => {
        if (item.bestOffer) {
          setPrice(item);
        }
      });
    }
  }, [prices]);

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
  const handleCancel = () => {
    setOpen(false);
    if (prices?.length) {
      setPrice(prices[1]);
    }
  };
  const handleClickPrice = (item: any) => {
    setPrice(item);
  };
  const handleClickPurchase = () => {
    let redirectUrl = `${window.location.protocol}//${window.location.host}${ROUTES.APP_PAGE}?payment-success=1`;
    if (searchParams.get('from')) {
      redirectUrl += `&from=${searchParams.get('from')}`;
    }
    console.log(redirectUrl);
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
      width={isMobile ? 328 : 984}
      centered
      open={open}
      onCancel={handleCancel}
      footer={false}
      closable={false}
    >
      <img
        className="icon-close"
        src={IconClose}
        alt=""
        onClick={handleCancel}
      />
      <div className="modal-payment">
        <div className="content-modal-payment">
          <div className="text">
            <div className="title">
              Choose a package
              {/* <Tooltip title="Special AI-driven algorithm in AI Avatar instantly generates awesome portraits of a hand-drawn quality making it a go-to app for all non-artists out there. Just upload a selfie and get ready to meet another version of yourself.  We've got a plan that s perfect for you!">
                <img src={IconInfo} alt="" />
              </Tooltip> */}
            </div>
            <div className="description">
              We&apos;ve got a plan that's perfect for you!
            </div>
            <div className="list-prices">
              {prices?.length > 0 &&
                prices.map((item: any) => (
                  <div
                    className={`item-price ${
                      item?.id === price?.id && 'price-active'
                    }`}
                    key={item.id}
                    onClick={() => handleClickPrice(item)}
                  >
                    {item.bestOffer && (
                      <img src={IconBestSale} className="best-offer" />
                    )}
                    {item?.id === price?.id ? (
                      <img className="icon-check" src={IconCheck} alt="" />
                    ) : (
                      <div className="not-check" />
                    )}
                    <div className="text-price">
                      <div>{item.name}</div>
                      <div>${item.price} one time</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {!isMobile && (
            <img className="image-payment" src={ImagePayment} alt="" />
          )}
        </div>
        <div className="button">
          <Button
            loading={savingData}
            text="Purchase now"
            width={isMobile ? '100%' : '290px'}
            height="45px"
            onClick={handleClickPurchase}
          />
        </div>
      </div>
    </Wrapper>
  );
}
