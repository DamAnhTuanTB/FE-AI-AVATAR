import { breakpoints } from '@/config/breakpoints';
import { styled } from 'styled-components';

export const WrapperPC = styled.div`
  display: flex;
  gap: 20px;
  height: calc(100% - 111px);
  .upload {
    height: 100%;
    overflow-y: auto;
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 30px;
    border-radius: 8px;
    background: var(--neutral-100, #f5f5f5);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    .child-1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      .title {
        color: var(--secondary-black, #262626);
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 28.8px */
        letter-spacing: -1px;
      }
      .big-upload {
        position: relative;
        width: 379px;
        height: 360px;
        border-radius: 12px;
        border: 1px dashed var(--secondary-disable, #a3a3a3);
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .desc-upload {
          text-align: center;
          color: var(--text-secondary, #737373);
          text-align: center;
          /* Body/Body 2/Regular */
          font-family: Outfit;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 18px */
        }
        img {
          width: 104px;
        }
        div.upload-title {
          margin-top: 12px;
          margin-bottom: 8px;
          color: var(--secondary-black, #262626);
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 21px */
        }

        .upload-support {
          color: var(--text-secondary, #737373);
          text-align: center;

          /* Body/Body 2/Regular */
          font-family: Outfit;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 18px */
        }
        .big-input-upload {
          cursor: pointer;
          position: absolute;
          opacity: 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .content-upload {
        width: 100%;
        flex: 1;
        .list-images {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
          @media screen and (max-width: 1350px) {
            grid-template-columns: repeat(4, 1fr);
          }
          @media screen and (max-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
          }
          .parent-image {
            position: relative;
            border-radius: 12px;
            &::after {
              content: '';
              display: inline-block;
              padding-bottom: 100%;
            }
            .image {
              width: 100%;
              position: absolute;
              height: 100%;
              object-fit: cover;
              border-radius: 12px;
            }
            .icon-delete {
              z-index: 12;
              cursor: pointer;
              width: 24px;
              position: absolute;
              top: 0;
              right: 0;
              transform: translateX(50%) translateY(-50%);
            }
            .item-error {
              border-radius: 12px;
              position: absolute;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.7);
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              gap: 5px;
              color: var(--status-alert, #ef4444);
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%; /* 18px */
              text-align: center;
              z-index: 11;
              img {
                margin-top: 22px;
              }
              div {
                height: 35px;
              }
            }
            .icon-crop {
              cursor: pointer;
              position: absolute;
              width: 24px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: rgba(0, 0, 0, 0.1);
              bottom: 8px;
              left: 8px;
              border-radius: 4px;
              z-index: 10;
            }
          }
          .upload-image {
            position: relative;
            & > div {
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 12px;
              border: 1px dashed var(--secondary-disable, #a3a3a3);
              background: #fff;
              flex-direction: column;
              gap: 14px;
              position: absolute;
              img {
                margin-top: 20px;
                width: 84px;
                @media screen and (max-width: 1600px) {
                  margin-top: 0px;
                }
              }
              div {
                color: var(--secondary-black, #262626);
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%; /* 21px */
              }
            }
            input {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              cursor: pointer;
            }
          }
          .disable {
            opacity: 0.4;
            div {
              cursor: not-allowed;
            }
          }
        }
      }
    }

    .child-2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      .tip {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--secondary-black, #262626);
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 24px */
        /* justify-self: flex-start; */
        justify-self: flex-end;
      }
      .button-upload {
        width: 212px;
        height: 48px;
        border-radius: 24px;
        background: var(--primary-1, #f6c447);
        color: var(--text-primary, #18181b);
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 21px */
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
        &:hover {
          background: #f3b612;
        }
      }
    }
  }
  .input-upload {
    display: none;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px 16px;
  .top-upload {
    .title-top-upload {
      color: var(--secondary-black, #262626);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      @media screen and (max-width: ${breakpoints.md}) {
        margin-bottom: 8px;
      }
    }
    .des-top-upload {
      color: var(--text-secondary, #737373);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
      margin: 8px 0px;
    }
    .btn-top-upload {
      padding: 24px 0;
      margin-bottom: 24px;
      cursor: pointer;
      border-radius: 12px;
      border: 1px dashed var(--secondary-disable, #a3a3a3);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 57px;
      }
      div.upload-title {
        margin-top: 12px;
        margin-bottom: 8px;
        color: var(--secondary-black, #262626);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
      }

      .upload-support {
        color: var(--text-secondary, #737373);
        text-align: center;

        /* Body/Body 2/Regular */
        font-family: Outfit;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 18px */
      }
    }
  }
  .input-upload {
    display: none;
  }
  .title-list-image {
    & > div:first-child {
      color: var(--text-primary, #18181b);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 24px */
      margin-bottom: 8px;
    }
    & > div:last-child {
      color: var(--text-secondary, #737373);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
      margin-bottom: 8px;
    }
  }
  .list-images {
    display: grid;
    /* padding-bottom: 40px; */
    margin-bottom: 24px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    .parent-image {
      position: relative;
      border-radius: 4px;
      &::after {
        content: '';
        display: inline-block;
        padding-bottom: 100%;
      }
      .image {
        width: 100%;
        position: absolute;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
      .icon-delete {
        z-index: 12;
        cursor: pointer;
        width: 16px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(40%) translateY(-30%);
      }
      .item-error {
        border-radius: 4px;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        color: var(--status-alert, #ef4444);
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 18px */
        text-align: center;
        z-index: 11;
        img {
          margin-top: 22px;
        }
        div {
          height: 35px;
        }
      }
      .icon-crop {
        cursor: pointer;
        position: absolute;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.1);
        bottom: 4px;
        left: 4px;
        border-radius: 4px;
        z-index: 10;
      }
    }
    .upload-image {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--neutral-200, #e5e5e5);
      border: 1px dashed var(--neutral-300, #d4d4d4);
      img {
        width: 40px;
      }
    }
    .disable {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
  .bottom {
    padding: 10px 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: white;
    z-index: 6;
  }
`;

export const LoadingWrapper = styled.div`
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  & > div {
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.8);
    width: 122px;
    height: 125px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    div {
      color: var(--secondary-white, #fff);
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 18px */
    }
  }
`;
