import { breakpoints } from '@/config/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

export const HeaderFooterWrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1083px;
  margin: 0 auto;
  width: 100%;
  @media screen and (max-width: ${breakpoints.lg}) {
    overflow-x: hidden;
  }
`;

export const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  max-width: 1083px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  /* width: calc(100% - 350px); */
  border-radius: 8px;
  border: 1px solid var(--neutral-100, #f5f5f5);
  background: var(--secondary-white, #fff);
  width: 716px;
  padding: 24px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  /* flex: 1 0 auto; */
  @media screen and (max-width: ${breakpoints.lg}) {
    margin-right: 0px;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    border: none;
    width: 100%;
  }
`;

export const PaymentWrapper = styled.div`
  padding: 24px 16px;
  width: 364px;
  border-radius: 8px;
  border: 1px solid var(--neutral-100, #f5f5f5);
  background: var(--secondary-white, #fff);
  box-shadow: 0px 4px 16px 0px rgba(255, 255, 255, 0.07);
  height: max-content;
  /* flex: 1 0 auto; */
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  right: 0;
  @media screen and (max-width: ${breakpoints.lg}) {
    position: static;
    margin: auto;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    border: none;
    width: 100%;
    padding: 24px 0px;
  }
`;

export const BeforeAfterImage = styled.img`
  width: 100%;
`;

export const Description = styled.p`
  margin: 0;
  color: var(--secondary-black, #262626);

  /* Sub-headings/Sub-head 1/Regular */
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
