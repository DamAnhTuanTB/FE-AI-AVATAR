import { breakpoints } from '@/config/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  margin-top: 24px;
`;
export const PriceWrapper = styled.div`
  margin-top: 40px;
`;
export const CountDownWrapper = styled.div`
  padding: 8px 16px;
`;

export const Logo = styled.img``;

export const SubTitle = styled.p`
  color: var(--secondary-bold, #ffa800);

  /* Button/Button 1/Medium */
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  margin: 0px;
  text-align: center;
`;

export const Title = styled.p`
  color: var(--text-primary, #18181b);
  text-align: center;

  /* Headings/Heading 1 */
  font-family: Outfit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  margin: 0px;
  padding: 24px 0px 16px;
  text-align: center;
  white-space: pre-line;
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  color: var(--text-secondary, #737373);
  text-align: center;
  /* Sub-headings/Sub-head 1/Medium */
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  margin: 0px;
  text-align: center;
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 0 20px;
  }
`;
