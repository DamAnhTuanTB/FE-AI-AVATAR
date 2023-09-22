import { breakpoints } from '@/config/breakpoints';
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
  /* @media screen and (max-width: ${breakpoints.md}) {
    font-size: 40px;
  } */
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
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 32px 16px;
    flex-direction: column;
    gap: 24px;
  }
`;

export const StepContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: ${breakpoints.md}) {
    gap: 16px;
  }
`;
export const MainStep = styled.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
`;
export const StepImage = styled.img<{ third?: boolean }>`
  max-width: ${(props) => (props.third ? '320px' : '269px')};
  width: 100%;
  @media screen and (max-width: ${breakpoints.md}) {
    max-width: ${(props) => (props.third ? 'max-content' : '100%')};
    width: ${(props) => (props.third ? '110%' : '100%')};
    margin-right: ${(props) => (props.third ? '40px' : '0px')};
  }
`;

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
  color: var(--text-primary, #18181b);
  font-family: Outfit;
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
