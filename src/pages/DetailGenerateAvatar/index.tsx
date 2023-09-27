import { useNavigate, useParams } from 'react-router-dom';
import { Wrapper } from './style';
import IconDownload from '@/assets/images/icon-download-image.svg';
import IconPrev from '@/assets/images/icon-prev.svg';
import { useMutation, useQuery } from 'react-query';
import generateService from '@/services/generate.service';
import { useEffect, useState } from 'react';
import TabBottom from '../GenerateAvatar/components/TabBottom';
import ModalViewAvatar from '../GenerateAvatar/components/Modals/ModalViewAvatar';
import { CONFIG } from '@/config/service';
import { ToastSuccess } from '@/components/ToastMessage/ToastMessage';
import ModalDownloading from '../GenerateAvatar/components/Modals/ModalDownloading';
import useScreenSize from '@/hooks/useScreenSize';
import { capitalizeWords } from '@/utils/helpers';

export default function DetailGenerateAvatar() {
  const params: any = useParams();
  const navigate = useNavigate();
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
        setListAvatar(res.data.results);
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

  const mutationDownloadAllAvatarWithStyle = useMutation(
    (params: any) => generateService.downloadAllAvatarWithStyle(params),
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
    mutationDownloadAllAvatarWithStyle.mutate({
      sessionId: params.id,
      style: params.style,
    });
  };

  return (
    <Wrapper>
      <div className="header-detail">
        <div className="back" onClick={() => window.history.back()}>
          <img src={IconPrev} alt="" />
          <span>Back</span>
        </div>
        <div className="style">Generated Avatars</div>
        <a
          className="save"
          onClick={handleSaveAll}
          href={`${CONFIG.BASE_SERVER_URL}/v1/session/download-all-image-with-style?sessionId=${params.id}&style=${params.style}`}
        >
          <img src={IconDownload} alt="" />
          <span>Save all</span>
        </a>
      </div>
      <div className="content-detail">
        <div className="list">
          {Object.keys(listAvatar)?.map((style: string, index: number) => (
            <div
              key={style}
              className={`parent-item-avatar`}
              onClick={() => navigate(`/my-avatar/${params.id}/${style}`)}
            >
              <div className="item-avatar">
                <div className="col-1">
                  <img src={listAvatar[style][0]} alt="" />
                </div>
                <div className="col-2">
                  <div className="col-21">
                    <img src={listAvatar[style][1]} alt="" />
                  </div>
                  <div className="col-22">
                    <img src={listAvatar[style][2]} alt="" />
                  </div>
                </div>
              </div>
              <div className="name-pack">Style: {capitalizeWords(style)}</div>
              <div className="info-pack">10 images</div>
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
