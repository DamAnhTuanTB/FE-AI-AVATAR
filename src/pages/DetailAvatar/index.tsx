import IconDownload from '@/assets/images/icon-download-image.svg';
import IconPrev from '@/assets/images/icon-prev.svg';
import { ToastSuccess } from '@/components/ToastMessage/ToastMessage';
import { CONFIG } from '@/config/service';
import { eventTracking } from '@/firebase/firebase';
import useScreenSize from '@/hooks/useScreenSize';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import generateService from '@/services/generate.service';
import { capitalizeWords } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ModalDownloading from '../GenerateAvatar/components/Modals/ModalDownloading';
import TabBottom from '../GenerateAvatar/components/TabBottom';
import { Wrapper } from './style';

export default function DetailAvatar() {
  const { isMobile } = useScreenSize();
  const params: any = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [listAvatar, setListAvatar] = useState<any>({});
  const [openModalDownload, setOpenModalDownload] = useState(false);
  const { logEvent } = useTrackingEvent();

  const { isDesktop, isTablet } = useScreenSize();

  useQuery(
    ['get-detail-session'],
    () => generateService.getDetailSession(params.id),
    {
      onSuccess: (res: any) => {
        if (res.data?.results) {
          setListAvatar(res.data.results);
        }
      },
    }
  );

  const mutationDownloadAll = useMutation(
    () => generateService.downloadAddPack(params.id),
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
    logEvent(eventTracking.pack_detail_click_save_all.name);
    mutationDownloadAll.mutate();
    // window.open(
    //   `https://stg.creatorhub.ai/home-page/nextapi/v1/session/download/${params.id}`
    // );
  };

  const handleClickViewAll = (url: string) => {
    logEvent(eventTracking.pack_detail_click_view_all.name);
    navigate(url);
  };

  useEffect(() => {
    logEvent(eventTracking.pack_detail_view.name);
  }, []);

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
                onClick={() =>
                  handleClickViewAll(`/my-avatar/${params.id}/${key}`)
                }
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
