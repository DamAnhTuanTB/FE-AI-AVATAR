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
  imageIdx: number;
  imagesLength: number;
}

export default function ModalViewAvatar({
  open,
  setOpen,
  avatar,
  handlePrev,
  handleNext,
  handleSave,
  imageIdx,
  imagesLength,
}: IProps) {
  const { isDesktop, isMobile } = useScreenSize();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'my-image.jpg';
    link.href = avatar;
    link.click();
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
          {imageIdx > 0 && (
            <div className="icon-prev" onClick={handlePrev}>
              <img src={IconPrev} alt="" />
            </div>
          )}
          {imageIdx < imagesLength - 1 && (
            <div className="icon-next" onClick={handleNext}>
              <img src={IconNext} alt="" />
            </div>
          )}
        </div>
        <div className="btn" onClick={handleDownload}>
          <Button
            onClick={handleSave}
            text="Save"
            // width={!isMobile ? '146px' : '100%'}
            height="45px"
          />
        </div>
      </div>
    </Wrapper>
  );
}
