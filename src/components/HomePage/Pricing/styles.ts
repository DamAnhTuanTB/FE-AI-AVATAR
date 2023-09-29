import { breakpoints } from '@/config/breakpoints';
import { HomepageContainer, Title } from '@/pages/HomePage/styles';
import styled, { keyframes } from 'styled-components';

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

export const PackagesWrapper = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  @media screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PackageWrapper = styled.div<{ popular: boolean }>`
  border-radius: 24px;
  border: 1px solid;
  border-color: ${(props) => (props.popular ? '#F6C447' : '#fef9ed')};
  background: #fef9ed;
  box-shadow: 0px 4px 19px 0px #fffbf2;
  display: flex;
  padding: 24px 40px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  height: max-content;
  align-self: flex-end;
  @media screen and (max-width: ${breakpoints.lg}) {
    padding: 12px 24px;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 24px 40px;
  }
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  p {
    color: var(--text-primary, #18181b);
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    margin: 0px;
  }
`;

export const Price = styled.p<{ popular: boolean }>`
  color: ${(props) => (props.popular ? '#FF8F28' : '#262626')};
  font-family: Rubik;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 60px */
  margin: 0px;
`;

export const Recurring = styled.p`
  color: var(--text-primary, #18181b);
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  margin: 0px;
`;

export const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BenefitItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    color: var(--neutral-700, #404040);

    /* Body/Body 1.1/Regular */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 16.8px */
    margin: 0px;
  }
`;
const PopularSelect = keyframes`
  from{
    background-color: #f6c447;
    color:#18181B;
  }
  to
  {
    background-color: #F6C447CC;
    color:#18181B;
    }
`;

const NormalSelect = keyframes`
  from{
    background-color: #262626;
    color:#fff;
  }
  to
  {
    background-color:  #f6c447;
    color:#18181B;
    }
`;

const Loading = keyframes`
  from{
    transform: rotate(0);
  }
  to
  {
    transform: rotate(360deg);
    }
`;

export const SelectButton = styled.div<{ popular: boolean }>`
  cursor: pointer;
  display: flex;
  width: 170px;
  min-height: 37px;
  padding: 8px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: ${(props) => (props.popular ? '#F6C447' : '#262626')};
  color: ${(props) => (props.popular ? '#18181B' : '#fff')};
  p {
    text-align: center;

    /* Sub-headings/Sub-head 2/Semibold */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 21px */
    margin: 0px;
  }
  img {
    animation: ${Loading} 1s infinite;
    animation-timing-function: linear;
    -webkit-animation-fill-mode: forwards;
  }
  &:hover {
    animation: ${(props) => (props.popular ? PopularSelect : NormalSelect)} 0.5s;
    -webkit-animation-fill-mode: forwards;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const PopularWrapper = styled.div`
  border-radius: 100px;
  border: 1px solid var(--primary-1, #f6c447);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(27.5px);
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  p {
    color: var(--secondary-black, #262626);

    /* Body/Body 2/Medium */
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */
    margin: 0px;
  }
  svg {
    g {
      path {
        fill: #00a5a5;
      }
    }
  }
`;
