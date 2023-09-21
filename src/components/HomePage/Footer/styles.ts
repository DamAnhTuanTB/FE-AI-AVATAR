import { breakpoints } from '@/config/breakpoints';
import { HomepageContainer } from '@/pages/HomePage/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  // padding-top: 40px;
  @media screen and (max-width: ${breakpoints.md}) {
    padding-top: 0px;
  }
`;

export const ContentWrapper = styled(HomepageContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  p,
  a {
    margin: 0px;
    color: var(--secondary-black, #262626);

    /* Body/Body 2/Regular */
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 27px;
`;
