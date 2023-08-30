import { Modal } from 'antd';
import { styled } from 'styled-components';

export const Wrapper = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
    .ant-modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 20px;
      .icon-close {
        width: 25px;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%) translateY(-50%);
      }
      .icon-success {
        width: 167px;
        margin-bottom: 12px;
      }
      .title-success {
        color: var(--text-primary, #18181b);
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 21px */
        margin-bottom: 4px;
      }
      .description-success {
        color: var(--text-primary, #18181b);
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 18px */
        margin-bottom: 20px;
        text-align: center;
      }
      .group-button {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }
  }
`;
