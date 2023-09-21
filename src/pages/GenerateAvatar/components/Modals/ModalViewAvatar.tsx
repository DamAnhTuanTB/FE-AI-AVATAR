import { Wrapper } from './style';
import IconClose from '@/assets/images/icon-delete-image.svg';
import useScreenSize from '@/hooks/useScreenSize';
import Button from '../Button';
import IconPrev from '@/assets/images/icon-prev-avatar.svg';
import IconNext from '@/assets/images/icon-next-avatar.svg';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  avatar: string;
  handlePrev: any;
  handleNext: any;
  handleSave: any;
  position: string;
}

export default function ModalViewAvatar({
  open,
  setOpen,
  avatar,
  handlePrev,
  handleNext,
  handleSave,
  position,
}: IProps) {
  const { isDesktop } = useScreenSize();

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Wrapper
      width={isDesktop ? 917 : 343}
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
      <div className="modal-view-avatar">
        <div className="preview">Preview</div>
        <div className="content-avatar">
          <img className="image-avatar" src={avatar} alt="" />
          {position !== 'start' && (
            <div className="icon-prev" onClick={handlePrev}>
              <img src={IconPrev} alt="" />
            </div>
          )}
          {position !== 'end' && (
            <div className="icon-next" onClick={handleNext}>
              <img src={IconNext} alt="" />
            </div>
          )}
        </div>
        <a href={avatar} download className="btn">
          <Button
            onClick={handleSave}
            text="Save"
            width={isDesktop ? '146px' : '100%'}
            height="45px"
          />
        </a>
      </div>
    </Wrapper>
  );
}
