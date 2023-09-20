/* eslint-disable no-constant-condition */
import { Avatar, Button } from 'antd';
import { HeaderWrapper } from './style';
import LogoHeader from '@/assets/images/logo-ai.svg';
import DefaultAvatar from '@/assets/images/default-avatar.png';

const Header = () => {
  const handleErrorImage = (e: any) => {
    e.target.onerror = null;
    e.target.src = DefaultAvatar;
  };

  return (
    <HeaderWrapper>
      <img src={LogoHeader} alt="" />
      {true ? (
        <span>Sign In</span>
      ) : (
        <div className="my-avatar">
          <Button className="btn-view">View My Generated Avatar</Button>
          <Avatar
            src={
              <img
                src={DefaultAvatar}
                alt="avatar"
                onError={handleErrorImage}
              />
            }
            size={40}
          />
        </div>
      )}
    </HeaderWrapper>
  );
};
export default Header;
