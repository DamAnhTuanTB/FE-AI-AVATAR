import { Wrapper } from './style';
import Button from '../Button';

interface IProps {
  setStep: any;
  listStyles: any;
  setShowModalPayment: any;
  successPurchase: boolean;
}

export default function PreviewStyle({
  setStep,
  listStyles,
  setShowModalPayment,
  successPurchase,
}: IProps) {
  const handleClickNext = () => {
    if (successPurchase) {
      setStep(3);
    } else {
      setShowModalPayment(true);
    }
  };

  return (
    <Wrapper>
      <div className="title">Preview styles</div>
      <div className="description">
        Preview styles that you can use to create amazing avatars the way you
        want.
      </div>
      <div className="list-styles">
        {listStyles.map((item: any) => (
          <div key={item.id} className="item-style">
            <img className="image-style" src={item.thumbnail} alt="" />
            <div className="name-style">{item.displayName}</div>
          </div>
        ))}
      </div>
      <div className="bottom">
        <Button
          onClick={handleClickNext}
          text="Next"
          width="100%"
          height="45px"
        />
      </div>
    </Wrapper>
  );
}
