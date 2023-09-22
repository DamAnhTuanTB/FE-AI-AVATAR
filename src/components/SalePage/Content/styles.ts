import { breakpoints } from '@/config/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 0 24px 40px;
  }
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

export const SectionTitle = styled.div`
  color: var(--secondary-black, #262626);
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  margin: 0;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TermsWrapper = styled.ul``;

export const TermItem = styled.li`
  color: var(--secondary-black, #262626);

  /* Sub-headings/Sub-head 1/Regular */
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export const BuyNowButton = styled.div`
  cursor: pointer;
  background: var(--secondary-bold, #ffa800);
  display: flex;
  width: 227px;
  padding: 10px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 8px auto 0;
  p {
    color: #fff;
    text-align: center;

    /* Sub-headings/Sub-head 1/Semibold */
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    margin: 0;
  }
`;

export const AvatarsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  img {
    width: 100%;
  }
`;
