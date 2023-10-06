import { styled } from 'styled-components';

export const WrapperPC = styled.div`
  height: calc(100% - 111px);
  border-radius: 8px;
  margin-bottom: 40px;
  background: var(--neutral-100, #f5f5f5);
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  .text-gender {
    text-align: center;
    .title {
      color: var(--secondary-black, #262626);
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 28.8px */
      letter-spacing: -1px;
    }
    .description {
      color: var(--text-secondary, #737373);
      font-family: Outfit;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      margin-top: 10px;
    }
  }

  .list-gender {
    display: flex;
    flex-direction: column;
    gap: 24px;
    .gender {
      width: 789px;
      height: 64px;
      background: #fff;
      padding: 20px 24px;
      color: var(--text-primary, #18181b);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      letter-spacing: -1px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      border: 1px solid transparent;
    }
    .gender-active {
      border-radius: 12px;
      border: 1px solid var(--primary-1, #f6c447);
      background: rgba(246, 196, 71, 0.2);
      font-weight: 500;
    }
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  overflow: hidden;
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
    line-height: 150%; /* 21px */
    margin-bottom: 16px;
  }
  .gender {
    color: var(--text-primary, #18181b);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    padding: 12px;
    border-radius: 12px;
    border: 1px solid var(--secondary-stroke, #f5f5f5);
    /* box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.09); */
    margin-bottom: 9px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .gender-active {
    border-radius: 12px;
    border: 1px solid var(--primary-1, #f6c447);
    background: rgba(246, 196, 71, 0.2);
    font-weight: 500;
  }
  .bottom {
    padding: 10px 16px;
    flex-direction: column;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0;
    background: white;
  }
`;
