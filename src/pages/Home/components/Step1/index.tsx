import { LoadingWrapper, Wrapper } from './style';
import IconDeleteImage from '@/assets/images/icon-delete-image.svg';
import Button from '../Button';
import { useEffect, useRef } from 'react';
import UploadGuide from '../UploadGuide';
import Lottie from 'react-lottie';
import LoadingLottie from '@/assets/jsons/loading-upload.json';
import { useMutation } from 'react-query';
import generateService from '@/services/generate.service';
import TabBottom from '../TabBottom';
import IconPlus from '@/assets/images/icon-plus.svg';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

interface IProps {
  setStep: any;
  images: any[];
  setImages: any;
  setSessionId: (sessionsId: string) => void;
}

export default function Step1({
  setStep,
  images,
  setImages,
  setSessionId,
}: IProps) {
  const uploadRef = useRef<any>(null);
  const animationRef = useRef(null);

  const mutationUpload = useMutation(
    (payload: any) => generateService.checkingUpload(payload),
    {
      onSuccess: (res: any) => {
        setSessionId(res?.data?.data?.sessionId);
        setStep(2);
      },
      onError: (err: any) => {
        console.log('loi roi');
        const errArr: any = err?.response?.data?.error?.data || [];
        errArr.forEach((item: any) => {
          images.forEach((image: any, index: number) => {
            if (image.name === item.filename) {
              images[index].textError = item.reason;
            }
          });
        });
        setImages([...images]);
      },
    }
  );

  const handleChangeFile = (e: any) => {
    const files = e.target.files;
    const listImages: any = [];
    Array.from(files).forEach((file: any, index: number) => {
      listImages.push({
        src: URL.createObjectURL(file),
        file,
        textError: '',
        name: file.name,
      });
    });
    const arrImage = [...images, ...listImages].slice(0, 15);
    setImages(arrImage);
    uploadRef.current.value = '';
  };

  const handleClickIconPlus = () => {
    if (images.length < 15) {
      uploadRef.current?.click();
    }
  };

  const handleClickUpload = () => {
    if (images.length < 3) {
      uploadRef.current?.click();
    } else {
      // setStep(2);
      const formData = new FormData();
      images.forEach((item: any) => {
        formData.append('files', item.file);
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

  return (
    <Wrapper>
      {images.length === 0 ? (
        <UploadGuide />
      ) : (
        <>
          <div className="title-list-image">
            <div>Uploaded {images.length}/15 photos</div>
            <div>
              Choose 3-15 images to teach the AI what you look like. The avatars
              will be based on the images you upload, so choose wisely!
            </div>
          </div>
          <div className="list-images">
            {images.map((item: any, index: number) => (
              <div className="parent-image" key={index}>
                <img className="image" src={item.src} alt="" />
                <img
                  className="icon-delete"
                  src={IconDeleteImage}
                  alt=""
                  onClick={() => handleDeleteImage(index)}
                />
              </div>
            ))}
            <div
              className={`parent-image upload-image ${
                images.length >= 15 && 'disable'
              }`}
              onClick={handleClickIconPlus}
            >
              <img src={IconPlus} alt="" />
            </div>
          </div>
        </>
      )}
      <div
        className="bottom"
        style={{ paddingBottom: images.length !== 0 ? '10px' : '0px' }}
      >
        <div className="upload">
          <input
            ref={uploadRef}
            type="file"
            multiple={true}
            onChange={handleChangeFile}
            accept=".png,.jpg,.jpeg,.jfif,.heic"
          />
          <Button
            onClick={handleClickUpload}
            text={
              images.length === 0
                ? 'Select 3-20 photos'
                : images.length < 3
                ? 'Upload more photos'
                : 'Next'
            }
            width="100%"
            height="45px"
          />
        </div>
        {images.length === 0 && <TabBottom />}
      </div>

      {mutationUpload.isLoading && (
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
    </Wrapper>
  );
}
