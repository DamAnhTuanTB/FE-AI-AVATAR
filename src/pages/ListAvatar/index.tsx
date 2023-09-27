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

const getImage = (results: any, index: number) => {
  const keys = Object.keys(results);
  if (keys?.length < 3) {
    return results[keys[0]][index];
  } else {
    return results[keys[index]][0];
  }
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
      <div className="content-list-avatar">
        <div className="title-my-generate">
          <div className="text">My Avatars</div>
          {hasList === 1 && (
            <Button
              className="btn-create-new"
              onClick={() => navigate(ROUTES.APP_PAGE)}
            >
              <img src={IconAddOutline} alt="" />
              <span>Create New AI Avatar</span>
            </Button>
          )}
        </div>
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
            <div className="content-list-avatar">
              {listSession?.map((item: any, index: number) => (
                <div
                  key={item?.id}
                  className={`parent-item-avatar ${
                    item?.status === TypeSessionStatus.ACTIVE &&
                    'not-allow-avatar'
                  }`}
                  onClick={() =>
                    handleClickDetail(item?.status, item?.sessionId, index + 1)
                  }
                >
                  <div className="item-avatar">
                    {item?.status === TypeSessionStatus.ACTIVE ? (
                      <>
                        <div className="col-1">
                          <img
                            src={
                              item?.originImages?.length > 0
                                ? item?.originImages[0]
                                : item?.originFirstImage
                            }
                            alt=""
                          />
                        </div>
                        <div className="col-2">
                          <div className="col-21">
                            <img
                              src={
                                item?.originImages?.length > 0
                                  ? item?.originImages[1]
                                  : item?.originFirstImage
                              }
                              alt=""
                            />
                          </div>
                          <div className="col-22">
                            <img
                              src={
                                item?.originImages?.length > 0
                                  ? item?.originImages[2]
                                  : item?.originFirstImage
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-1">
                          <img src={getImage(item?.results, 0)} alt="" />
                        </div>
                        <div className="col-2">
                          <div className="col-21">
                            <img src={getImage(item?.results, 1)} alt="" />
                          </div>
                          <div className="col-22">
                            <img src={getImage(item?.results, 2)} alt="" />
                          </div>
                        </div>
                      </>
                    )}
                    {item?.status === TypeSessionStatus.ACTIVE && (
                      <img className="second-image" src={LoadingImage} alt="" />
                    )}
                  </div>
                  <div className="name-pack">Avatar package {index + 1}</div>
                  <div className="info-pack">
                    <span>{item?.styles?.length} styles</span>
                    <span>{item?.styles?.length * 10} images</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
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
