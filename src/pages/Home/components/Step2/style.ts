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
    font-family: Montserrat;
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
    font-weight: 500;
    line-height: 150%; /* 21px */
    padding: 12px;
    border-radius: 12px;
    border: 1px solid var(--secondary-stroke, #f5f5f5);
    /* box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.09); */
    margin-bottom: 9px;
  }
  .gender-active {
    border-radius: 12px;
    border: 1px solid var(--primary-1, #f6c447);
    background: rgba(246, 196, 71, 0.2);
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
