import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Wrapper } from './style';
import IconDownload from '@/assets/images/icon-download-image.svg';
import IconPrev from '@/assets/images/icon-prev.svg';
import { useMutation, useQuery } from 'react-query';
import generateService from '@/services/generate.service';
import { useState } from 'react';
import TabBottom from '../GenerateAvatar/components/TabBottom';
import { capitalizeWords } from '@/utils/helpers';
import { CONFIG } from '@/config/service';
import ModalDownloading from '../GenerateAvatar/components/Modals/ModalDownloading';
import { ToastSuccess } from '@/components/ToastMessage/ToastMessage';

export default function DetailAvatar() {
  const params: any = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [listAvatar, setListAvatar] = useState<any>([]);
  const [openModalDownload, setOpenModalDownload] = useState(false);

  useQuery(
    ['get-detail-session'],
    () => generateService.getDetailSession(params.id),
    {
      onSuccess: (res: any) => {
        setListAvatar(res.data.results);
      },
    }
  );

  const mutationDownloadAll = useMutation(
    () => generateService.downloadAddPack(params.id),
    {
      onSuccess: (res: any) => {
        setOpenModalDownload(false);
        ToastSuccess('Download successfully');
      },
    }
  );

  const handleSaveAll = async () => {
    setOpenModalDownload(true);
    mutationDownloadAll.mutate();
    // window.open(
    //   `https://stg.creatorhub.ai/home-page/nextapi/v1/session/download/${params.id}`
    // );
  };

  return (
    <Wrapper>
      <div className="header-detail">
        <div className="back" onClick={() => window.history.back()}>
          <img src={IconPrev} alt="" />
          <span>Back</span>
        </div>
        <div className="pack">Pack {searchParams.get('pack')}</div>
        <a
          className="save"
          onClick={handleSaveAll}
          href={`${CONFIG.BASE_SERVER_URL}/v1/session/download/${params.id}`}
        >
          <img src={IconDownload} alt="" />
          <span>Save all</span>
        </a>
      </div>
      <div className="content-detail">
        {Object.keys(listAvatar).map((key: string) => (
          <div key={key} className="row">
            <div className="title">
              <span className="name-style">{capitalizeWords(key)}</span>
              <span
                className="view-all"
                onClick={() => navigate(`/list-avatar/${params.id}/${key}`)}
              >
                View all
              </span>
            </div>
            <div className="list">
              {listAvatar[key].slice(0, 5).map((avatar: string) => (
                <div key={avatar} className="item-avatar">
                  <img src={avatar} alt="" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bottom">
        <TabBottom />
      </div>
      {openModalDownload && <ModalDownloading open={openModalDownload} />}
    </Wrapper>
  );
}
