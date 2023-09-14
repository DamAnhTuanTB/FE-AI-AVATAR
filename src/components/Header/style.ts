import { breakpoints } from '@/config/breakpoints';
import { styled } from 'styled-components';

export const HeaderWrapper = styled.div`
  padding-top: 16px;
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 8px 16px;
    /* margin-bottom: 4px; */
    img {
      width: 110px;
    }
  }
`;
