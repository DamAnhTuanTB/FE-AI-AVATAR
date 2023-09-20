import { breakpoints } from '@/config/breakpoints';
import { Description, HomepageContainer } from '@/pages/HomePage/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px 0;
  background: var(--primary-1, #f6c447);
`;

export const BodyWrapper = styled(HomepageContainer)`
  display: flex;
  align-items: center;
  gap: 32px;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  position: relative;
  width: max-content;
  margin-bottom: 16px;
`;

export const UnderLine = styled.img`
  position: absolute;
  bottom: -10px;
  right: 0px;
  @media screen and (max-width: ${breakpoints.md}) {
    bottom: -15px;
  }
`;

export const CustomDescription = styled(Description)`
  text-align: start;
`;

export const UnderlineDecor = styled.div`
  position: absolute;
  bottom: -16px;
  right: 0px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const Image = styled.img`
  max-width: 400px;
  @media screen and (max-width: ${breakpoints.md}) {
    width: 90%;
  }
`;

export const ImageDecor = styled.img`
  position: absolute;
  right: -60px;
  top: 10px;
  @media screen and (max-width: ${breakpoints.md}) {
    width: 50px;
    right: 20px;
    top: 0px;
  }
`;

export const CreateButtonWrapper = styled.div`
  width: max-content;
  cursor: pointer;
  display: flex;
  height: 56px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 100px;
  background: var(--secondary-white, #fff);
  p {
    color: var(--text-primary, #18181b);
    text-align: center;

    /* Sub-headings/Sub-head 1/Medium */
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    margin: 0;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;