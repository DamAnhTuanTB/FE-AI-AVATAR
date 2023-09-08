import { Button } from 'antd';
import { styled } from 'styled-components';

export const Wrapper: any = styled(Button)`
  border-radius: 100px;
  color: var(--secondary-black, #262626) !important;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(0.8);
  }
  &:disabled {
    background: #a3a3a3 !important;
    color: white !important;
  }
  &:focus {
    background: ${(props: any) =>
      props.background ? '#f6c447' : 'transparent'};
    filter: brightness(1) !important;
  }
`;
