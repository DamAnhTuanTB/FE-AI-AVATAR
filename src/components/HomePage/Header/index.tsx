import LogoSrc from '@/assets/images/logo.png';
import ArrowRight from '@/components/Icons/ArrowRight';
import UserAvatar from '@/components/UserAvatar';
import { analyticsLogEvent } from '@/firebase';
import { landingPageTracking } from '@/firebase/firebase';
import {
  salePageLinkFromLandingPage,
  uploadPhotoLinkFromLandingPage,
} from '@/pages/HomePage';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useNavigate } from 'react-router-dom';
import {
  BannerContent,
  BannerLink,
  BannerLinkWrapper,
  BannerWrapper,
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
  { title: 'FAQs', href: '#faq' },
  { title: 'Testimonials', href: '#testimonials' },
];

export default function Header() {
  const navigate = useNavigate();
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  return (
    <Root>
      <BannerWrapper
        onClick={() => {
          navigate(salePageLinkFromLandingPage);
        }}
      >
        <BannerContent>Limited Time Deal! Get Up to 50% off</BannerContent>
        <BannerLinkWrapper>
          <BannerLink>Grab deal</BannerLink>
          <ArrowRight />
        </BannerLinkWrapper>
      </BannerWrapper>
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
              <MenuLink key={link.title} href={link.href}>
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
                if (userInfor?.id) {
                  eventParams[landingPageTracking.clickStart.params.userId] =
                    userInfor?.id;
                }
                analyticsLogEvent(
                  landingPageTracking.clickStart.name,
                  eventParams
                );
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
