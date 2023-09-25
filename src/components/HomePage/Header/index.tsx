import { HomepageContainer } from '@/pages/HomePage/styles';
import React from 'react';
import LogoSrc from '@/assets/images/logo.svg';
import {
  ContainerWrapper,
  GetStartedWrapper,
  Logo,
  MenuLink,
  MenusLink,
  Wrapper,
} from './style';
import ArrowRight from '@/components/Icons/ArrowRight';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import { analyticsLogEvent } from '@/firebase';
import { landingPageTracking } from '@/firebase/firebase';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { uploadPhotoLinkFromLandingPage } from '@/pages/HomePage';

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

        <GetStartedWrapper
          onClick={() => {
            const eventParams: any = {
              [landingPageTracking.clickStart.params.from]: 'header',
            };
            if (userInfor?.id) {
              eventParams[landingPageTracking.clickStart.params.userId] =
                userInfor?.id;
            }
            analyticsLogEvent(landingPageTracking.clickStart.name, eventParams);
            navigate(uploadPhotoLinkFromLandingPage);
          }}
        >
          <p>Get Started</p>
          <ArrowRight />
        </GetStartedWrapper>
      </Wrapper>
    </ContainerWrapper>
  );
}
