import { breakpoints } from '@/config/breakpoints';
import { Radio } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid var(--neutral-100, #f5f5f5);
  background: var(--secondary-white, #fff);
  box-shadow: 0px 4px 16px 0px rgba(255, 255, 255, 0.07);
  padding: 24px 16px;
`;

export const SelectPackageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const OptionWrapper = styled.div`
  cursor: pointer;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`;

export const LabelOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const OriginalPrice = styled.p`
  margin: 0;
  color: var(--neutral-400, #a3a3a3);
  text-align: center;
  font-family: Outfit;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  text-decoration-line: strikethrough;
  text-decoration: line-through;
`;

export const NewPrice = styled.p`
  margin: 0;
  color: var(--secondary-black, #262626);
  text-align: center;

  /* Body/Body 2/Medium */
  font-family: Outfit;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;

export const Label = styled.p`
  margin: 0;
  color: var(--secondary-black, #262626);
  text-align: left;

  /* Body/Body 1/Medium */
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const BuyButton = styled.div`
  cursor: pointer;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--secondary-bold, #ffa800);
  width: 100%;
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

export const Saving = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 16px;
  border-bottom: 1px solid var(--neutral-200, #e5e5e5);
  width: 100%;
`;

export const SaveItem = styled.div<{ first?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-left: ${(props) => (props.first ? 'none' : '1px solid #E5E5E5')};
`;

export const InfoBlock = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid var(--neutral-200, #e5e5e5);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StatisticPrimaryText = styled.p`
  margin: 0;
  color: var(--secondary-black, #262626);
  text-align: center;

  /* Sub-headings/Sub-head 1/Semibold */
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`;

export const Note = styled.p`
  margin: 0px;
  color: var(--text-secondary, #737373);
  text-align: center;

  /* Sub-headings/Sub-head 2/Medium */
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const RatesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
`;

export const ProvidedLabel = styled.p`
  margin: 0px;
  color: var(--text-secondary, #737373);
  text-align: center;

  /* Body/Body 2/Regular */
  font-family: Outfit;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const TimeNumber = styled.span`
  color: var(--secondary-bold, #ffa800);
`;

export const CustomRadio = styled(Radio)`
  margin-right: 0px;
  .ant-radio-inner {
    border-color: ${(props) => (props.checked ? '#f6c447' : '#D4D4D4')};
    &:after {
      background-color: #f6c447;
    }
  }
  &:hover {
    .ant-radio-inner {
      border-color: ${(props) => (props.checked ? '#f6c447' : '#D4D4D4')};
      &:after {
        background-color: #f6c447;
      }
    }
  }
  .ant-radio {
    &:focus {
      .ant-radio-inner {
        border-color: ${(props) => (props.checked ? '#f6c447' : '#D4D4D4')};
        &:after {
          background-color: #f6c447;
        }
      }
    }
  }
`;
