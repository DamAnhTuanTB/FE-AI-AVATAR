import IconDeleteImage from '@/assets/images/icon-delete-image.svg';
import IconError from '@/assets/images/icon-error.svg';
import IconPlusUpload from '@/assets/images/icon-plus-upload.svg';
import IconPlus from '@/assets/images/icon-plus.svg';
import IconTip from '@/assets/images/icon-tip.svg';
import LoadingLottie from '@/assets/jsons/loading-upload.json';
import { ToastError } from '@/components/ToastMessage/ToastMessage';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import generateService from '@/services/generate.service';
import { useAppDispatch } from '@/store/hooks';
import { setShowModalUploadFilesExtendLimit } from '@/store/slices/appSlice';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import { useMutation } from 'react-query';
import { StepEnum, mesageError } from '../../contants';
import Button from '../Button';
import UploadGuidePC from '../UploadGuidePC';
import { LoadingWrapper, Wrapper } from './style';
import { useSearchParams } from 'react-router-dom';
import IconCrop from '@/assets/images/icon-crop.svg';
import ModalCropImage from '../Modals/ModalCropImage';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

interface IProps {
  step: number;
  setStep: any;
  images: any[];
  setImages: any;
  setSessionId: (sessionsId: string) => void;
}

export default function Step1PC({
  setStep,
  images,
  setImages,
  setSessionId,
}: IProps) {
  const dispatch = useAppDispatch();
  const uploadRef = useRef<any>(null);
  const animationRef = useRef(null);
  const [countImageValid, setCountImageValid] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const [showModalCrop, setShowModalCrop] = useState(false);
  const { logEvent } = useTrackingEvent();
  const [searchParams] = useSearchParams();
  const [indexImageCrop, setIndexImageCrop] = useState<any>();

  const mutationUpload = useMutation(
    (payload: any) => generateService.checkingUpload(payload),
    {
      onSuccess: (res: any) => {
        setSessionId(res?.data?.data?.sessionId);
        setStep(StepEnum.PICK_GENDER);
        setShowLoading(false);
      },
      onError: (err: any) => {
        setShowLoading(false);
        if (err?.response?.data?.error?.name === 'ERROR_UPLOAD_VALIDATE') {
          ToastError(
            err?.response?.data?.message ===
              'Image limit exceeded. You cannot upload more than 20 images'
              ? 'Please upload 3-15 images.'
              : err?.response?.data?.message
          );
        } else {
          const errArr: any = err?.response?.data?.error?.data || [];
          errArr.forEach((item: any) => {
            images.forEach((image: any, index: number) => {
              if (index === item.index) {
                images[index].textError = mesageError[item.reason];
              }
            });
          });
          setCountImageValid(images.length - errArr.length);
          setImages([...images]);
        }
      },
    }
  );

  const handleChangeFile = (e: any) => {
    if (images?.length === 0) {
      logEvent(eventTracking.upload_photo_click_upload.name);
    }
    const files = e.target.files;
    const listImages: any = [];
    console.log('files', files);
    const allowedMimeTypes = [
      'image/png',
      'image/jpeg',
      'image/jfif',
      // 'image/heic',
    ];
    Array.from(files).forEach((file: any, index: number) => {
      if (!allowedMimeTypes.includes(file.type)) {
        return;
      }
      listImages.push({
        src: URL.createObjectURL(file),
        file,
        textError: '',
        name: file.name,
      });
    });

    let validNumber = countImageValid;

    const arrImage = [...images];

    while (validNumber < 15 && listImages.length > 0) {
      arrImage.push(listImages.shift());
      validNumber += 1;
    }

    setImages([...arrImage]);
    uploadRef.current.value = '';
  };

  const handleClickIconPlus = () => {
    if (images?.length < 15) {
      uploadRef.current?.click();
    }
  };

  const handleClickUpload = () => {
    if (images?.length === 15 && countImageValid < 3) {
      ToastError('Please upload 3 - 15 images');
      return;
    }
    if (countImageValid < 3) {
      if (images?.length === 0) {
        logEvent(eventTracking.upload_photo_click_upload.name, {
          [eventTracking.upload_photo_click_upload.params.source]:
            searchParams.get('from'),
        });
      } else {
        logEvent(eventTracking.upload_photo_click_upload_more.name, {
          [eventTracking.upload_photo_click_upload_more.params.source]:
            searchParams.get('from'),
        });
      }
      uploadRef.current?.click();
    } else {
      const totalUploadFilesSize = images.reduce((prev: any, curr: any) => {
        return prev + curr.file.size;
      }, 0);

      if (totalUploadFilesSize > 200 * 1024 * 1024) {
        dispatch(setShowModalUploadFilesExtendLimit(true));
        return;
      }

      const formData = new FormData();
      images.forEach((item: any) => {
        formData.append('files', item.file);
      });
      setShowLoading(true);
      logEvent(eventTracking.upload_photo_click_next.name, {
        [eventTracking.upload_photo_click_next.params.source]:
          searchParams.get('from'),
      });
      logEvent(eventTracking.upload_photo_checking.name, {
        [eventTracking.upload_photo_checking.params.source]:
          searchParams.get('from'),
      });
      mutationUpload.mutate(formData);
    }
  };

  const handleDeleteImage = (index: number) => {
    images.splice(index, 1);
    setImages([...images]);
  };

  const handleClickLottie = () => {
    if (animationRef.current) {
      (animationRef.current as any).play();
    }
  };

  useEffect(() => {
    let countValid = 0;
    images.forEach((image: any) => {
      if (!image?.textError) {
        countValid += 1;
      }
    });
    setCountImageValid(countValid);
  }, [images]);

  const handleCropImage = (index: number) => {
    setIndexImageCrop(index);
    setShowModalCrop(true);
  };

  return (
    <Wrapper>
      <UploadGuidePC />
      <div className="upload">
        <div className="child-1">
          <div className="title">Upload your 3 - 15 best images</div>
          {images.length === 0 ? (
            <div className="big-upload">
              <img src={IconPlusUpload} alt="" />
              <div className="upload-title">
                Drag and drop or click here to upload photos
              </div>
              <div className="upload-support">
                Supported formats: PNG, JPEG, JPG, JFIF.
              </div>
              <div className="upload-support">
                File size limit: 5MB. Minimum size: 768 px.
              </div>
              <input
                className="big-input-upload"
                type="file"
                multiple={true}
                onChange={handleChangeFile}
                accept=".png,.jpg,.jpeg,.jfif"
              />
            </div>
          ) : (
            <div className="content-upload">
              <div className="list-images">
                <div
                  className={`parent-image upload-image ${
                    images?.length >= 15 && 'disable'
                  }`}
                  onClick={handleClickIconPlus}
                >
                  <div>
                    <img src={IconPlus} alt="" />
                    <div>Upload photo</div>
                  </div>
                </div>
                {images.map((item: any, index: number) => (
                  <div className="parent-image" key={index}>
                    <img className="image" src={item?.src} alt="" />
                    <img
                      className="icon-delete"
                      src={IconDeleteImage}
                      alt=""
                      onClick={() => handleDeleteImage(index)}
                    />
                    {item?.textError && (
                      <div className="item-error">
                        <img src={IconError} alt="" />
                        <div>{item?.textError}</div>
                      </div>
                    )}
                    <div
                      className={`icon-crop`}
                      onClick={() => handleCropImage(index)}
                    >
                      <img src={IconCrop} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="child-2">
          {images.length > 0 && (
            <Button
              onClick={handleClickUpload}
              text={countImageValid < 3 ? 'Upload more photos' : 'Next'}
              width="212px"
              height="48px"
            />
          )}
          <div className="tip">
            <img src={IconTip} alt="" />
            <span>
              Tip: The more the number of photos, the higher the quality!
            </span>
          </div>
        </div>
      </div>
      <input
        className="input-upload"
        ref={uploadRef}
        type="file"
        multiple={true}
        onChange={handleChangeFile}
        accept=".png,.jpg,.jpeg,.jfif"
      />
      {showLoading && (
        <LoadingWrapper onClick={handleClickLottie}>
          <div>
            <Lottie
              options={defaultOptions}
              width={74}
              height={74}
              ref={animationRef}
            />
            <div>Loading...</div>
          </div>
        </LoadingWrapper>
      )}
      {showModalCrop && (
        <ModalCropImage
          open={showModalCrop}
          setOpen={setShowModalCrop}
          file={images[indexImageCrop]?.file}
          setImages={setImages}
          images={images}
          indexImageCrop={indexImageCrop}
        />
      )}
    </Wrapper>
  );
}
