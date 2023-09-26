import React from 'react';
import {
  BodyWrapper,
  ContentWrapper,
  CreateButtonWrapper,
  CustomDescription,
  Image,
  ImageDecor,
  ImageWrapper,
  TitleWrapper,
  UnderLine,
  Wrapper,
} from './styles';
import { Description, Title } from '@/pages/HomePage/styles';
import ReadyStartedImg from '@/assets/images/home-page/ready-started-img.png';
import WardIcon from '@/components/Icons/WardIcon';
import ImageDecorSrc from '@/assets/images/home-page/ready-started-decor.svg';
import UnderlineSrc from '@/assets/images/home-page/ready-started-underline.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { landingPageTracking } from '@/firebase/firebase';
import { analyticsLogEvent } from '@/firebase';
import { uploadPhotoLinkFromLandingPage } from '@/pages/HomePage';

export default function ReadyStarted() {
  const navigate = useNavigate();
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  return (
    <Wrapper>
      <BodyWrapper>
        <ContentWrapper>
          <div>
            <TitleWrapper>
              <Title>Ready to get started?</Title>
              <UnderLine src={UnderlineSrc} alt={'underline'} />
            </TitleWrapper>
            <CustomDescription>
              Elevate your online persona, boost brand engagement, and embrace a
              new era of self-expression. Get started now and let your avatar
              tell your unique story!
            </CustomDescription>
          </div>
          <CreateButtonWrapper
            onClick={() => {
              const eventParams: any = {
                [landingPageTracking.clickStart.params.from]: 'cta_banner',
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
            <WardIcon />
            <p>Create your AI Avatar now!</p>
          </CreateButtonWrapper>
        </ContentWrapper>
        <ImageWrapper>
          <Image src={ReadyStartedImg} alt="ready-get-started-img" />
          <ImageDecor src={ImageDecorSrc} alt="decor" />
        </ImageWrapper>
      </BodyWrapper>
    </Wrapper>
  );
}
