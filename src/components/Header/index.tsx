import { HeaderWrapper } from './style';
import LogoHeader from '@/assets/images/logo-ai.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={LogoHeader} alt="" />
    </HeaderWrapper>
  );
};
export default Header;
