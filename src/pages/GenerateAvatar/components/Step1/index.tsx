import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import { useMutation } from 'react-query';
import { LoadingWrapper, Wrapper } from './style';
import IconDeleteImage from '@/assets/images/icon-delete-image.svg';
import Button from '../Button';
import UploadGuide from '../UploadGuide';
import LoadingLottie from '@/assets/jsons/loading-upload.json';
import generateService from '@/services/generate.service';
import TabBottom from '../TabBottom';
import IconPlus from '@/assets/images/icon-plus.svg';
import IconError from '@/assets/images/icon-error.svg';
import { ToastError } from '@/components/ToastMessage/ToastMessage';
import { StepEnum, mesageError } from '../../contants';
import IconPlusUpload from '@/assets/images/icon-plus-upload.svg';
import { setShowModalUploadFilesExtendLimit } from '@/store/slices/appSlice';
import { useAppDispatch } from '@/store/hooks';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
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

export default function Step1({
  step,
  setStep,
  images,
  setImages,
  setSessionId,
}: IProps) {
  const dispatch: any = useAppDispatch();
  const uploadRef = useRef<any>(null);
  const animationRef = useRef(null);
  const [countImageValid, setCountImageValid] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const { logEvent } = useTrackingEvent();
  const [searchParams] = useSearchParams();
  const [showModalCrop, setShowModalCrop] = useState(false);
  const [indexImageCrop, setIndexImageCrop] = useState<any>();

  const mutationUpload = useMutation(
    (payload: any) => generateService.checkingUpload(payload),
    {
      onSuccess: (res: any) => {
        setSessionId(res?.data?.data?.sessionId);
        setStep(StepEnum.PICK_GENDER);
        setShowLoading(false);
        logEvent(eventTracking.call_api_checking_photo.name, {
          [eventTracking.call_api_checking_photo.params.status]: 'success',
        });
      },
      onError: (err: any) => {
        logEvent(eventTracking.call_api_checking_photo.name, {
          [eventTracking.call_api_checking_photo.params.status]: 'failed',
        });
        setShowLoading(false);
        // if (err?.response?.data?.message && !err?.response?.data?.error?.data) {
        //   ToastError(err?.response?.data?.message);
        // }
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
    const files = e.target.files;
    const listImages: any = [];
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
      // let originFile: any = file;
      // let name = file.name;
      // images.forEach((image: any) => {
      //   if (image.name === file.name) {
      //     name =
      //       'avatar' +
      //       (Math.floor(Math.random() * (99999999999999 - 1 + 1)) + 1) +
      //       file.name;
      //     const blob = originFile.slice(0, file.size, file.type);
      //     const newFile = new File([blob], name, {
      //       type: file.type,
      //     });
      //     originFile = newFile;
      //   }
      // });
      listImages.push({
        src: URL.createObjectURL(file),
        file,
        // file: originFile,
        textError: '',
        name: file.name,
      });
    });
    // const countAddtionsAbleToAdd = 15 - images.length;
    // const countAddtionsValid =
    //   countAddtionsAbleToAdd === 0
    //     ? 0
    //     : listImages.length > countAddtionsAbleToAdd
    //     ? countAddtionsAbleToAdd
    //     : listImages.length;
    let numberImageCurrent = images?.length;

    const arrImage = [...images];

    while (numberImageCurrent < 15 && listImages.length > 0) {
      arrImage.push(listImages.shift());
      numberImageCurrent += 1;
    }
    // const arrImage = [...images, ...listImages].slice(0, 15);
    setImages([...arrImage]);
    // setCountImageValid(countImageValid + countAddtionsValid);
    uploadRef.current.value = '';
  };

  const handleClickIconPlus = () => {
    if (countImageValid < 15) {
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
      {images?.length > 0 ? (
        <div className="list-image-upload">
          <div className="title-list-image">
            <div>Uploaded {countImageValid}/15 photos</div>
            <div>Choose 3-15 images to teach the AI what you look like.</div>
          </div>
          <div className="list-images">
            {images.map((item: any, index: number) => (
              <div className="parent-image" key={item?.src}>
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
            <div
              className={`parent-image upload-image ${
                images?.length >= 15 && 'disable'
              }`}
              onClick={handleClickIconPlus}
            >
              <img src={IconPlus} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="top-upload">
          <div className="title-top-upload">Upload your 3 - 15 best images</div>
          <div className="btn-top-upload" onClick={handleClickUpload}>
            <img src={IconPlusUpload} alt="" />
            <div className="upload-title">Click here to upload photos</div>
            <div className="upload-support">
              Supported formats: PNG, JPEG, JPG, JFIF.
            </div>
            <div className="upload-support">
              File size limit: 5MB. Minimum size: 768 px.
            </div>
          </div>
        </div>
      )}
      <UploadGuide />
      <div className="bottom">
        <input
          className="input-upload"
          ref={uploadRef}
          type="file"
          multiple={true}
          onChange={handleChangeFile}
          accept=".png,.jpg,.jpeg,.jfif"
        />
        <Button
          onClick={handleClickUpload}
          text={countImageValid < 3 ? 'Upload more photos' : 'Next'}
          width="100%"
          height="45px"
        />
        <TabBottom />
      </div>

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
