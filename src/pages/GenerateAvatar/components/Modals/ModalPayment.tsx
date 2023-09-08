import Button from '../Button';
import { Wrapper } from './style';
import IconClose from '@/assets/images/icon-delete-image.svg';
import IconCheck from '@/assets/images/icon-check.svg';
import IconBestSale from '@/assets/images/best-sale.svg';
import IconInfo from '@/assets/images/icon-info.svg';
import { Tooltip } from 'antd';

interface IProps {
  prices: any;
  open: boolean;
  setOpen: (open: boolean) => void;
  price: any;
  setPrice: any;
  setStep: any;
  setSuccessPurchase: any;
}

export default function ModalPayment({
  prices,
  open,
  setOpen,
  price,
  setPrice,
  setStep,
  setSuccessPurchase,
}: IProps) {
  const handleCancel = () => {
    setOpen(false);
    setPrice(prices[1]);
  };
  const handleClickPrice = (item: any) => {
    setPrice(item);
  };
  const handleClickPurchase = () => {
    setStep(3);
    setSuccessPurchase(true);
    handleCancel();
  };
  return (
    <Wrapper
      width={328}
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
        <Button
          text="Purchase now"
          width="100%"
          height="45px"
          onClick={handleClickPurchase}
        />
      </div>
    </Wrapper>
  );
}
