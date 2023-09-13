import { styled } from 'styled-components';

export const Wrapper = styled.div`
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
      width: 769px;
      background: #fff;
      color: var(--text-primary, #18181b);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      letter-spacing: -1px;
      padding: 20px 24px;
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
