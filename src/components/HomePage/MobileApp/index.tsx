import React from 'react';
import {
  ContentWrapper,
  CustomTitle,
  Decor1,
  Decor2,
  DownloadButton,
  DownloadWrapper,
  ImageWrapper,
  MobileAppImg,
  QrCodeWrapper,
  TitleDecor,
  TitleWrapper,
  Wrapper,
} from './styles';
import { Description, SubTitle } from '@/pages/HomePage/styles';
import UnderlineDecor from '@/assets/images/home-page/mobile-app-decor.png';
import MobileAppImgSrc from '@/assets/images/home-page/mobile-app.svg';
import GooglePlay from '@/assets/images/home-page/gg-play.svg';
import AppStore from '@/assets/images/home-page/app-store.svg';
import QrImg from '@/assets/images/home-page/qr.svg';
import DecorImg1 from '@/assets/images/home-page/mobile-app-item-1.svg';
import DecorImg2 from '@/assets/images/home-page/mobile-app-item-2.svg';

export default function MobileApp() {
  return (
    <Wrapper>
      <ContentWrapper>
        <div>
          <SubTitle>MOBILE APP</SubTitle>
          <TitleWrapper>
            <CustomTitle>GENERATE AI AVATAR ANYTIME, ANYWHERE</CustomTitle>
            <TitleDecor src={UnderlineDecor} alt="title decor" />
          </TitleWrapper>
          <Description>
            {`Generate and share your avatars on-the-go, ensuring your digital identity is always at your fingertips. Download now and let your creativity roam free!`}
          </Description>
        </div>
        <DownloadWrapper>
          <DownloadButton>
            <img src={GooglePlay} alt="google play" />
          </DownloadButton>
          <DownloadButton>
            <img src={AppStore} alt="app store" />
          </DownloadButton>
        </DownloadWrapper>

        <QrCodeWrapper>
          <img src={QrImg} alt="qr code" />
          <p>or scan this code to download!</p>
        </QrCodeWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <MobileAppImg src={MobileAppImgSrc} alt="mobile-app" />

        <Decor1 src={DecorImg1} alt="decor-1" />
        <Decor2 src={DecorImg2} alt="decor-2" />
      </ImageWrapper>
    </Wrapper>
  );
}
