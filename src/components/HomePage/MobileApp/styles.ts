import { HomepageContainer, Title } from '@/pages/HomePage/styles';
import styled from 'styled-components';

export const Wrapper = styled(HomepageContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  border: 1px solid #d4d4d4;
  padding: 24px 80px;
  gap: 55px;
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const TitleDecor = styled.img`
  position: absolute;
  bottom: -35px;
  right: 0;
`;

export const CustomTitle = styled(Title)`
  margin: 24px 0 16px;
  text-align: start;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const DownloadWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const DownloadButton = styled.div`
  cursor: pointer;
`;

export const QrCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    color: var(--secondary-black, #262626);
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */
    margin: 0;
  }
`;

export const Decor1 = styled.img`
  position: absolute;
  top: -60px;
  right: -65px;
`;

export const Decor2 = styled.img`
  position: absolute;
  bottom: -24px;
  left: -40px;
`;

export const MobileAppImg = styled.img`
  position: relative;
  z-index: 1;
`;
