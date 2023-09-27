import React, { useState } from 'react';
import { ContentPopoverWrapper, PopoverAvatarWrapper, Wrapper } from './styles';
import { Avatar } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logOut } from '@/store/slices/authSlice';
import { ROUTES } from '@/routes/routes';
import { initialUserInfo, setUserInfor } from '@/store/slices/appSlice';
import DefaultAvatar from '@/assets/images/avatar-default.svg';
import IcSignOut from '@/assets/icons/ic_signout.svg';
import { RootState } from '@/store/store';

export default function UserAvatar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [avatarUrl, setAvatarUrl] = useState('');
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);

  const contentPopover = () => {
    const handleLogout = () => {
      dispatch(setUserInfor({ ...initialUserInfo }));
      dispatch(logOut());
      navigate(ROUTES.HOME);
      localStorage.clear();
    };

    const numberGenerate = userInfor?.listGenerate?.filter(
      (item: any) => !item.used
    )?.length;

    return (
      <ContentPopoverWrapper>
        <div className="title">
          <div className="image">
            <Avatar
              onClick={() => navigate(ROUTES.HOME)}
              src={avatarUrl}
              size={32}
              onError={() => {
                setAvatarUrl(DefaultAvatar);
                return false;
              }}
            />
          </div>
          <div className="infor">
            <div className="email">{userInfor?.userEmail}</div>
          </div>
        </div>
        <div className="remaining-generated-count">
          Remaining generate count: {numberGenerate}
        </div>
        <div className="dash" />

        <div className="sign-out-btn" onClick={() => handleLogout()}>
          <div className="text">Sign out</div>
          <div className="icon">
            <img src={IcSignOut} alt="" />
          </div>
        </div>
      </ContentPopoverWrapper>
    );
  };

  return (
    <Wrapper>
      <PopoverAvatarWrapper
        placement="bottomRight"
        content={contentPopover}
        trigger={'click'}
        overlayClassName={'header-popover'}
      >
        <Avatar
          src={avatarUrl}
          size={40}
          onError={() => {
            setAvatarUrl(DefaultAvatar);
            return false;
          }}
        />
      </PopoverAvatarWrapper>
    </Wrapper>
  );
}
