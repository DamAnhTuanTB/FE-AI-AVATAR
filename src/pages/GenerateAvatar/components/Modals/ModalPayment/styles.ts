import { breakpoints } from '@/config/breakpoints';
import { Modal } from 'antd';
import { styled } from 'styled-components';

export const Wrapper = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
    .ant-modal-body {
      padding: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-close {
        width: 24px;
        position: absolute;
        top: 0px;
        right: 0px;
        transform: translateX(50%) translateY(-50%);
        @media screen and (max-width: ${breakpoints.md}) {
          right: 2px;
        }
      }
      .modal-payment {
        padding: 24px;
        width: 100%;
        display: flex;
        gap: 24px;
        @media screen and (max-width: ${breakpoints.md}) {
          flex-direction: column;
        }

        .most-popular {
          position: absolute;
          top: -12px;
          left: -9px;
        }
        .content-modal-payment {
          width: 281px;
          @media screen and (max-width: ${breakpoints.md}) {
            width: 100%;
          }
          .title {
            color: var(--text-primary, #18181b);
            font-family: Outfit;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 24px */
            margin-bottom: 24px;
            @media screen and (max-width: ${breakpoints.md}) {
              margin-bottom: 16px;
            }
          }
          .list-prices {
            display: flex;
            flex-direction: column;
            gap: 16px;
            @media screen and (max-width: ${breakpoints.md}) {
              margin-bottom: 12px;
            }
            .item-price {
              cursor: pointer;
              width: 100%;
              display: flex;
              padding: 12px;
              gap: 8px;
              border-radius: 12px;
              border: 1px solid var(--neutral-200, #e5e5e5);
              align-items: center;
              position: relative;
              .best-offer {
                width: 52px;
                position: absolute;
                top: -10px;
                left: -8px;
              }
              .not-check {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                border: 1px solid #c4c4c4;
              }
              .text {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .display-name {
                  color: var(--text-primary, #18181b);
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 120%; /* 18px */
                }
                .text-price {
                  display: flex;
                  flex-direction: column;
                  gap: 4px;
                  & > div:first-child {
                    color: var(--text-primary, #18181b);
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 120%; /* 18px */
                    text-align: right;
                  }
                  & > div:last-child {
                    color: var(--text-secondary, #737373);
                    font-size: 10px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 120%; /* 12px */
                  }
                }
              }
            }
            .price-active {
              border: 1px solid var(--primary-1, #f6c447);
            }
            .icon-check {
              width: 16px;
            }
          }
        }
        .info {
          flex: 1;
          padding: 24px 16px;
          border-radius: 24px;
          background: #fef9ed;
          box-shadow: 0px 4px 19px 0px #fffbf2;
          .name-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
            .name {
              font-family: Outfit;
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
              line-height: 150%; /* 30px */
              img {
                position: relative;
                top: -10px;
              }
            }
            .price {
              font-family: Rubik;
              font-size: 24px;
              font-style: normal;
              font-weight: 600;
              line-height: 150%; /* 36px */
            }
          }
          .here {
            color: var(--text-primary, #18181b);
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 18px */
            margin-bottom: 12px;
          }
          .item-info {
            color: var(--neutral-700, #404040);
            font-family: Outfit;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 18px */
            display: flex;
            justify-content: space-between;
            align-items: center;
            & > div:first-child {
              display: flex;
              gap: 8px;
              align-items: center;
            }
            .see-all {
              color: var(--secondary-black, #262626);
              text-decoration-line: underline;
              cursor: pointer;
            }
            margin-bottom: 12px;
          }
        }
        .last-item-info {
          margin-bottom: 20px;
        }
        .comment {
          margin-bottom: 20px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.6);
          padding: 8px;
          .row-1 {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            .first {
              display: flex;
              gap: 8px;
              align-items: center;
              .text {
                & > div:first-child {
                  color: var(--Primary, #1a1a1a);
                  font-family: Outfit;
                  font-size: 10px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 150%; /* 15px */
                }
                & > div:last-child {
                  color: #899098;
                  font-family: Outfit;
                  font-size: 8px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 150%; /* 12px */
                }
              }
            }
          }
          .row-2 {
            color: var(--text-secondary, #737373);
            font-family: Outfit;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 15px */
          }
        }
        /* .button {
          margin-top: -27px;
          width: 100%;
          display: flex;
          justify-content: center;
        } */
      }
    }
  }
`;
