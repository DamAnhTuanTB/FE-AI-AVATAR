import { eventTracking } from '@/firebase/firebase';
import IconClose from '@/assets/images/icon-delete-image.svg';
import useScreenSize from '@/hooks/useScreenSize';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { Skeleton } from 'antd';
import Button from '../Button';
import { Wrapper } from './style';
import { useSearchParams } from 'react-router-dom';
import IconBackPreview from '@/assets/images/icon-back-preview.svg';
import { useState } from 'react';
import useGetListStyles from '@/hooks/useGetListStyles';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setShowModalPayment?: any;
  gender: string;
  hasClose?: boolean;
}

export default function ModalPreviewStyle({
  open,
  setOpen,
  setShowModalPayment,
  gender,
  hasClose = false,
}: IProps) {
  const [genderPreview, setGenderPreview] = useState(gender);
  const { logEvent } = useTrackingEvent();
  const { isMobile, isDesktop } = useScreenSize();
  const [searchParams] = useSearchParams();

  const listStyles = useGetListStyles(genderPreview);

  const handleCancel = () => {
    setOpen(false);
    if (setShowModalPayment) {
      setShowModalPayment(true);
    }
  };
  const handleClickNext = () => {
    handleCancel();
    logEvent(eventTracking.preview_style_click_next.name, {
      [eventTracking.preview_style_click_next.params.source]:
        searchParams.get('from'),
    });
  };
  return (
    <Wrapper
      width={isMobile ? 343 : 1328}
      centered
      open={open}
      footer={false}
      closable={false}
    >
      {hasClose && (
        <img
          className="icon-close"
          src={IconClose}
          alt=""
          onClick={handleCancel}
        />
      )}

      <div className="modal-preview-style">
        <div className="title-first">
          {!hasClose && (
            <div className="back" onClick={handleClickNext}>
              <img src={IconBackPreview} alt="" />
              <span>Back</span>
            </div>
          )}

          <div className="title">View all styles</div>
          <div className="description">
            Preview those styles that you can use to create amazing avatars the
            way you want.
          </div>
        </div>

        <div className="gender">
          <div
            onClick={() => setGenderPreview('Female')}
            className={`${genderPreview === 'Female' && 'active'}`}
          >
            Female
          </div>
          <div
            onClick={() => setGenderPreview('Male')}
            className={`${genderPreview === 'Male' && 'active'}`}
          >
            Male
          </div>
        </div>

        <div className="parent-list-styles">
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
        </div>
        {!hasClose && (
          <div className="bottom">
            <Button
              onClick={handleClickNext}
              text="Continue Purchasing"
              width={isDesktop ? '212px' : '100%'}
              height="45px"
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
