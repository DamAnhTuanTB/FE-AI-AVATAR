import { Wrapper } from './style';
import Button from '../Button';
import { StepEnum } from '../../contants';
import { Skeleton } from 'antd';

interface IProps {
  setStep: any;
  listStyles: any;
  setShowModalPayment: any;
}

export default function PreviewStyle({
  setStep,
  listStyles,
  setShowModalPayment,
}: IProps) {
  const handleClickNext = () => {
    setStep(StepEnum.CHOOSE_STYLE);
  };

  return (
    <Wrapper>
      <div className="title">Preview styles</div>
      <div className="description">
        Preview styles that you can use to create amazing avatars the way you
        want.
      </div>
      <div className="list-styles">
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
