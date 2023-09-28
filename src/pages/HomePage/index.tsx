import Faq from '@/components/HomePage/Faq';
import HomePageFooter from '@/components/HomePage/Footer';
import Header from '@/components/HomePage/Header';
import Intro from '@/components/HomePage/Intro';
import ReadyStarted from '@/components/HomePage/ReadyStarted';
import StepsToCreate from '@/components/HomePage/StepsToCreate';
import TransformPhoto from '@/components/HomePage/TransformPhoto';
import UsersSay from '@/components/HomePage/UsersSay';
import { landingPageTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { ROUTES } from '@/routes/routes';
import { useEffect } from 'react';
import { BodyWrapper, Wrapper } from './styles';
import Pricing from '@/components/HomePage/Pricing';

export const salePageLinkFromLandingPage = `${ROUTES.SALE_PAGE}?from=landing_page`;
export const uploadPhotoLinkFromLandingPage = `${ROUTES.APP_PAGE}?from=landing_page`;

export default function HomePage() {
  const { logEvent } = useTrackingEvent();

  useEffect(() => {
    logEvent(landingPageTracking.view.name);
  }, []);

  return (
    <Wrapper>
      <Header />

      <BodyWrapper>
        <Intro />
        <TransformPhoto />
        <StepsToCreate />
        <UsersSay />
        <Pricing />
        {/* <MobileApp /> */}
        <Faq />
        <ReadyStarted />
      </BodyWrapper>

      <HomePageFooter />

      {/* <ElipseDecor1 />
      <ElipseDecor2 /> */}
    </Wrapper>
  );
}
