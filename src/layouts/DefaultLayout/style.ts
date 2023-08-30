import { styled } from 'styled-components';

export const DefaultLayoutWrapper: any = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  padding-top: 4px;
  height: calc(100vh - 40px);
`;
