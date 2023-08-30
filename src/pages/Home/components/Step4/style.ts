import { styled } from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px 16px;
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
    line-height: 150%;
    margin-bottom: 30px;
  }
  .list-prices {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .item-price {
      width: 100%;
      display: flex;
      padding: 12px 24px;
      gap: 12px;
      border-radius: 12px;
      border: 1px solid var(--neutral-200, #e5e5e5);
      align-items: center;
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
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
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
