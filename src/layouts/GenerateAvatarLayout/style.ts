import { breakpoints } from '@/config/breakpoints';
import { styled } from 'styled-components';

export const DefaultLayoutWrapper: any = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 60px;
  @media screen and (max-width: ${breakpoints.lg}) {
    padding: 0px 0px;
  }
`;

export const ContentWrapper = styled.div`
  height: calc(100vh - 40px);
`;
