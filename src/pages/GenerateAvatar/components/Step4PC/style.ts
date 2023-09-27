import { styled } from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100% - 111px);
  border-radius: 8px;
  margin-bottom: 40px;
  background: var(--neutral-100, #f5f5f5);
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  padding-top: 38px;
  padding-bottom: 21px;
  .content-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon-success {
      width: 400px;
    }
    .title-success {
      color: var(--text-primary, #18181b);
      text-align: center;
      font-family: Outfit;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      margin-top: 12px;
      margin-bottom: 4px;
    }
    .description-success {
      color: var(--text-primary, #18181b);
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
    }
  }
  .group-button {
    margin-top: 40px;
    display: flex;
    gap: 12px;
    justify-content: center;
  }
`;
