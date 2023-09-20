import useScreenSize from '@/hooks/useScreenSize';
import Button from '../Button';
import { Wrapper } from './style';
import { StepEnum } from '../../contants';

interface IProps {
  open: boolean;
  listStyles: any;
  setOpen: (open: boolean) => void;
  setShowModalPayment: any;
  setStep: any;
}

export default function ModalPreviewStyle({
  open,
  setOpen,
  listStyles,
  setShowModalPayment,
  setStep,
}: IProps) {
  const { isMobile, isDesktop } = useScreenSize();
  const handleCancel = () => {
    setOpen(false);
  };
  const handleClickNext = () => {
    handleCancel();
    // if (successPurchase) {
    //   setStep(StepEnum.CHOOSE_STYLE);
    // } else {
    //   setShowModalPayment(true);
    // }
    setStep(StepEnum.CHOOSE_STYLE);
  };
  return (
    <Wrapper
      width={isMobile ? 338 : 1328}
      centered
      open={open}
      onCancel={handleCancel}
      footer={false}
      closable={false}
    >
      <div className="modal-preview-style">
        <div className="title">Preview styles</div>
        <div className="description">
          Preview styles that you can use to create amazing avatars the way you
          want.
        </div>
        <div className="parent-list-styles">
          <div className="list-styles">
            {listStyles.map((item: any) => (
              <div key={item.id} className="item-style">
                <img className="image-style" src={item.thumbnail} alt="" />
                <div className="name-style">{item.displayName}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bottom">
          <Button
            onClick={handleClickNext}
            text="Next"
            width={isDesktop ? '212px' : '100%'}
            height="45px"
          />
        </div>
      </div>
    </Wrapper>
  );
}
