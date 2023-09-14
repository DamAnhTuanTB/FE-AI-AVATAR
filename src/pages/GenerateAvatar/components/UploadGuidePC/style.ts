import { styled } from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 8px;
  background: var(--neutral-100, #f5f5f5);
  padding: 40px 16px;
  width: 435px;
  overflow-y: auto;
  height: 100%;
  .title {
    color: var(--secondary-black, #262626);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 28.8px */
    letter-spacing: -1px;
  }
  .section {
    margin-top: 13.5px;
    .section-title {
      color: var(--text-primary, #18181b);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 21px */
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }
    .section-description {
      color: var(--text-secondary, #737373);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
      margin-bottom: 16px;
    }
    .section-images {
      display: flex;
      gap: 8px;
      div {
        flex: 1;
        img {
          width: 100%;
        }
      }
    }
  }
  .last-section {
    margin-top: 24px;
    margin-bottom: 74px;
  }
`;
