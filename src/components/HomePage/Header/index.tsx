import LogoSrc from '@/assets/images/logo.png';
import ArrowRight from '@/components/Icons/ArrowRight';
import SaleBanner from '@/components/SaleBanner';
import UserAvatar from '@/components/UserAvatar';
import { landingPageTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import {
  salePageLinkFromLandingPage,
  uploadPhotoLinkFromLandingPage,
} from '@/pages/HomePage';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useNavigate } from 'react-router-dom';
import {
  ContainerWrapper,
  GetStartedWrapper,
  Logo,
  MenuLink,
  MenusLink,
  Root,
  UserInfoWrapper,
  UserName,
  Wrapper,
} from './style';

const links = [
  { title: 'Why AI Avatar', href: '#why-choose-avatar' },
  { title: 'How it works?', href: '#how-it-works' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'FAQs', href: '#faq' },
];

export default function HomePageHeader() {
  const navigate = useNavigate();
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const { logEvent } = useTrackingEvent();
  return (
    <Root>
      <SaleBanner src={salePageLinkFromLandingPage} />
      <ContainerWrapper>
        <Wrapper>
          <Logo
            src={LogoSrc}
            alt="logo"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />

          <MenusLink>
            {links.map((link) => (
              <MenuLink
                key={link.title}
                href={`http://localhost:3030/${link.href}`}
              >
                {link.title}
              </MenuLink>
            ))}
          </MenusLink>

          {userInfor?.userEmail ? (
            <UserInfoWrapper>
              <UserName>{userInfor?.userEmail}</UserName>
              <UserAvatar />
            </UserInfoWrapper>
          ) : (
            <GetStartedWrapper
              onClick={() => {
                const eventParams: any = {
                  [landingPageTracking.clickStart.params.from]: 'header',
                };
                logEvent(landingPageTracking.clickStart.name, eventParams);
                navigate(uploadPhotoLinkFromLandingPage);
              }}
            >
              <p>Get Started</p>
              <ArrowRight />
            </GetStartedWrapper>
          )}
        </Wrapper>
      </ContainerWrapper>
    </Root>
  );
}
