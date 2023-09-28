import { styled } from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: 12px 16px;
  padding-bottom: 65px;
  overflow-y: auto;
  .title {
    color: var(--text-primary, #18181b);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    margin-bottom: 8px;
  }
  .description {
    color: var(--text-secondary, #737373);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    margin-bottom: 16px;
  }
  .count-select {
    color: var(--secondary-black, #262626);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    & > div:last-child {
      cursor: pointer;
    }
  }
  .list-styles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    .item-style {
      position: relative;
      border-radius: 12px;
      cursor: pointer;
      overflow: hidden;
      filter: brightness(0.5);
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
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 14px */
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        background: linear-gradient(
          180deg,
          rgba(9, 9, 23, 0) 0%,
          rgba(9, 9, 23, 0.3) 100%
        );
        -webkit-backdrop-filter: blur(9px);
        backdrop-filter: blur(9px);
      }
      .order-number {
        position: absolute;
        top: 12px;
        left: 12px;
        border-radius: 8px;
        border: 2px solid var(--secondary-white, #fff);
        background: rgba(54, 54, 54, 0.5);
        width: 24px;
        height: 24px;
      }
    }
    .style-active {
      filter: brightness(1);
      img {
        border: 3px solid #f6c447;
      }
      .name-style {
        border: 3px solid #f6c447;
        border-top: none;
      }
      .order-number {
        background: var(--primary-1, #f6c447);
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
  .bottom {
    padding: 10px 16px;
    flex-direction: column;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0;
    background: transparent;
  }
`;
