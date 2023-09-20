import React from 'react';
import {
  BannerContent,
  BannerLink,
  BannerLinkWrapper,
  BannerWrapper,
  BodyWrapper,
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

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <BannerWrapper
        onClick={() => {
          navigate(ROUTES.SALE_PAGE);
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
        <MobileApp />
        <Faq />
        <ReadyStarted />
      </BodyWrapper>

      <HomePageFooter />
    </Wrapper>
  );
}