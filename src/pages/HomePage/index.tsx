import Faq from '@/components/HomePage/Faq';
import HomePageFooter from '@/components/HomePage/Footer';
import Header from '@/components/HomePage/Header';
import Intro from '@/components/HomePage/Intro';
import ReadyStarted from '@/components/HomePage/ReadyStarted';
import StepsToCreate from '@/components/HomePage/StepsToCreate';
import TransformPhoto from '@/components/HomePage/TransformPhoto';
import UsersSay from '@/components/HomePage/UsersSay';
import { analyticsLogEvent } from '@/firebase';
import { landingPageTracking } from '@/firebase/firebase';
import { ROUTES } from '@/routes/routes';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BodyWrapper, ElipseDecor1, ElipseDecor2, Wrapper } from './styles';

export const salePageLinkFromLandingPage = `${ROUTES.SALE_PAGE}?from=landing_page`;
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

      {/* <ElipseDecor1 />
      <ElipseDecor2 /> */}
    </Wrapper>
  );
}
