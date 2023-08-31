import { useNavigate } from 'react-router-dom';
import { Wrapper } from './style';
import IconGenerateActive from '@/assets/images/icon-generate-active.svg';
import IconGenerateNotActive from '@/assets/images/icon-generate-not-active.svg';
import IconMyAvatarActive from '@/assets/images/icon-my-avatar-active.svg';
import IconMyAvatarNotActive from '@/assets/images/icon-my-avatar-not-active.svg';

export default function TabBottom() {
  const path = window.location.pathname;
  const generateActive = path === '/';
  const avatarActive = path === '/my-avatar';
  const naviage = useNavigate();
  return (
    <Wrapper>
      <div>
        <img
          src={generateActive ? IconGenerateActive : IconGenerateNotActive}
          alt=""
        />
        <div>Generate</div>
        {generateActive && <div className="horizontal" />}
      </div>
      <div>
        <img
          src={avatarActive ? IconMyAvatarActive : IconMyAvatarNotActive}
          alt=""
        />
        <div>My avatars</div>
      </div>
    </Wrapper>
  );
}
