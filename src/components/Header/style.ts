import { breakpoints } from '@/config/breakpoints';
import { styled } from 'styled-components';

export const HeaderWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    cursor: pointer;
    color: var(--text-primary, #18181b);
    text-align: center;
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
  }
  .my-avatar {
    display: flex;
    align-items: center;
    gap: 12px;
    .btn-view {
      border: none;
      height: 40px;
      width: 226px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      background: var(--primary-1, #f6c447);
      color: var(--text-primary, #18181b);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
  @media screen and (max-width: ${breakpoints.lg}) {
    padding: 8px 16px;
    /* margin-bottom: 4px; */
    img {
      width: 110px;
    }
  }
`;
