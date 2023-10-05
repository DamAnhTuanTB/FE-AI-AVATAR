import IconClose from '@/assets/images/icon-delete-image.svg';
import IconNext from '@/assets/images/icon-next-avatar.svg';
import IconPrev from '@/assets/images/icon-prev-avatar.svg';
import { eventTracking } from '@/firebase/firebase';
import useScreenSize from '@/hooks/useScreenSize';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { useEffect } from 'react';
import Button from '../Button';
import { Wrapper } from './style';
import { useMutation } from 'react-query';
import generateService from '@/services/generate.service';
import { Buffer } from 'buffer';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  avatar: string;
  handlePrev: any;
  handleNext: any;
  imageIdx: number;
  imagesLength: number;
}

export default function ModalViewAvatar({
  open,
  setOpen,
  avatar,
  handlePrev,
  handleNext,
  imageIdx,
  imagesLength,
}: IProps) {
  const { isDesktop, isMobile } = useScreenSize();
  const { logEvent } = useTrackingEvent();

  const handleCancel = () => {
    setOpen(false);
  };

  const mutationDownload = useMutation(
    (params: any) => generateService.downloadImage(params),
    {
      onSuccess: (res: any) => {
        const base64ImageString = Buffer.from(res.data, 'binary').toString(
          'base64'
        );
        const srcImage = 'data:image/png;base64,' + base64ImageString;
        const a = document.createElement('a');
        a.href = srcImage;
        a.download = 'my-avatar.jpg'; // Đặt tên tệp tải xuống
        a.click();
      },
    }
  );

  const handleDownload = () => {
    mutationDownload.mutate({ url: avatar });
    // const link = document.createElement('a');
    // link.download = 'my-image.png';
    // link.href = avatar;
    // link.click();
  };

  useEffect(() => {
    logEvent(eventTracking.photo_detail_view.name);
  }, []);

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

        <div className="btn">
          <Button
            onClick={handleDownload}
            text="Save"
            // width={!isMobile ? '146px' : '100%'}
            height="45px"
          />
        </div>
      </div>
    </Wrapper>
  );
}
