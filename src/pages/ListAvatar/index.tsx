import { useEffect, useState } from 'react';
import { Wrapper } from './style';
import generateService from '@/services/generate.service';
import { useQuery } from 'react-query';
import NoImage from '@/assets/images/no-image.svg';
import { Button } from 'antd';
import IconAddOutline from '@/assets/images/icon-add-outline.svg';
import TabBottom from '../GenerateAvatar/components/TabBottom';
import { TypeSessionStatus } from '../GenerateAvatar/contants';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import LoadingImage from '@/assets/images/loading-image.gif';
import { analyticsLogEvent } from '@/firebase';
import { eventTracking } from '@/firebase/firebase';

const getFirstImage = (results: any) => {
  const keys = Object.keys(results);
  return results[keys[0]][0];
};

export default function ListAvatar() {
  const navigate = useNavigate();
  const [hasList, setHasList] = useState(-1);
  const [listSession, setListSession] = useState<any>([]);
  useQuery(['get-list-session'], () => generateService.getListSession(), {
    onSuccess: (res: any) => {
      if (res.data?.data?.length > 0) {
        setListSession(res.data.data);
        setHasList(1);
      } else {
        setHasList(0);
      }
    },
    onError: () => {
      setHasList(0);
    },
  });

  const handleClickDetail = (
    status: TypeSessionStatus,
    sessionId: string,
    pack: number
  ) => {
    if (status !== TypeSessionStatus.ACTIVE) {
      analyticsLogEvent(eventTracking.my_avatar_click_pack.name);
      navigate(`/my-avatar/${sessionId}?pack=${pack}`);
    }
  };

  useEffect(() => {
    analyticsLogEvent(eventTracking.my_avatar_view.name); 
  }, []);

  return (
    <Wrapper>
      <div className="title-my-generate">My Generated Avatars</div>
      <div className="content-my-generate">
        {hasList === 0 && (
          <div className="no-avatar">
            <img className="image-no-image" src={NoImage} alt="" />
            <div className="des">
              No photos have been created yet. Make a great photo of yourself
            </div>
            <Button
              className="btn-create-new"
              onClick={() => navigate(ROUTES.APP_PAGE)}
            >
              <img src={IconAddOutline} alt="" />
              <span>Create New AI Avatar</span>
            </Button>
          </div>
        )}
        {hasList === 1 && (
          <div className="list-avatar">
            <div className="parent-content-list-avatar">
              <div className="content-list-avatar">
                {/* {listSession.map((item: any, index: number) => (
                  <div
                    key={item.id}
                    className={`item-avatar ${
                      item?.status === TypeSessionStatus.ACTIVE &&
                      'not-allow-avatar'
                    }`}
                    onClick={() =>
                      handleClickDetail(item?.status, item.sessionId, index + 1)
                    }
                  >
                    <div className="image-item-avatar">
                      <img
                        className="main-image"
                        src={
                          item?.status === TypeSessionStatus.ACTIVE
                            ? item.originFirstImage
                            : getFirstImage(item?.results)
                        }
                        alt=""
                      />
                      {item?.status === TypeSessionStatus.ACTIVE && (
                        <img
                          className="second-image"
                          src={LoadingImage}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="pack">Pack {index + 1}</div>
                  </div>
                ))} */}
              </div>
            </div>
            <div className="create-new-desktop">
              <Button
                className="btn-create-new-desktop"
                onClick={() => navigate(ROUTES.APP_PAGE)}
              >
                <img src={IconAddOutline} alt="" />
                <span>Create New AI Avatar</span>
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <Button
          className="btn-create-new-mobile"
          onClick={() => navigate(ROUTES.APP_PAGE)}
        >
          <img src={IconAddOutline} alt="" />
          <span>Create New AI Avatar</span>
        </Button>
        <TabBottom />
      </div>
    </Wrapper>
  );
}
