import { useState } from 'react';
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

const getFirstImage = (results: any) => {
  const keys = Object.keys(results);
  return results[keys[0]][0];
};

export default function ListAvatar() {
  const navigate = useNavigate();
  const [listSession, setListSession] = useState<any>([]);
  useQuery(['get-list-session'], () => generateService.getListSession(), {
    onSuccess: (res: any) => {
      setListSession(res.data.data);
    },
  });

  return (
    <Wrapper>
      <div className="title-my-generate">My Generated Avatars</div>
      <div className="content-my-generate">
        {listSession.length === 0 ? (
          <div className="no-avatar">
            <img className="image-no-image" src={NoImage} alt="" />
            <div className="des">
              No photos have been created yet. Make a great photo of yourse lf
            </div>
            <Button
              className="btn-create-new"
              onClick={() => navigate(ROUTES.HOME)}
            >
              <img src={IconAddOutline} alt="" />
              <span>Create New AI Avatar</span>
            </Button>
          </div>
        ) : (
          <div className="list-avatar">
            <div className="parent-content-list-avatar">
              <div className="content-list-avatar">
                {listSession.map((item: any, index: number) => (
                  <div
                    key={item.id}
                    className="item-avatar"
                    onClick={() =>
                      navigate(
                        `/list-avatar/${item.sessionId}?pack=${index + 1}`
                      )
                    }
                  >
                    <div className="image-item-avatar">
                      <img
                        src={
                          item?.status === TypeSessionStatus.ACTIVE
                            ? item.originFirstImage
                            : getFirstImage(item?.results)
                        }
                        alt=""
                      />
                    </div>
                    <div className="pack">Pack {index + 1}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="create-new-desktop">
              <Button
                className="btn-create-new-desktop"
                onClick={() => navigate(ROUTES.HOME)}
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
          onClick={() => navigate(ROUTES.HOME)}
        >
          <img src={IconAddOutline} alt="" />
          <span>Create New AI Avatar</span>
        </Button>
        <TabBottom />
      </div>
    </Wrapper>
  );
}
