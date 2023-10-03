import { breakpoints } from '@/config/breakpoints';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  @media screen and (max-width: ${breakpoints.lg}) {
    padding-bottom: 80px;
  }
  .header-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0px;
    margin-bottom: 16px;
    @media screen and (max-width: ${breakpoints.lg}) {
      padding: 8px 16px;
      margin-bottom: 4px;
    }
    .back {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-primary, #18181b);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      @media screen and (max-width: ${breakpoints.lg}) {
        span {
          display: none;
        }
      }
    }
    .pack {
      color: var(--text-primary, #18181b);
      font-family: Outfit;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      letter-spacing: -1px;
      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
      }
    }
    .save {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--primary-1, #f6c447);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 24px */
      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 14px;
        span {
          display: none;
        }
      }
    }
  }
  .content-detail {
    flex: 1;
    border-radius: 8px;
    background: var(--neutral-100, #f5f5f5);
    overflow-y: auto;
    padding: 24px 16px;
    @media screen and (max-width: ${breakpoints.lg}) {
      background: transparent;
      border-radius: 0px;
      border-top: 1px solid #f5f5f5;
      padding: 8px 16px;
      padding-bottom: 20px;
    }

    .title-origin-photo {
      color: var(--text-primary, #18181b);
      margin-bottom: 12px;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 14px;
        margin-bottom: 8px;
      }
      & > span:last-child {
        color: var(--text-primary, #18181b);
        text-align: center;
        font-family: Outfit;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
        cursor: pointer;
        @media screen and (max-width: ${breakpoints.lg}) {
          font-size: 14px;
        }
      }
    }
    .list-origin-photo {
      .item-origin {
        width: 278px !important;
        height: 278px !important;
        margin-right: 20px;
      }
      img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        border-radius: 12px;
      }
    }
    .generated-avatars {
      .title-origin-photo {
        margin-top: 24px;
        @media screen and (max-width: ${breakpoints.lg}) {
          margin-top: 32px;
        }
      }
      .list-generated {
        .item-child {
          cursor: pointer;
          pointer-events: all !important;
          margin-right: 20px;
          .item-generated {
            width: 278px !important;
            display: flex !important;
            border-radius: 10px;
            overflow: hidden;
            .col-1 {
              flex: 2;
              img {
                width: 100%;
                border: 1.5px solid #fff;
              }
            }
            .col-2 {
              flex: 1;
              display: flex;
              flex-direction: column;
              img {
                width: 100%;
                border: 1.5px solid #fff;
                border-left: none;
              }
            }
          }
          .name-style {
            color: var(--text-primary, #18181b);
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 24px */
            margin-top: 12px;
            margin-bottom: 4px;
            @media screen and (max-width: ${breakpoints.lg}) {
              font-size: 14px;
              font-weight: 500;
            }
          }
          .number-image {
            color: var(--text-secondary, #737373);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 21px */
            @media screen and (max-width: ${breakpoints.lg}) {
              font-size: 12px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
  .bottom {
    display: none;
    @media screen and (max-width: ${breakpoints.lg}) {
      display: block;
      position: fixed;
      left: 0px;
      right: 0px;
      bottom: 0;
      background: white;
      z-index: 6;
    }
  }
`;

export const AvatarsSlider = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 0px;
  }
  .item-child {
    cursor: pointer;
    pointer-events: all !important;
    margin-right: 20px;
    .item-generated {
      width: 278px !important;
      display: flex !important;
      border-radius: 10px;
      overflow: hidden;

      .col-1 {
        flex: 2;
        img {
          width: 100%;
          border: 1.5px solid #fff;
        }
      }
      .col-2 {
        flex: 1;
        display: flex;
        flex-direction: column;
        img {
          width: 100%;
          border: 1.5px solid #fff;
        }
        & > img:last-child {
          border-bottom: none !important;
        }
      }
    }
    .name-style {
      color: var(--text-primary, #18181b);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 24px */
      margin-top: 12px;
      margin-bottom: 4px;
      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 14px;
        font-weight: 500;
      }
    }
    .number-image {
      color: var(--text-secondary, #737373);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
`;
