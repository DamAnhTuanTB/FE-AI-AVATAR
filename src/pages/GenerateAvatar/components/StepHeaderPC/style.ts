import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  .back {
    position: absolute;
    left: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary, #18181b);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
  }
  .list-steps {
    display: flex;
    gap: 24px;
    .item-step {
      cursor: not-allowed;
      width: 195px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      border: 1.5px solid var(--neutral-300, #d4d4d4);
      color: var(--text-secondary, #737373);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 21px */
      @media screen and (max-width: 1300px) {
        width: 160px;
      }
    }
    .item-step-active {
      color: white;
      font-weight: 600;
      background: var(--secondary-black, #262626);
      border: none;
    }
  }
  .view-avatar {
    cursor: pointer;
    color: var(--text-primary, #18181b);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
