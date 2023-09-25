import AppStore from '@/assets/images/home-page/app-store.svg';
import GooglePlay from '@/assets/images/home-page/gg-play.svg';
import UnderlineDecor from '@/assets/images/home-page/mobile-app-decor.png';
import DecorImg1 from '@/assets/images/home-page/mobile-app-item-1.svg';
import DecorImg2 from '@/assets/images/home-page/mobile-app-item-2.svg';
import MobileAppImgSrc from '@/assets/images/home-page/mobile-app.png';
import QrImg from '@/assets/images/home-page/qr.svg';
import { SubTitle } from '@/pages/HomePage/styles';
import {
  ContentWrapper,
  CustomDescription,
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
          <CustomDescription>
            {`Generate and share your avatars on-the-go, ensuring your digital identity is always at your fingertips. Download now and let your creativity roam free!`}
          </CustomDescription>
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
