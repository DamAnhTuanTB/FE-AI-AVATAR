import { breakpoints } from '@/config/breakpoints';
import { HomepageContainer } from '@/pages/HomePage/styles';
import { Collapse } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled(HomepageContainer)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 76.5px;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
  width: 290px;
  flex: 1 0 auto;
`;

export const AnyQuestion = styled.p`
  color: var(--secondary-black, #262626);
  /* Sub-headings/Sub-head 1/Regular */
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin: 0;
`;

export const ContactMail = styled.a`
  color: var(--primary-1, #f6c447);

  /* Sub-headings/Sub-head 1/Medium */
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-left: 5px;
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CustomCollapsePanel = styled(Collapse.Panel)<{ first?: boolean }>`
  padding: 24px 0;
  border-top: ${(props) =>
    props.first ? 'none' : '1px solid var(--neutral-200, #e5e5e5)'};
  .ant-collapse-header {
    padding: 0px !important;
  }
  .ant-collapse-header-text {
    color: var(--secondary-black, #262626);

    /* Sub-headings/Sub-head 1/Medium */
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    padding-right: 55px;
  }
  .ant-collapse-content-box {
    padding: 12px 55px 0px 0px !important;
    p {
      color: var(--secondary-black, #262626);

      /* Body/Body 1/Regular */
      font-family: Outfit;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
      margin: 0;
    }
  }
  @media screen and (max-width: ${breakpoints.md}) {
    .ant-collapse-header-text {
      padding-right: 64px;
    }
  }
`;

export const ExpandIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 100px;
  background-color: #f6c447;
  display: flex !important;
  align-items: center;
  justify-content: center;
  right: 0px !important;
`;
