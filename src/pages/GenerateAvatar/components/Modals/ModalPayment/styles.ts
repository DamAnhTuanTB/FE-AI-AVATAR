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
        .content-modal-payment {
          width: 257px;
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
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 150%; /* 18px */
                }
                .text-price {
                  display: flex;
                  flex-direction: column;
                  gap: 4px;
                  & > div:first-child {
                    color: var(--text-primary, #18181b);
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 150%; /* 18px */
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
        padding: 24px;
        padding-bottom: 104px;
        height: 90vh;
        position: relative;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: ${breakpoints.md}) {
          padding: 24px 16px;
        }
        .title-first {
          position: relative;
          .back {
            position: absolute;
            color: var(--text-primary, #18181b);
            font-family: Outfit;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            top: 50%;
            transform: translateY(-50%);
            @media screen and (max-width: ${breakpoints.md}) {
              top: 0px;
              transform: translateY(0);
              span {
                display: none;
              }
            }
          }
          .title {
            text-align: center;
            color: var(--secondary-black, #262626);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 120%;
            @media screen and (max-width: ${breakpoints.lg}) {
              color: var(--text-primary, #18181b);
              text-align: center;
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 150%;
            }
          }
          .description {
            color: var(--text-secondary, #737373);
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            margin-bottom: 16px;
            margin-top: 8px;
            @media screen and (max-width: ${breakpoints.lg}) {
              color: var(--grey, #737373);
              margin-bottom: 12px;
            }
          }
        }
        .gender {
          width: 190px;
          border-radius: 100px;
          border: 1px solid var(--primary-1, #f6c447);
          height: 37px;
          margin: auto;
          display: flex;
          div {
            color: var(--text-primary, #18181b);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 21px */
            display: inline-block;
            padding: 7.5px 24px;
            border-radius: 100px;
            cursor: pointer;
            flex: 1;
          }
          .active {
            background: var(--primary-1, #f6c447);
          }
          margin-bottom: 16px;
        }
        .parent-list-styles {
          flex: 1;
          overflow-y: auto;
          padding-right: 5px;
          .list-styles {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            padding-bottom: 56px;
            @media screen and (min-width: ${breakpoints.lg}) {
              grid-template-columns: repeat(6, 1fr);
              gap: 20px;
              padding-bottom: 0px;
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
              .skeleton-image {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 12px;
                span {
                  background: #ebebeb;
                }
              }
              .skeleton-text {
                display: block;
                position: absolute;
                bottom: 15px;
                left: 9px;
                width: calc(100% - 18px);
                border-radius: 6px;
                span {
                  background: #d9d9d9;
                }
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
        }

        .bottom {
          display: flex;
          justify-content: center;
          background-color: white;
          padding-top: 24px;
          padding-bottom: 32px;
          position: absolute;
          bottom: 0;
          left: 16px;
          right: 23px;
          /* width: 100%; */
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          @media screen and (max-width: ${breakpoints.md}) {
            background-color: transparent !important;
            background: transparent !important;
            padding-bottom: 18px;
          }
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
            object-fit: cover;
            max-height: 60vh;
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
