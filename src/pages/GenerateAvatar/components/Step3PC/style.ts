import { styled } from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100% - 111px);
  border-radius: 8px;
  margin-bottom: 40px;
  background: var(--neutral-100, #f5f5f5);
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
    color: var(--secondary-black, #262626);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 28.8px */
    letter-spacing: -1px;
  }

  .description {
    color: var(--text-secondary, #737373);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    margin-top: 8px;
    margin-bottom: 20px;
    text-align: center;
  }

  .count-number {
    color: var(--secondary-black, #262626);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;

    .deselect-all-button {
      border: none;
      outline: 0;
      background: transparent;
      padding-right: 20px;
      cursor: pointer;
    }

    .deselect-all-button-disabled {
      background: transparent;
      padding-right: 20px;
      color: #737373;
      cursor: not-allowed;
    }
  }

  .parent-list-styles {
    flex: 1;
    overflow-y: auto;
    padding-right: 10px;
  }

  .list-styles {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;

    .item-style {
      position: relative;
      border-radius: 12px;
      cursor: pointer;
      overflow: hidden;
      /* border: 4px solid transparent; */
      //filter: brightness(0.5);

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
        /* border: 4px solid transparent; */
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
        font-weight: 500;
        line-height: 100%; /* 14px */
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        background: linear-gradient(180deg,
        rgba(9, 9, 23, 0) 0%,
        rgba(9, 9, 23, 0.3) 100%);
        -webkit-backdrop-filter: blur(9px);
        backdrop-filter: blur(9px);
      }

      .order-number {
        position: absolute;
        top: 16px;
        left: 16px;
        border-radius: 12px;
        border: 2.5px solid var(--secondary-white, #fff);
        background: rgba(32, 32, 32, 0.5);
        width: 32px;
        height: 32px;
      }

      /* .checkbox {
        position: absolute;
        top: 12px;
        left: 12px;

        input {
          width: 24px;
          height: 24px;
        }
        .ant-checkbox-inner {
          width: 24px;
          height: 24px;
          border: none;
          background: transparent;
          border-radius: 4px;
          border: 1.5px solid var(--secondary-white, #fff);
        }
        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #f6c447;
          border: none;
        }
        .ant-checkbox-checked:after {
          border: none;
        }
        .ant-checkbox-checked .ant-checkbox-inner:after {
          margin-left: 2.5px;
        }
      } */
    }

    .style-deactive {
      filter: brightness(0.5);
    }
    .style-active {
      filter: brightness(1);
      /* border: 2px solid #f6c447; */

      img {
        border: 4px solid #f6c447;
      }

      .name-style {
        border: 4px solid #f6c447;
        border-top: none;
      }

      .order-number {
        background: #f6c447;
        border: none;
        color: var(--secondary-black, #262626);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* img {
        transform: scale(1.01);
      } */
    }
  }

  .btn-generate {
    display: flex;
    justify-content: center;
    padding: 22px 0px;
  }
`;
