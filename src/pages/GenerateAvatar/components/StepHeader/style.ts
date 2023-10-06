import { styled } from 'styled-components';

export const WrapperPC = styled.div`
  padding-bottom: 16px;
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
    gap: 16px;
    .item-step {
      gap: 8px;
      cursor: not-allowed;
      // width: 173px;
      // height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      border: 1.5px solid var(--neutral-300, #d4d4d4);
      color: var(--text-secondary, #737373);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      padding: 12px 24px;
      line-height: 150%; /* 21px */
      @media screen and (max-width: 1300px) {
        // width: 160px;
      }
      .number {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1.5px solid #d4d4d4;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--neutral-500, #d4d4d4);
        font-size: 14px;
        font-weight: 600;
        line-height: 150%; /* 21px */
      }
    }
    .item-step-active {
      color: white;
      font-weight: 600;
      background: var(--secondary-black, #262626);
      border: none;
      .number {
        color: #262626;
        background-color: white;
        border: none;
      }
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

export const Wrapper = styled.div`
  color: var(--text-primary, #18181b);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  padding: 12px 16px;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    left: 16px;
    cursor: pointer;
  }
`;
