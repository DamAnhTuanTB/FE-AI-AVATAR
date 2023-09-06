import Button from '../Button';
import { Wrapper } from './style';
import IconClose from '@/assets/images/icon-delete-image.svg';
import IconCheck from '@/assets/images/icon-check.svg';
import IconBestSale from '@/assets/images/best-sale.svg';

interface IProps {
  prices: any;
  open: boolean;
  setOpen: (open: boolean) => void;
  price: any;
  setPrice: any;
  setStep: any;
}

export default function ModalPayment({
  prices,
  open,
  setOpen,
  price,
  setPrice,
  setStep,
}: IProps) {
  const handleCancel = () => {
    setOpen(false);
  };
  const handleClickPrice = (item: any) => {
    setPrice(item);
  };
  const handleClickPurchase = () => {
    setStep(3);
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
        <div className="title">Choose a package</div>
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
