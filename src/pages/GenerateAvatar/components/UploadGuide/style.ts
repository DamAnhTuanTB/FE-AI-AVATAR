import { styled } from 'styled-components';

export const Wrapper = styled.div`
  .title {
    color: var(--secondary-black, #262626);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
  }
  .section {
    margin-top: 13.5px;
    .section-title {
      color: var(--text-primary, #18181b);
      font-size: 14px;
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
    margin-bottom: 12px;
  }
`;
