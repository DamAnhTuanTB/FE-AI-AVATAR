import { breakpoints } from '@/config/breakpoints';
import styled from 'styled-components';

export const Root = styled.div`
  /* overflow-x: hidden; */
  position: relative;
  background: '#ffffff';
  @media screen and (max-width: ${breakpoints.md}) {
    background: '#ffffff';
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 716px;
  margin: 0 auto;
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 0 16px;
  }
`;

export const MainTitle = styled.p`
  margin: 0px;
  color: var(--text-primary, #18181b);
  font-family: Outfit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
`;

export const Title = styled.p`
  margin: 0px;
  color: var(--text-primary, #18181b);

  /* Button/Button 1/Medium */
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
`;

export const Content = styled.p<{ 'pre-line'?: boolean }>`
  margin: 20px 0px;
  color: var(--text-primary, #18181b);
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  white-space: ${(props) => (props['pre-line'] ? 'pre-line' : 'normal')};
`;

export const UpdatedAt = styled(Title)`
  margin: 12px 0 24px;
`;

export const SubTitle = styled.span``;
