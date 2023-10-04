import { styled } from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 16px;
  padding-top: 38px;
  padding-bottom: 21px;
  .content-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon-success {
      width: 323px;
    }
    .title-success {
      color: var(--text-primary, #18181b);
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 21px */
      margin-top: 12px;
      margin-bottom: 4px;
    }
    .description-success {
      text-align: center;
      color: var(--text-primary, #18181b);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 18px */
      div {
        font-weight: 600;
      }
    }
  }
  .group-button {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
