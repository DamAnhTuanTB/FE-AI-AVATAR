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
    /* justify-content: center;a */
  }
  .horizontal {
    cursor: pointer;
    margin-top: 8px;
    width: 116px;
    height: 4px;
    border-radius: 4px 4px 0px 0px;
    background: var(--secondary-black, #262626);
  }
`;
