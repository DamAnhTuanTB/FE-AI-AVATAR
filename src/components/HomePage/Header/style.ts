import { breakpoints } from '@/config/breakpoints';
import { HomepageContainer } from '@/pages/HomePage/styles';
import styled, { keyframes } from 'styled-components';

export const Root = styled.div`
  /* position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50; */
  background-color: #fff;
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

export const ContainerWrapper = styled(HomepageContainer)`
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 8px 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 66px;
  @media screen and (max-width: ${breakpoints.lg}) {
    margin: 24px 0 0;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    margin: 6px 0;
  }
`;

export const Logo = styled.img<any>`
  margin-bottom: -5px;
  @media screen and (max-width: ${breakpoints.md}) {
    width: 152px;
  }
`;

export const MenusLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  @media screen and (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;

export const MenuLink = styled.a`
  color: var(--text-primary, #18181b);
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
  &:hover {
    color: #f6c447;
  }
`;

const GetstartedAnimated = keyframes`
  from{
    background-color: #191a1f;
  }
  to
  {
    background-color: #f6c447
    }
`;

export const GetStartedWrapper = styled.div`
  cursor: pointer;
  border-radius: 100px;
  background: #191a1f;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  p {
    color: #fff;
    text-align: center;
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    margin: 0;
  }
  &:hover {
    animation: ${GetstartedAnimated} 0.5s;
    -webkit-animation-fill-mode: forwards;
    /* background-color: #f6c447; */
    p {
      color: #262626;
    }
    svg {
      path {
        stroke: #262626;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.md}) {
    p {
      font-size: 12px;
    }
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    width: 40px;
  }
`;

export const UserName = styled.p`
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
  color: var(--text-primary, #18181b);
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  @media screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
