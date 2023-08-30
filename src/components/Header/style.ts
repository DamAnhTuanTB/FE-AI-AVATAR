import { styled } from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  .title {
    color: var(--secondary-black, #262626);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    display: flex;
    align-items: center;
    span {
      margin-left: 8px;
    }
    .menu-header {
      width: 24px;
      cursor: pointer;
    }
    .star-header {
      transform: translateY(-5px);
    }
  }
  .text-navigate {
    color: var(--text-primary, #18181b);
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    cursor: pointer;
  }
`;
