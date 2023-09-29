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
import { useLocation } from 'react-router-dom';
import {Helmet} from "react-helmet";

export const salePageLinkFromLandingPage = `${ROUTES.SALE_PAGE}?from=landing_page`;
export const uploadPhotoLinkFromLandingPage = `${ROUTES.APP_PAGE}?from=landing_page`;

export default function HomePage() {
  const { logEvent } = useTrackingEvent();
  const location = useLocation();

  useEffect(() => {
    logEvent(landingPageTracking.view.name);
    const elementId = location.hash.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Wrapper>
      <Helmet>
        <title>Avatarist.ai - Transform your photos into AI avatars</title>
        <meta name="description" content="Transform your photos into AI-powered avatars that mirror your style and persona. Elevate your digital presence with Avatarist today!"/>
      </Helmet>
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
