import { HomepageContainer, Title } from '@/pages/HomePage/styles';
import styled from 'styled-components';

export const Wrapper = styled(HomepageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomTitle = styled(Title)`
  text-align: center;
  margin: 24px 0 16px;
`;

export const StepsWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const StepWrapper = styled.div`
  display: flex;
  padding: 12px 60px;
  justify-content: space-between;
  gap: 60px;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #e5e5e5;
  background: #fff;
  width: 100%;
`;

export const StepContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StepImage = styled.img``;

export const StepIcon = styled.div`
  flex: 1 0 auto;
  width: 50px;
  height: 50px;
  background-color: rgba(246, 196, 71, 0.2);
  border: 2px solid #f6c447;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  p {
    margin: 0;
    color: var(--secondary-black, #262626);
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */
  }
`;

export const StepTitle = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  margin: 0;
`;

export const StepDescription = styled.p`
  margin: 0;
  color: var(--text-secondary, #737373);

  /* Sub-headings/Sub-head 1/Regular */
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
