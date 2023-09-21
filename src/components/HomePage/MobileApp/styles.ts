import { breakpoints } from '@/config/breakpoints';
import { Description, HomepageContainer, Title } from '@/pages/HomePage/styles';
import styled from 'styled-components';

export const Wrapper = styled(HomepageContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  /* border: 1px solid #d4d4d4; */
  /* background: linear-gradient(216.56deg, #ffffff 100%, #ffffff 100%) padding-box,
    linear-gradient(76.41deg, #d4d4d4 1.52%, rgba(212, 212, 212, 0) 99.99%)
      border-box; */
  padding: 24px 80px;
  gap: 55px;
  /* border: 1px solid transparent; */
  background: transparent;
  border: 1px solid #d4d4d435;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    border: none;
    padding: 32px 20px;
    gap: 40px;
  }
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
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 30px;
  }
`;

export const CustomDescription = styled(Description)`
  text-align: start;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
    p {
      text-align: start;
    }
  }
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
  @media screen and (max-width: ${breakpoints.md}) {
    img {
      width: 127px;
    }
  }
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
  @media screen and (max-width: ${breakpoints.md}) {
    margin-top: -28px;
  }
`;

export const Decor1 = styled.img`
  position: absolute;
  top: -100px;
  right: -80px;
  @media screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const Decor2 = styled.img`
  position: absolute;
  bottom: -70px;
  left: -30px;
  @media screen and (max-width: ${breakpoints.md}) {
    left: 15px;
    bottom: 10px;
    width: 56px;
  }
`;

export const MobileAppImg = styled.img`
  position: relative;
  z-index: 1;
  width: 420px;
  padding-right: 20px;
  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
    padding-right: 0px;
    z-index: 0;
  }
`;
