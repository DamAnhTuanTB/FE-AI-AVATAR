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
        width: 25px;
        position: absolute;
        right: 4px;
        top: 5px;
        transform: translateX(50%) translateY(-50%);
      }
      .modal-payment {
        padding: 24px;
        width: 100%;
        .content-modal-payment {
          display: flex;
          gap: 12px;
          .text {
            flex: 1;
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
                cursor: pointer;
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
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 600;
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
          .image-payment {
            transform: translateY(-22px);
          }
        }
        .button {
          margin-top: -27px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
      .modal-press-email {
        padding: 24px;
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
          color: black;
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
      .modal-preview-style {
        width: 100%;
        padding: 24px 16px;
        padding-bottom: 76px;
        height: 90vh;
        position: relative;
        display: flex;
        flex-direction: column;
        .title {
          text-align: center;
          color: var(--secondary-black, #262626);
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 120%; /* 28.8px */
          @media screen and (max-width: ${breakpoints.lg}) {
            color: var(--text-primary, #18181b);
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 24px */
          }
        }
        .description {
          color: var(--text-secondary, #737373);
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 21px */
          margin-bottom: 40px;
          margin-top: 10px;
          @media screen and (max-width: ${breakpoints.lg}) {
            color: var(--grey, #828282);
            margin-top: 8px;
            margin-bottom: 16px;
          }
        }
        .parent-list-styles {
          flex: 1;
          overflow-y: auto;
          padding-right: 5px;
        }
        .list-styles {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          @media screen and (min-width: ${breakpoints.lg}) {
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
          }
          .item-style {
            position: relative;
            border-radius: 12px;
            cursor: not-allowed;
            overflow: hidden;
            &::after {
              content: '';
              display: inline-block;
              padding-bottom: 100%;
            }
            .image-style {
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 12px;
            }
            .name-style {
              white-space: nowrap;
              width: 100%;
              bottom: 0;
              position: absolute;
              text-align: center;
              color: var(--gray-scale-white, #fff);
              text-align: center;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 100%; /* 14px */
              border-radius: 0px 0px 4px 4px;
              background: linear-gradient(
                180deg,
                rgba(9, 9, 23, 0) 0%,
                rgba(9, 9, 23, 0.3) 100%
              );
              -webkit-backdrop-filter: blur(9px);
              backdrop-filter: blur(9px);
              padding: 12px 0px;
              @media screen and (max-width: ${breakpoints.md}) {
                padding: 7px 0px;
                font-weight: 600;
                font-size: 12px;
              }
            }
          }
        }
        .bottom {
          display: flex;
          justify-content: center;
          background-color: white;
          padding: 16px 16px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
        }
      }
      .modal-view-avatar {
        padding: 16px 0px;
        width: 100%;
        .preview {
          color: var(--text-primary, #18181b);
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 24px */
          margin-bottom: 12px;
          text-align: center;
        }
        .content-avatar {
          width: 100%;
          background: #f0f0f0;
          position: relative;
          margin-bottom: 12px;
          .image-avatar {
            display: block;
            max-width: 512px;
            margin: auto;
            @media screen and (max-width: ${breakpoints.lg}) {
              width: 100%;
            }
          }
          .icon-prev {
            position: absolute;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            @media screen and (max-width: ${breakpoints.lg}) {
              left: 12px;
            }
          }
          .icon-next {
            position: absolute;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            @media screen and (max-width: ${breakpoints.lg}) {
              right: 12px;
            }
          }
        }
        .btn {
          width: 100%;
          display: flex;
          justify-content: center;
          @media screen and (max-width: ${breakpoints.lg}) {
            padding: 0px 16px;
          }

          .ant-btn {
            width: 146px;
            @media screen and (max-width: ${breakpoints.md}) {
              width: 100%;
            }
          }
        }
      }
      .modal-downloading {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 12px 24px;
        @media screen and (max-width: ${breakpoints.lg}) {
          gap: 8px;
        }
        img {
          width: 114px;
          @media screen and (max-width: ${breakpoints.lg}) {
            width: 75px;
          }
        }
        .text-download {
          color: var(--text-primary, #18181b);
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%; /* 21px */
          margin-bottom: 15px;
          @media screen and (max-width: ${breakpoints.lg}) {
            font-weight: 500;
            margin-bottom: 0px;
          }
        }
      }
    }
  }
`;
