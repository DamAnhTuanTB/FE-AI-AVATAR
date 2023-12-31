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
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ContainerWrapper,
  CustomLink,
  GetStartedWrapper,
  Logo,
  MenuLink,
  MenusLink,
  Root,
  UserInfoWrapper,
  UserName,
  Wrapper,
} from './style';
import { ROUTES } from '@/routes/routes';

const links = [
  { title: 'Why Avatarist?', href: '#why-choose-avatar' },
  { title: 'How it works?', href: '#how-it-works' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'FAQs', href: '#faq' },
];

export default function HomePageHeader() {
  const navigate = useNavigate();
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const { logEvent } = useTrackingEvent();
  const location = useLocation();


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
            {links.map((link) => {
              if (location.pathname === ROUTES.HOME)
                return (
                  <MenuLink key={link.title} href={link.href}>
                    {link.title}
                  </MenuLink>
                );
              return (
                <CustomLink key={link.title} to={ROUTES.HOME + link.href}>
                  {link.title}
                </CustomLink>
              );
            })}
          </MenusLink>

          {userInfor?.userEmail ? (
            <UserInfoWrapper>
              {location.pathname !== ROUTES.HOME && <UserName>{userInfor?.userEmail}</UserName>}
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
