import DefaultAvatar from '@/assets/images/default_avatar.png';
import LogoHeader from '@/assets/images/logo.png';
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
import IconMyAvatar from '@/assets/images/icon-my-avatar.svg';
import { setStepGenerate } from '@/store/slices/appSlice';

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
          <div
            className="button"
            onClick={() => {
              dispatch(setStepGenerate(0));
              navigate(ROUTES.LIST_AVATAR);
            }}
          >
            <img src={IconMyAvatar} alt="" />
            My Avatar
          </div>
          <UserAvatar />
        </div>
      )}
    </HeaderWrapper>
  );
};
export default Header;
