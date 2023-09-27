import { breakpoints } from '@/config/breakpoints';
import { keyframes, styled } from 'styled-components';
import Bg from '@/assets/images/home-page/bg.png';
import BgMobile from '@/assets/images/home-page/bg-mobile.png';

export const Wrapper = styled.div`
  /* overflow-x: hidden; */
  position: relative;
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media screen and (max-width: ${breakpoints.md}) {
    background-image: url(${BgMobile});
  }
`;

export const HomepageContainer = styled.div`
  max-width: 1100px;
  margin: 0px auto;
  width: 100vw;
  @media screen and (max-width: ${breakpoints.lg}) {
    padding: 0 20px;
  }
`;

export const BodyWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 120px;
  @media screen and (max-width: ${breakpoints.md}) {
    gap: 40px;
  }
`;

export const SubTitle = styled.p`
  margin: 0px;
  color: var(--primary-1, #f6c447);
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;

export const Title = styled.p`
  margin: 0px;
  color: var(--text-primary, #333333);
  text-align: left;
  font-family: Outfit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  margin: 0px;
  color: var(--text-secondary, #737373);
  text-align: center;
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  @media screen and (max-width: ${breakpoints.md}) {
    /* font-size: 14px; */
  }
`;

export const ElipseDecor1 = styled.div`
  position: absolute;
  bottom: 300px;
  left: -24px;
  width: 1087px;
  height: 1087px;
  flex-shrink: 0;
  border-radius: 1087px;
  background: #f7f6ff;
  filter: blur(200px);
  @media screen and (max-width: ${breakpoints.md}) {
    width: 433.644px;
    height: 433.644px;
    bottom: 1758px;
    left: -218px;
    border-radius: 433.644px;
    background: rgba(228, 224, 254, 0.3);
    filter: blur(79.7872314453125px);
  }
`;

export const ElipseDecor2 = styled.div`
  position: absolute;
  bottom: 320px;
  right: -131px;
  width: 1087px;
  height: 1087px;
  flex-shrink: 0;
  border-radius: 1087px;
  background: #fffaf9;
  filter: blur(200px);
  @media screen and (max-width: ${breakpoints.md}) {
    width: 433.644px;
    height: 433.644px;
    bottom: 1758px;
    right: -235px;
    border-radius: 433.644px;
    background: rgba(253, 236, 235, 0.3);
    filter: blur(79.7872314453125px);
  }
`;
