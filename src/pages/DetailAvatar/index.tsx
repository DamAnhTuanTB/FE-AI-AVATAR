import IconDownload from '@/assets/images/icon-download-image.svg';
import IconPrev from '@/assets/images/icon-prev.svg';
import { ToastSuccess } from '@/components/ToastMessage/ToastMessage';
import { CONFIG } from '@/config/service';
import { eventTracking } from '@/firebase/firebase';
import { Carousel } from 'antd';
import useScreenSize from '@/hooks/useScreenSize';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import generateService from '@/services/generate.service';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ModalDownloading from '../GenerateAvatar/components/Modals/ModalDownloading';
import TabBottom from '../GenerateAvatar/components/TabBottom';
import { Wrapper } from './style';
import { TypeDownload } from '../GenerateAvatar/contants';
import GeneratedAvatars from './GeneratedAvatars';
import { Helmet } from 'react-helmet';

export default function DetailAvatar() {
  const { isMobile } = useScreenSize();
  const params: any = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [listAvatar, setListAvatar] = useState<any>({});
  const [detailAvatar, setDetailAvatar] = useState<any>({});
  const [openModalDownload, setOpenModalDownload] = useState(false);
  const { logEvent } = useTrackingEvent();

  const { isTablet } = useScreenSize();

  useQuery(
    ['get-detail-session'],
    () => generateService.getDetailSession(params.id),
    {
      onSuccess: (res: any) => {
        if (res.data?.results) {
          setDetailAvatar(res?.data);
          setListAvatar(res.data.results);
        }
      },
    }
  );

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
    logEvent(eventTracking.pack_detail_click_save_all.name);
    mutationDownload.mutate({
      sessionId: params.id,
      type: TypeDownload.ALL_RESULT,
    });
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
      <Helmet>
        <title>My Avatar - Avatarist.ai</title>
        <meta
          name="description"
          content='Access your unique AI avatar on the "My Avatar" page. Showcase your digital identity to the world.'
        />
      </Helmet>
      <div className="header-detail">
        <div className="back" onClick={() => window.history.back()}>
          <img src={IconPrev} alt="" />
          <span>Back</span>
        </div>
        <div className="pack">Avatar Package {searchParams.get('pack')}</div>
        <a
          className="save"
          onClick={handleSaveAll}
          href={`${CONFIG.BASE_SERVER_URL}/v1/session/download-avatar?sessionId=${params.id}&type=${TypeDownload.ALL_RESULT}`}
        >
          <img src={IconDownload} alt="" />
          <span>Save all</span>
        </a>
      </div>
      <div className="content-detail">
        <div className="origin-photo">
          <div className="title-origin-photo">
            <span>Original photos</span>
            <span
              onClick={() => navigate(`/my-avatar/origin-photos/${params?.id}`)}
            >
              View all
            </span>
          </div>
          <Carousel
            dots={false}
            infinite={false}
            // slidesToScroll={1}
            draggable={true}
            variableWidth={true}
            className="list-origin-photo"
          >
            {detailAvatar?.originImages?.map((item: any) => (
              <div key={item} className="item-origin">
                <img src={item} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="generated-avatars">
          <div className="title-origin-photo">
            <span>Generated Avatars</span>
            <span
              onClick={() =>
                handleClickViewAll(`/my-avatar/generated-avatars/${params?.id}`)
              }
            >
              View all
            </span>
          </div>
          {/* <Carousel
            dots={false}
            infinite={false}
            // slidesToScroll={1}
            // slidesToShow={5}
            draggable={true}
            variableWidth={true}
            className="list-generated"
          >
            
          </Carousel> */}
          <GeneratedAvatars
            listAvatar={listAvatar}
            detailAvatar={detailAvatar}
          />
        </div>
      </div>
      <div className="bottom">
        <TabBottom />
      </div>
      {openModalDownload && <ModalDownloading open={openModalDownload} />}
    </Wrapper>
  );
}
