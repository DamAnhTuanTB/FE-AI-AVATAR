import React, { useEffect } from 'react';
import {
  BannerContent,
  BannerLink,
  BannerLinkWrapper,
  BannerWrapper,
  BodyWrapper,
  ElipseDecor1,
  ElipseDecor2,
  Wrapper,
} from './styles';
import ArrowRight from '@/components/Icons/ArrowRight';
import Header from '@/components/HomePage/Header';
import Intro from '@/components/HomePage/Intro';
import TransformPhoto from '@/components/HomePage/TransformPhoto';
import StepsToCreate from '@/components/HomePage/StepsToCreate';
import UsersSay from '@/components/HomePage/UsersSay';
import MobileApp from '@/components/HomePage/MobileApp';
import HomePageFooter from '@/components/HomePage/Footer';
import Faq from '@/components/HomePage/Faq';
import ReadyStarted from '@/components/HomePage/ReadyStarted';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import { analyticsLogEvent } from '@/firebase';
import { landingPageTracking } from '@/firebase/firebase';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const salePageLinkFromLandingPage = `${ROUTES.SALE_PAGE}?from=landing_page`;
export const uploadPhotoLinkFromLandingPage = `${ROUTES.APP_PAGE}?from=landing_page`;

export default function HomePage() {
  const navigate = useNavigate();
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);

  useEffect(() => {
    const eventParams: any = {};
    if (userInfor?.id) {
      eventParams[landingPageTracking.view.params.userId] = userInfor?.id;
    }
    analyticsLogEvent(landingPageTracking.view.name, { ...eventParams });
  }, []);

  return (
    <Wrapper>
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

      <Header />

      <BodyWrapper>
        <Intro />
        <TransformPhoto />
        <StepsToCreate />
        <UsersSay />
        {/* <MobileApp /> */}
        <Faq />
        <ReadyStarted />
      </BodyWrapper>

      <HomePageFooter />

      <ElipseDecor1 />
      <ElipseDecor2 />
    </Wrapper>
  );
}
