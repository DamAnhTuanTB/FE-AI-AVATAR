import {styled} from "styled-components";
import {Modal} from "antd";

export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
    background: var(--neutral-50, #FAFAFA);
    padding: 16px 12px;

    .ant-modal-body {
      padding: 0;

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;

        .text {
          color: var(--secondary-black, #262626);

          /* Sub-headings/Sub-head 1/Semibold */
          font-family: Outfit;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%; /* 24px */
        }

        .icon {
          cursor: pointer;
          width: 20px;
          height: 20px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .title {
        margin-bottom: 8px;

        color: var(--text-secondary, #737373);
        /* Body/Body 1/Regular */
        font-family: Outfit;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
      }

      .button-wrapper {
        display: flex;
        justify-content: end;

        .button {
          height: 33px;
          border-radius: 12px;
          background: var(--primary-1, #F6C447);
          padding: 6px 24px;
          cursor: pointer;

          color: var(--text-primary, #18181B);
          text-align: center;

          /* Body/Body 1/Semibold */
          font-family: Outfit;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%; /* 21px */
        }
      }
    }
  }
`
