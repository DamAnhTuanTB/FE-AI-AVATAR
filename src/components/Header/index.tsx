import DefaultAvatar from '@/assets/images/default_avatar.png';
import LogoHeader from '@/assets/images/logo.svg';
import { AuthEnum } from '@/components/ModalAuthen/constant';
import { ROUTES } from '@/routes/routes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { HeaderWrapper } from './style';
import UserAvatar from '../UserAvatar';

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

  return (
    <HeaderWrapper>
      <img
        src={LogoHeader}
        alt=""
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      />
      {!isLoggedIn ? (
        <div className="sign-in" onClick={() => handleShowSignInModal()}>
          Sign In
        </div>
      ) : (
        <div className="avatar-wrapper">
          <div className="button" onClick={() => navigate(ROUTES.LIST_AVATAR)}>
            View My Generated Avatar
          </div>
          <UserAvatar />
        </div>
      )}
    </HeaderWrapper>
  );
};
export default Header;
