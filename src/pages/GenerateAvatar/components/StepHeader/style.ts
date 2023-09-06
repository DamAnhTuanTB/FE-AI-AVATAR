import { styled } from 'styled-components';

export const Wrapper = styled.div`
  color: var(--text-primary, #18181b);
  text-align: center;
  font-family: Montserrat;
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
