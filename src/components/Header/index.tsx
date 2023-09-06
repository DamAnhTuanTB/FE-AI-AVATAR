import { HeaderWrapper } from './style';
import StarHeader from '@/assets/images/star-header.svg';
import MenuHeader from '@/assets/images/menu-header.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="title">
        <img className="menu-header" src={MenuHeader} alt="" />
        <span>AI AVATAR</span>
        <img className="star-header" src={StarHeader} alt="" />
      </div>
      <div className="text-navigate">Sign In</div>
    </HeaderWrapper>
  );
};
export default Header;
