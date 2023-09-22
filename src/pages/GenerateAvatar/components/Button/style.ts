import { Button } from 'antd';
import { styled } from 'styled-components';

export const Wrapper: any = styled(Button)<{ isMobile: boolean }>`
  border-radius: 100px;
  color: var(--secondary-black, #18181b) !important;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: ${(props: any) =>
            props.isMobile ? `brightness(1)` : `brightness(0.8)`};
  }

  &:disabled {
    background: rgba(163, 163, 163, 0.3) !important;
    color: #A3A3A3 !important;
  }

  &:focus {
    background: ${(props: any) =>
            props.background ? '#f6c447' : 'transparent'};
    filter: brightness(1) !important;
  }
`;
