import { breakpoints } from '@/config/breakpoints';
import { HomepageContainer } from '@/pages/HomePage/styles';
import styled, { keyframes } from 'styled-components';

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
  @media screen and (max-width: ${breakpoints.md}) {
    margin: 6px 0;
  }
`;

export const Logo = styled.img`
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

  @media screen and (max-width: ${breakpoints.md}) {
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
