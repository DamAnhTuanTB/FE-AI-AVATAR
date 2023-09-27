import { breakpoints } from '@/config/breakpoints';
import { styled } from 'styled-components';
import { Avatar, Popover } from 'antd';

export const HeaderWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  @media screen and (max-width: ${breakpoints.lg}) {
    margin-bottom: 0px;
  }
  .sign-in {
    color: var(--secondary-black, #262626);

    /* Sub-headings/Sub-head 1/Medium */
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    cursor: pointer;
  }

  .avatar-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    .button {
      width: 147px;
      height: 37px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      color: var(--secondary-white, #fff);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 21px */
      border-radius: 100px;
      background: var(--secondary-black, #262626);
      img {
        width: 20px;
      }
      cursor: pointer;
      @media screen and (max-width: ${breakpoints.md}) {
        display: none;
      }
      transition: 0.3s;
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
