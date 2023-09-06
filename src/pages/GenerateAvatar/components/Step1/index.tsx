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
  const [countImageValid, setCountImageValid] = useState(0);

  const mutationUpload = useMutation(
    (payload: any) => generateService.checkingUpload(payload),
    {
      onSuccess: (res: any) => {
        setSessionId(res?.data?.data?.sessionId);
        setStep(2);
      },
      onError: (err: any) => {
        const errArr: any = err?.response?.data?.error?.data || [];
        errArr.forEach((item: any) => {
          images.forEach((image: any, index: number) => {
            if (image.name === item.filename) {
              images[index].textError = item.reason;
            }
          });
        });
        setCountImageValid(images.length - errArr.length);
        setImages([...images]);
      },
    }
  );

  const handleChangeFile = (e: any) => {
    const files = e.target.files;
    const listImages: any = [];
    Array.from(files).forEach((file: any, index: number) => {
      let originFile: any = file;
      let name = file.name;
      images.forEach((image: any) => {
        if (image.name === file.name) {
          name =
            'avatar' +
            (Math.floor(Math.random() * (99999999999999 - 1 + 1)) + 1) +
            file.name;
          const blob = originFile.slice(0, file.size, file.type);
          const newFile = new File([blob], name, {
            type: file.type,
          });
          originFile = newFile;
        }
      });
      listImages.push({
        src: URL.createObjectURL(file),
        file: originFile,
        textError: '',
        name,
      });
    });
    // const countAddtionsAbleToAdd = 15 - images.length;
    // const countAddtionsValid =
    //   countAddtionsAbleToAdd === 0
    //     ? 0
    //     : listImages.length > countAddtionsAbleToAdd
    //     ? countAddtionsAbleToAdd
    //     : listImages.length;
    const arrImage = [...images, ...listImages].slice(0, 15);
    setImages(arrImage);
    // setCountImageValid(countImageValid + countAddtionsValid);
    uploadRef.current.value = '';
  };

  const handleClickIconPlus = () => {
    if (images.length < 15) {
      uploadRef.current?.click();
    }
  };

  const handleClickUpload = () => {
    if (countImageValid < 3) {
      uploadRef.current?.click();
    } else {
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

  useEffect(() => {
    let countValid = 0;
    images.forEach((image: any) => {
      if (!image.textError) {
        countValid += 1;
      }
    });
    setCountImageValid(countValid);
  }, [images]);

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
                    <div>Image error</div>
                  </div>
                )}
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
                : countImageValid < 3
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
