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

export default function DetailAvatarWithStyle() {
  const params: any = useParams();
  const [listAvatar, setListAvatar] = useState<any>([]);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [avatar, setAvatar] = useState<any>();
  const [position, setPosition] = useState('');
  const [openModalDownload, setOpenModalDownload] = useState(false);
  useQuery(
    ['get-detail-session'],
    () => generateService.getDetailSession(params.id),
    {
      onSuccess: (res: any) => {
        setListAvatar(res.data.results[params.style]);
      },
    }
  );

  const handleOpenView = (avatar: string) => {
    setAvatar(avatar);
    setOpenViewModal(true);
  };

  const handlePrev = () => {
    const index = listAvatar.findIndex((item: string) => avatar === item);
    setAvatar(listAvatar[index - 1]);
  };
  const handleNext = () => {
    const index = listAvatar.findIndex((item: string) => avatar === item);
    setAvatar(listAvatar[index + 1]);
  };
  const handleSave = () => {};

  useEffect(() => {
    if (avatar) {
      const index = listAvatar.findIndex((item: string) => avatar === item);
      if (index === 0) {
        setPosition('start');
      }
      if (index === listAvatar.length - 1) {
        setPosition('end');
      }
    }
  }, [avatar]);

  const mutationDownloadAllAvatarWithStyle = useMutation(
    (params: any) => generateService.downloadAllAvatarWithStyle(params),
    {
      onSuccess: (res: any) => {
        setOpenModalDownload(false);
        ToastSuccess('Download successfully');
      },
    }
  );

  const handleSaveAll = async () => {
    setOpenModalDownload(true);
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
        <div className="style">{capitalizeWords(params.style)}</div>
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
          {listAvatar.map((avatar: string) => (
            <div
              key={avatar}
              className="item-avatar"
              onClick={() => handleOpenView(avatar)}
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
          position={position}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleSave={handleSave}
        />
      )}
      {openModalDownload && <ModalDownloading open={openModalDownload} />}
    </Wrapper>
  );
}
