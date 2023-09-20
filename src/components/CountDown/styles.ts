import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimeNumber = styled.p`
  color: var(--secondary-black, #262626);
  text-align: center;
  font-family: Rubik;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 48px */
  margin: 0;
`;

export const TimeString = styled.p`
  color: var(--text-secondary, #737373);
  text-align: center;
  font-family: Outfit;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  margin: 0;
`;

export const Colon = styled.p`
  color: var(--secondary-black, #262626);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
