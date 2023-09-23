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
import useScreenSize from '@/hooks/useScreenSize';

export default function DetailAvatar() {
  const { isMobile } = useScreenSize();
  const params: any = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [listAvatar, setListAvatar] = useState<any>([]);
  const [openModalDownload, setOpenModalDownload] = useState(false);

  const { isDesktop } = useScreenSize();

  useQuery(
    ['get-detail-session'],
    () => generateService.getDetailSession(params.id),
    {
      onSuccess: (res: any) => {
        if (res.data?.results?.length > 0) {
          setListAvatar(res.data.results);
        }
      },
    }
  );

  const mutationDownloadAll = useMutation(
    () => generateService.downloadAddPack(params.id),
    {
      onSuccess: (res: any) => {
        console.log(res?.data);
        setOpenModalDownload(false);
        ToastSuccess('Download successfully', isMobile);
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
                onClick={() => navigate(`/my-avatar/${params.id}/${key}`)}
              >
                View all
              </span>
            </div>
            <div className="list">
              {listAvatar[key]
                .slice(0, isDesktop ? 5 : 3)
                .map((avatar: string) => (
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
