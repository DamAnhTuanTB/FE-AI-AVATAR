import { breakpoints } from '@/config/breakpoints';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  height: 56px;
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
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
  width: 100%;
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
