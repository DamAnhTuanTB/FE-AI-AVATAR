import {
  ContentPopoverWrapper,
  HeaderWrapper,
  PopoverAvatarWrapper,
} from './style';
import LogoHeader from '@/assets/images/logo.svg';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { AuthEnum } from '@/components/ModalAuthen/constant';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { Avatar } from 'antd';
import IcSignOut from '@/assets/icons/ic_signout.svg';
import { logOut } from '@/store/slices/authSlice';
import { initialUserInfo, setUserInfor } from '@/store/slices/appSlice';
import DefaultAvatar from '@/assets/images/default_avatar.png';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/routes/routes';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const [searchParams, setSearchParams] = useSearchParams();
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (userInfor?.userAvatar) {
      setAvatarUrl(userInfor?.userAvatar);
    } else {
      setAvatarUrl(DefaultAvatar);
    }
  }, [userInfor?.userAvatar]);

  const handleShowSignInModal = () => {
    setSearchParams(createSearchParams({ auth: AuthEnum.Login }));
  };

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
    <HeaderWrapper>
      <img src={LogoHeader} alt="" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}/>
      {!isLoggedIn ? (
        <div className="sign-in" onClick={() => handleShowSignInModal()}>
          Sign In
        </div>
      ) : (
        <div className="avatar-wrapper">
          <div className="button" onClick={() => navigate(ROUTES.LIST_AVATAR)}>
            View My Generated Avatar
          </div>
          <div className="avatar-item">
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
          </div>
        </div>
      )}
    </HeaderWrapper>
  );
};
export default Header;
