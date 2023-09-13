import { Modal } from 'antd';
import { styled } from 'styled-components';

export const Wrapper = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
    .ant-modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;
      .icon-close {
        width: 25px;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%) translateY(-50%);
      }
      .modal-payment {
        width: 100%;
        .title {
          color: var(--text-primary, #18181b);
          font-size: 16px;
          font-weight: 600;
          line-height: 150%; /* 24px */
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          img {
            width: 24px;
            cursor: pointer;
          }
        }
        .description {
          color: var(--text-secondary, #737373);
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          margin-bottom: 30px;
        }
        .list-prices {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 50px;
          .item-price {
            width: 100%;
            display: flex;
            padding: 12px 24px;
            gap: 12px;
            border-radius: 12px;
            border: 1px solid var(--neutral-200, #e5e5e5);
            align-items: center;
            position: relative;
            .best-offer {
              width: 76px;
              position: absolute;
              top: -13px;
              left: -10px;
            }
            .not-check {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              border: 1px solid #c4c4c4;
            }
            .text-price {
              display: flex;
              flex-direction: column;
              gap: 4px;
              & > div:first-child {
                color: var(--text-primary, #18181b);
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 150%; /* 24px */
              }
              & > div:last-child {
                color: var(--text-secondary, #737373);
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%; /* 21px */
              }
            }
          }
          .price-active {
            border: 1px solid var(--primary-1, #f6c447);
            background: rgba(246, 196, 71, 0.1);
          }
          .icon-check {
            width: 24px;
          }
        }
      }
      .modal-press-email {
        width: 100%;
        .title-press-email {
          color: var(--text-primary, #18181b);
          font-size: 16px;
          font-weight: 600;
          line-height: 150%; /* 24px */
        }
        .des-press-email {
          color: var(--text-secondary, #737373);
          font-family: Outfit;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          margin-top: 8px;
          margin-bottom: 16px;
        }
        .title-email {
          color: var(--secondary-black, #262626);
          font-size: 14px;
          font-weight: 500;
          line-height: 150%; /* 21px */
        }
        .input-email {
          border: none;
          border-radius: 12px;
          background: var(--neutral-100, #f5f5f5);
          height: 49px;
          margin-top: 8px;
          margin-bottom: 24px;
          &::placeholder {
            color: var(--secondary-black, #262626);
            font-size: 14px;
            font-weight: 400;
            line-height: 150%; /* 21px */
          }
          &:focus {
            box-shadow: none;
          }
        }
      }
    }
  }
`;
