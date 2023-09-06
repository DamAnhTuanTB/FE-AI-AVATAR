import { Wrapper } from './style';
import Button from '../Button';

interface IProps {
  listStyles: any;
  setShowModalPayment: any;
}

export default function PreviewStyle({
  listStyles,
  setShowModalPayment,
}: IProps) {
  const handleClickNext = () => {
    setShowModalPayment(true);
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
