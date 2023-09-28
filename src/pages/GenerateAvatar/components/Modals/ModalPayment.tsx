/* eslint-disable react/no-unescaped-entities */
import IconBestSale from '@/assets/images/best-sale.svg';
import IconCheck from '@/assets/images/icon-check-v2.svg';
import IconClose from '@/assets/images/icon-delete-image.svg';
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
import IconRingLite from '@/assets/images/icon-ring.svg';
import IconRingBasic from '@/assets/images/icon-ring-basic.svg';
import IconRingPre from '@/assets/images/icon-ring-pre.svg';
import IconNumberStyle from '@/assets/images/icon-number-style.svg';
import IconNumberImage from '@/assets/images/icon-number-image.svg';
import IconRenderTime from '@/assets/images/icon-render-time.svg';
import IconNumberStyleBasic from '@/assets/images/icon-number-style-basic.png';
import IconNumberStylePre from '@/assets/images/icon-number-style-pre.png';
import IconNumberImageBasic from '@/assets/images/icon-number-image-basic.png';
import IconNumberImagePre from '@/assets/images/icon-number-image-pre.png';
import IconRenderTimeBasic from '@/assets/images/icon-render-time-basic.png';
import IconRenderTimePre from '@/assets/images/icon-render-time-pre.png';
import RowStar from '@/assets/images/row-star.svg';
import C1 from '@/assets/images/c1.png';
import C2 from '@/assets/images/c2.png';
import C3 from '@/assets/images/c3.png';
import { Avatar } from 'antd';
interface IProps {
  prices: any;
  open: boolean;
  setOpen: (open: boolean) => void;
  price: any;
  setPrice: any;
  handleSaveData: any;
  gender: string;
  savingData: boolean;
  setSavingData: any;
  setShowModalPreviewStyle: any;
}

const listComment: any = {
  Lite: {
    avatar: C1,
    name: 'Jaylen Smith',
    job: 'Gamer & Streamer',
    comment:
      'As a streamer, my avatar is my brand. Avatarist gave me the freedom to design a character that represents my gaming style.',
  },
  Basic: {
    avatar: C2,
    name: 'Michael Anderson',
    job: 'Small Business Owner',
    comment:
      "Our AI avatar has become the face of our brand. It's professional, engaging, and it's helped us connect with our customers on a personal level.",
  },
  Premium: {
    avatar: C3,
    name: 'Emily Davis',
    job: 'Marketing Manager',
    comment:
      "We integrated our AI avatar into our brand logo, and it's been a hit with our clients. It adds a personal touch to our brand that sets us apart.",
  },
};

export default function ModalPayment({
  prices,
  open,
  setOpen,
  price,
  setPrice,
  handleSaveData,
  gender,
  savingData,
  setSavingData,
  setShowModalPreviewStyle,
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

  const handleSeeAllStyles = () => {
    setShowModalPreviewStyle(true);
    setOpen(false);
  };

  console.log(price);

  return (
    <Wrapper
      width={isMobile ? 343 : 673}
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
          <div className="title">Select a package</div>
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
                  <div className="text">
                    <div className="display-name">{item.displayName}</div>
                    <div className="text-price">
                      <div>{item.name}</div>
                      <div>${item.price} one time</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="info">
          <div
            className="name-price"
            style={{
              color:
                price?.displayName === 'Lite'
                  ? '#00A5A5'
                  : price?.displayName === 'Basic'
                  ? '#0085FF'
                  : '#D253FF',
            }} 
          >
            <div className="name">
              <span>{price?.displayName}</span>
              <img
                src={
                  price?.displayName === 'Lite'
                    ? IconRingLite
                    : price?.displayName === 'Basic'
                    ? IconRingBasic
                    : IconRingPre
                }
                alt=""
              />
            </div>
            <div className="price">${price?.price}</div>
          </div>
          <div className="here">Here’s what you get:</div>
          <div className="item-info">
            <div>
              <img
                src={
                  price?.displayName === 'Lite'
                    ? IconNumberStyle
                    : price?.displayName === 'Basic'
                    ? IconNumberStyleBasic
                    : IconNumberStylePre
                }
                alt=""
              />
              <span>{price?.maxStyle} styles of your choice</span>
            </div>
            <div className="see-all" onClick={handleSeeAllStyles}>
              See all styles
            </div>
          </div>
          <div className="item-info">
            <div>
              <img
                src={
                  price?.displayName === 'Lite'
                    ? IconNumberImage
                    : price?.displayName === 'Basic'
                    ? IconNumberImageBasic
                    : IconNumberImagePre
                }
                alt=""
              />
              <span>{price?.numberImage} styles of your choice</span>
            </div>
          </div>
          <div className="item-info last-item-info">
            <div>
              <img
                src={
                  price?.displayName === 'Lite'
                    ? IconRenderTime
                    : price?.displayName === 'Basic'
                    ? IconRenderTimeBasic
                    : IconRenderTimePre
                }
                alt=""
              />
              <span>Medium render time </span>
            </div>
          </div>
          <div className="comment">
            <div className="row-1">
              <div className="first">
                <Avatar
                  size={24}
                  src={listComment[price?.displayName]?.avatar}
                />
                <div className="text">
                  <div>{listComment[price?.displayName]?.name}</div>
                  <div>{listComment[price?.displayName]?.job}</div>
                </div>
              </div>
              <img src={RowStar} alt="" />
            </div>
            <div className="row-2">
              "{listComment[price?.displayName]?.comment}"
            </div>
          </div>
          <Button
            loading={savingData}
            text="Purchase now"
            width={'100%'}
            height="37px"
            onClick={handleClickPurchase}
          />
        </div>
      </div>
    </Wrapper>
  );
}
