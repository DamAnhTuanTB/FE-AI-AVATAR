import { styled } from 'styled-components';

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
      margin-bottom: 24px;
      cursor: pointer;
      height: 140px;
      border-radius: 12px;
      border: 1px dashed var(--secondary-disable, #a3a3a3);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      img {
        width: 57px;
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
      margin-bottom: 16px;
    }
  }
  .list-images {
    display: grid;
    padding-bottom: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;
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
        z-index: 5;
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
        img {
          margin-top: 22px;
        }
        div {
          height: 35px;
        }
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
    padding: 0px 16px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 10px;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0;
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
