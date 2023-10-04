import IconClose from '@/assets/images/icon-delete-image.svg';
import useScreenSize from '@/hooks/useScreenSize';
import { Wrapper } from './style';
import Button from '../Button';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useEffect, useRef, useState } from 'react';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  file?: any;
  setImages: any;
  indexImageCrop: number;
  images: any;
}

export default function ModalCropImage({
  open,
  setOpen,
  file,
  setImages,
  indexImageCrop,
  images,
}: IProps) {
  const { isDesktop } = useScreenSize();

  const [upImg, setUpImg] = useState<any>();

  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  const scaleCanvasRef = useRef(null);

  const [crop, setCrop] = useState<any>({
    unit: '%',
    width: 100,
    height: 100,
    aspect: 1,
  });
  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCanvasImage(imgRef.current, previewCanvasRef.current, completedCrop);
  }, [completedCrop]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(file);
    }
  }, [file]);

  const saveImageCrop = (originCanvas: any, crop: any) => {
    setLoading(true);
    if (!crop || !originCanvas) {
      return;
    }
    // Scale originCanvas to new scale image
    const ratio =
      768 / crop.height > 768 / crop.width
        ? 768 / crop.height
        : 768 / crop.width;
    const newHeight = ratio * crop.height;
    const newWidth = ratio * crop.width;
    const canvas: any = scaleCanvasRef.current;
    canvas.width = newWidth;
    canvas.height = newHeight;
    const ctx: any = canvas.getContext('2d');
    ctx.drawImage(originCanvas, 0, 0, newWidth, newHeight);

    // convert canvas to file
    canvas.toBlob((blob: any) => {
      const file = new File([blob], 'fileName.jpg', { type: 'image/jpeg' });
      images[indexImageCrop].file = file;
      images[indexImageCrop].src = URL.createObjectURL(file);
      setImages([...images]);
      handleCancel();
      setLoading(false);
    });
    // const previewUrl = window.URL.createObjectURL(blob);
    // const anchor = document.createElement('a');
    // anchor.download = 'cropPreview.png';
    // anchor.href = URL.createObjectURL(blob);
    // anchor.click();
    // window.URL.revokeObjectURL(previewUrl);
  };

  const setCanvasImage = (image: any, canvas: any, crop: any) => {
    if (!crop || !canvas || !image) {
      return;
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
  };

  return (
    <Wrapper
      width={isDesktop ? 917 : 344}
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
      <div className="modal-crop-image">
        <div className="title-crop">Crop photos</div>
        <div className="image-crop">
          <ReactCrop
            // minHeight={768}
            // minWidth={768}
            ruleOfThirds={true}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
          >
            <img className="img-crop" src={upImg} alt="" ref={imgRef} />
          </ReactCrop>
        </div>
        <div>
          <canvas
            ref={previewCanvasRef}
            style={{
              width: Math.round(completedCrop?.width ?? 0),
              height: Math.round(completedCrop?.height ?? 0),
              display: 'none',
            }}
          />
          <br />
          <canvas ref={scaleCanvasRef} style={{ display: 'none' }} />
        </div>

        <Button
          loading={loading}
          disable={!completedCrop?.width || !completedCrop?.height}
          text="Save"
          width={isDesktop ? '228px' : '100%'}
          height="45px"
          onClick={() => saveImageCrop(previewCanvasRef.current, completedCrop)}
        />
      </div>
    </Wrapper>
  );
}
