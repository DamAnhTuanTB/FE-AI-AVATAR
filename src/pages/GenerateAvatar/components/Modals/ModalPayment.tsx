import Button from '../Button';
import { Wrapper } from './style';
import IconClose from '@/assets/images/icon-delete-image.svg';
import IconCheck from '@/assets/images/icon-check.svg';
import IconBestSale from '@/assets/images/best-sale.svg';
import IconInfo from '@/assets/images/icon-info.svg';
import { Tooltip } from 'antd';
import { useEffect } from 'react';
import useScreenSize from '@/hooks/useScreenSize';
import ImagePayment from '@/assets/images/image-payment.svg';
import { useMutation } from 'react-query';
import generateService from '@/services/generate.service';
import { StepEnum } from '../../contants';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { CONFIG } from '@/config/service';
import { ROUTES } from '@/routes/routes';

interface IProps {
  prices: any;
  open: boolean;
  setOpen: (open: boolean) => void;
  price: any;
  setPrice: any;
  setStep: any;
  handleSaveData: any;
}

export default function ModalPayment({
  prices,
  open,
  setOpen,
  price,
  setPrice,
  setStep,
  handleSaveData,
}: IProps) {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const { isMobile } = useScreenSize();
  useEffect(() => {
    prices.forEach((item: any) => {
      if (item.bestOffer) {
        setPrice(item);
      }
    });
  }, [prices]);

  const purchaseMutation = useMutation(
    (payload: any) => generateService.purchaseNow(payload),
    {
      onSuccess: (res: any) => {
        if (res.data?.url) {
          handleSaveData();
          window.location.assign(res.data?.url);
        }
      },
    }
  );
  const handleCancel = () => {
    setOpen(false);
    setPrice(prices[1]);
  };
  const handleClickPrice = (item: any) => {
    setPrice(item);
  };
  const handleClickPurchase = () => {
    const payload: any = {
      priceId: price.id,
      redirectUrl: `${window.location.protocol}/${window.location.host}` + ROUTES.APP_PAGE,
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
      localStorage.setItem('userIdFake', 'fake' + userIdFake);
      localStorage.removeItem('isComeFirst');
    }
    purchaseMutation.mutate(payload);
    // setStep(StepEnum.CHOOSE_STYLE);
    // setOpen(false);
    // setSuccessPurchase(true);
    // setOpen(false);
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
              <Tooltip title="Special AI-driven algorithm in AI Avatar instantly generates awesome portraits of a hand-drawn quality making it a go-to app for all non-artists out there. Just upload a selfie and get ready to meet another version of yourself.  We've got a plan that s perfect for you!">
                <img src={IconInfo} alt="" />
              </Tooltip>
            </div>
            <div className="description">
              We&apos;ve got a plan that s perfect for you!
            </div>
            <div className="list-prices">
              {prices.map((item: any) => (
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
