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
  Wrapper,
} from './styles';
import { Description, Title } from '@/pages/HomePage/styles';
import ReadyStartedImg from '@/assets/images/home-page/ready-started-img.png';
import WardIcon from '@/components/Icons/WardIcon';
import ImageDecorSrc from '@/assets/images/home-page/ready-started-decor.svg';

export default function ReadyStarted() {
  return (
    <Wrapper>
      <BodyWrapper>
        <ContentWrapper>
          <div>
            <TitleWrapper>
              <Title>Ready to get started?</Title>
            </TitleWrapper>
            <CustomDescription>
              Elevate your online persona, boost brand engagement, and embrace a
              new era of self-expression. Get started now and let your avatar
              tell your unique story!
            </CustomDescription>
          </div>
          <CreateButtonWrapper>
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
