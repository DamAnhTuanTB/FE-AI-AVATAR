import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  background-color: white;
  & > div {
    flex: 1;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 8px; */
    .text {
      color: var(--neutral-400, #a3a3a3);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 14px */
      margin-top: 8px;
    }
    .active {
      color: var(--text-primary, #18181b);
    }
  }
  .horizontal {
    cursor: pointer;
    margin-top: 12px;
    width: 116px;
    height: 4px;
    border-radius: 4px 4px 0px 0px;
    background: var(--secondary-black, #262626);
  }
`;
