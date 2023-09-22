import { breakpoints } from '@/config/breakpoints';
import { keyframes, styled } from 'styled-components';

export const Wrapper = styled.div`
  overflow-x: hidden;
  position: relative;
`;

export const HomepageContainer = styled.div`
  max-width: 1083px;
  margin: 0px auto;
  width: 100vw;
  @media screen and (max-width: ${breakpoints.lg}) {
    padding: 0 20px;
  }
`;

const gradientAnimated = keyframes`
  0% {
		background-position: 0% 100%;
	}
	50% {
		background-position: 100% 100%;
	}
	100% {
		background-position: 0% 100%;
	}
`;

export const BannerWrapper = styled.div`
  cursor: pointer;
  background: linear-gradient(
    90deg,
    #8170ea 0%,
    #bd8ad2 19.52%,
    #d98e94 40.76%,
    #e18c84 65%,
    #bd8ad2 89.52%,
    #8170ea 100%
  );
  background-size: 300% 200%;
  animation: ${gradientAnimated} 15s ease infinite;
  display: flex;
  width: 100vw;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 16px 24px;
  }
`;

export const BannerContent = styled.p`
  margin: 0;
  color: #fff;
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 0px;
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 12px;
  }
`;

export const BannerLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media screen and (max-width: ${breakpoints.md}) {
    svg {
      display: none;
    }
  }
`;

export const BannerLink = styled.p`
  color: #fff;
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  text-decoration-line: underline;
  margin-bottom: 0px;
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 12px;
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
  bottom: 900px;
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
  bottom: 920px;
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
