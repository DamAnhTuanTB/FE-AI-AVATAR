import { styled } from 'styled-components';
import { Modal } from 'antd';
import { breakpoints } from '@/config/breakpoints';

export const CustomModalWrapper = styled(Modal)`
  .ant-modal {
    @media screen and (max-width: ${breakpoints.sm}) {
      margin: 16px auto;
    }
  }

  .ant-modal-content {
    border-radius: 12px;
    height: 100%;
    position: relative;

    .ant-modal-body {
      height: 100%;
      padding: 32px 24px;
      border-radius: 12px;
      background: #fff;

      @media screen and (max-width: ${breakpoints.sm}) {
        padding: 48px 24px;
      }

      .close-icon-wrapper {
        position: absolute;
        top: -10px;
        right: -12px;
        cursor: pointer;

        @media screen and (max-width: ${breakpoints.sm}) {
          right: -7px;
        }
      }

      .modal-wrapper {
        height: calc(100% - 32px - 32px);
        display: flex;
        gap: 24px;
        align-items: center;

        @media screen and (max-width: ${breakpoints.lg}) {
          align-items: center;
          justify-content: center;
        }

        .ant-checkbox-wrapper:hover .ant-checkbox:after,
        .ant-checkbox:hover:after {
          border: none;
        }
        .ant-checkbox-input:focus + .ant-checkbox-inner {
          border-color: #e5e5e5;
        }
        .ant-checkbox:hover .ant-checkbox-inner {
          border-color: #f6c447;
        }

        .children-wrapper {
          max-width: 400px;
          width: 100%;
        }

        .background-wrapper {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          @media screen and (max-width: ${breakpoints.lg}) {
            display: none;
          }

          .background {
            max-width: 469px;
            min-width: 469px;
            max-height: 549px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .small-background {
            max-height: 300px !important;
            /* overflow: hidden; */
          }
        }
      }

      .payment-modal-wrapper {
        flex-direction: row-reverse;
        .payment-success {
          flex: 1;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          .text-1 {
            color: var(--text-primary, #18181b);
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 21px */
            margin-top: 12px;
            margin-bottom: 8px;
          }
          .text-2 {
            color: var(--text-primary, #18181b);
            text-align: center;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 18px */
          }
        }
      }
    }
  }
`;
