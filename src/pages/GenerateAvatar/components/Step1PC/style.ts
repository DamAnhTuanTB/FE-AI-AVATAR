import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  height: calc(100% - 111px);
  .upload {
    height: 100%;
    overflow-y: auto;
    padding-top: 40px;
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
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-direction: column;
        & > div:first-child {
          color: var(--secondary-black, #262626);
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 120%; /* 28.8px */
          letter-spacing: -1px;
        }
        & > div:last-child {
          color: var(--text-secondary, #737373);
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 24px */
        }
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
        gap: 14px;
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
        div {
          color: var(--secondary-black, #262626);
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 21px */
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
              z-index: 5;
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
              img {
                margin-top: 22px;
              }
              div {
                height: 35px;
              }
            }
          }
          .upload-image {
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
          }
          .disable {
            opacity: 0.4;
            cursor: not-allowed;
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
    }
  }
  .input-upload {
    display: none;
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
