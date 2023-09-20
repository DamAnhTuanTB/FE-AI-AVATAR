import { useNavigate } from 'react-router-dom';
import { Wrapper } from './style';
import IconGenerateActive from '@/assets/images/icon-generate-active.svg';
import IconGenerateNotActive from '@/assets/images/icon-generate-not-active.svg';
import IconMyAvatarActive from '@/assets/images/icon-my-avatar-active.svg';
import IconMyAvatarNotActive from '@/assets/images/icon-my-avatar-not-active.svg';
import { ROUTES } from '@/routes/routes';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

export default function TabBottom() {
  const path = window.location.pathname;
  const generateActive = path === '/';
  const avatarActive = path.includes('/list-avatar');
  const naviage = useNavigate();

  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  if (!isLoggedIn) {
    return <></>;
  }

  return (
    <Wrapper>
      <div onClick={() => naviage(ROUTES.HOME)}>
        <img
          src={generateActive ? IconGenerateActive : IconGenerateNotActive}
          alt=""
        />
        <div className={`${generateActive && 'active'} text`}>Generate</div>
        {generateActive && <div className="horizontal" />}
      </div>
      <div onClick={() => naviage(ROUTES.LIST_AVATAR)}>
        <img
          src={avatarActive ? IconMyAvatarActive : IconMyAvatarNotActive}
          alt=""
        />
        <div className={`${avatarActive && 'active'} text`}>My avatars</div>
        {avatarActive && <div className="horizontal" />}
      </div>
    </Wrapper>
  );
}
