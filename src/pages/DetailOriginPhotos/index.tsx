import { useParams } from 'react-router-dom';
import { Wrapper } from './style';
import IconDownload from '@/assets/images/icon-download-image.svg';
import IconPrev from '@/assets/images/icon-prev.svg';
import { useMutation, useQuery } from 'react-query';
import generateService from '@/services/generate.service';
import { useEffect, useState } from 'react';
import TabBottom from '../GenerateAvatar/components/TabBottom';
import { capitalizeWords } from '@/utils/helpers';
import ModalViewAvatar from '../GenerateAvatar/components/Modals/ModalViewAvatar';
import { CONFIG } from '@/config/service';
import { ToastSuccess } from '@/components/ToastMessage/ToastMessage';
import ModalDownloading from '../GenerateAvatar/components/Modals/ModalDownloading';
import useScreenSize from '@/hooks/useScreenSize';
import { TypeDownload } from '../GenerateAvatar/contants';
// import JSZip from 'jszip';
// import axios from 'axios';

// const downloadImagesAsZip = async (imageUrls: any) => {
//   const zip = new JSZip();

//   for (const imageUrl of imageUrls) {
//     // Tải ảnh từ đường dẫn
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

//     // Lấy tên tệp từ URL hoặc tùy chỉnh nó tùy theo nhu cầu
//     const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);

//     // Thêm ảnh vào tệp zip
//     zip.file(fileName, response.data);
//   }

//   // Tạo tệp zip
//   zip.generateAsync({ type: 'blob' }).then((content) => {
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(content);
//     link.download = 'images.zip';
//     console.log('download xong');
//     link.click();
//   });
// };

export default function DetailOriginPhotos() {
  const params: any = useParams();
  const [listAvatar, setListAvatar] = useState<any>([]);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [avatar, setAvatar] = useState<any>();
  const [imageIdx, setImageIdx] = useState(-1);
  const [openModalDownload, setOpenModalDownload] = useState(false);
  const { isMobile, isTablet } = useScreenSize();
  useQuery(
    ['get-detail-session'],
    () => generateService.getDetailSession(params.id),
    {
      onSuccess: (res: any) => {
        if (res.data?.originImages?.length > 0) {
          setListAvatar(res.data.originImages);
        }
      },
    }
  );

  const handleOpenView = (avatar: string, index: number) => {
    setAvatar(avatar);
    setOpenViewModal(true);
    setImageIdx(index);
  };

  const handlePrev = () => {
    const index = listAvatar.findIndex((item: string) => avatar === item);
    setAvatar(listAvatar[index - 1]);
    setImageIdx(index - 1);
  };
  const handleNext = () => {
    const index = listAvatar.findIndex((item: string) => avatar === item);
    setAvatar(listAvatar[index + 1]);
    setImageIdx(index + 1);
  };

  const mutationDownload = useMutation(
    (params: any) => generateService.downloadAvatar(params),
    {
      onSuccess: (res: any) => {
        setOpenModalDownload(false);
        if (!isMobile && !isTablet) {
          ToastSuccess('Download successfully', isMobile);
        }
      },
    }
  );

  const handleSaveAll = async () => {
    setOpenModalDownload(true);
    // downloadImagesAsZip(listAvatar);
    mutationDownload.mutate({
      sessionId: params.id,
      type: TypeDownload.ALL_ORIGIN_PHOTO,
    });
  };

  return (
    <Wrapper>
      <div className="header-detail">
        <div className="back" onClick={() => window.history.back()}>
          <img src={IconPrev} alt="" />
          <span>Back</span>
        </div>
        <div className="style">Original photos</div>
        <a
          className="save"
          onClick={handleSaveAll}
          href={`${CONFIG.BASE_SERVER_URL}/v1/session/download-avatar?sessionId=${params.id}&type=${TypeDownload.ALL_ORIGIN_PHOTO}`}
        >
          <img src={IconDownload} alt="" />
          <span>Save all</span>
        </a>
      </div>
      <div className="content-detail">
        <div className="list">
          {listAvatar.map((avatar: string, index: number) => (
            <div
              key={avatar}
              className="item-avatar"
              onClick={() => handleOpenView(avatar, index)}
            >
              <img src={avatar} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="bottom">
        <TabBottom />
      </div>
      {openViewModal && (
        <ModalViewAvatar
          open={openViewModal}
          setOpen={setOpenViewModal}
          avatar={avatar}
          imageIdx={imageIdx}
          handlePrev={handlePrev}
          handleNext={handleNext}
          imagesLength={listAvatar?.length || 0}
        />
      )}
      {openModalDownload && <ModalDownloading open={openModalDownload} />}
    </Wrapper>
  );
}
