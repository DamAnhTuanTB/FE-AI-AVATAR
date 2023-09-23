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
import { StepEnum } from '../../contants';
import IconPlusUpload from '@/assets/images/icon-plus-upload.svg';
import {setShowModalUploadFilesExtendLimit} from "@/store/slices/appSlice";
import {useAppDispatch} from "@/store/hooks";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const mesageError: any = {
  'The provided image format is not accepted. Please use a supported image format: png, jpg, jpeg, jfif, heic':
    'Not supported image format',
  'The image size is too small. Both dimensions must be greater or equal to 768 pixels. Please use a larger image.':
    'Image too small',
  'File too large.': 'File too large',
  'Unable to detect any face in the provided image. Please provide another clear image.':
    'Unable to detect any face',
  'The detected face size is too small or too big. Please ensure the face size is appropriate.':
    'The face is too small',
  'The detected face is significantly different from the majority in the cluster. Please use images with face similarity.':
    'Different face detected',
  'The provided image is blurry. Please provide a clearer image.':
    'Blurred image',
  'The provided image contains multiple faces, please provide an image containing only one face.':
    'Multiple faces',
  'The image is duplicated. Please provide different images.':
    'Duplicated image',
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
  const dispatch = useAppDispatch();
  const uploadRef = useRef<any>(null);
  const animationRef = useRef(null);
  const [countImageValid, setCountImageValid] = useState(0);
  const [showLoading, setShowLoading] = useState(false);

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
        // if (err?.response?.data?.message && !err?.response?.data?.error?.data) {
        //   ToastError(err?.response?.data?.message);
        // }
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
      },
    }
  );

  const getFileExtension = (fileName:string) => {
    return fileName.substring(fileName.lastIndexOf('.')+1, fileName.length) || fileName;
  }

  const handleChangeFile = (e: any) => {
    if (step === StepEnum.GUIDE) {
      setStep(StepEnum.UPLOAD_IMAGE);
    }
    const files = e.target.files;

    console.log('files', files);
    
    const listImages: any = [];
    const allowedMimeTypes = [
      'image/png',
      'image/jpeg',
      'image/jfif',
      // 'image/heic',
    ];
    Array.from(files).forEach((file: any, index: number) => {
      const fileType =getFileExtension(file?.name)
      if (!allowedMimeTypes.includes(file.type) && fileType !== 'heic') {
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
    let validNumber = countImageValid;

    const arrImage = [...images];

    while (validNumber < 15 && listImages.length > 0) {
      arrImage.push(listImages.shift());
      validNumber += 1;
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
    if (countImageValid < 3) {
      uploadRef.current?.click();
    } else {
        const totalUploadFilesSize = images.reduce((prev: any, curr: any) => {
            return prev + curr.file.size
        }, 0);


        if (totalUploadFilesSize > 200 * 1024 * 1024) {
            dispatch(setShowModalUploadFilesExtendLimit(true));
            return
        }

      const formData = new FormData();
      images.forEach((item: any) => {
        formData.append('files', item.file);
      });
      setShowLoading(true);
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

  return (
    <Wrapper>
      {step === StepEnum.GUIDE ? (
        <>
          <div className="top-upload">
            <div className="title-top-upload">
              Upload your 3 - 15 best images
            </div>
            {/* <div className="des-top-upload">
              Choose 3-15 images to teach the AI what you look like.
            </div> */}
            <div className="btn-top-upload" onClick={handleClickUpload}>
              <img src={IconPlusUpload} alt="" />
              <div className='upload-title'>Click here to upload photos</div>
              <div className="upload-support">
                Supported formats: PNG, JPEG, JPG, JFIF, HEIC.
              </div>
              <div className="upload-support">
                File size limit: 5MB. Image size limit: 768 px.
              </div>
            </div>
          </div>
          <UploadGuide />
        </>
      ) : (
        <>
          <div className="title-list-image">
            <div>Uploaded {countImageValid}/15 photos</div>
            {/* <div>Choose 3-15 images to teach the AI what you look like.</div> */}
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
                    <div>{item?.textError}</div>
                  </div>
                )}
              </div>
            ))}
            <div
              className={`parent-image upload-image ${
                countImageValid >= 15 && 'disable'
              }`}
              onClick={handleClickIconPlus}
            >
              <img src={IconPlus} alt="" />
            </div>
          </div>
        </>
      )}

      <div className="bottom">
        <input
          className="input-upload"
          ref={uploadRef}
          type="file"
          multiple={true}
          onChange={handleChangeFile}
          accept=".png,.jpg,.jpeg,.jfif,.heic"
        />

        {step === StepEnum.GUIDE ? (
          <TabBottom />
        ) : (
          <Button
            onClick={handleClickUpload}
            text={countImageValid < 3 ? 'Upload more photos' : 'Next'}
            width="100%"
            height="45px"
          />
        )}
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
    </Wrapper>
  );
}
