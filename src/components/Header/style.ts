import { breakpoints } from '@/config/breakpoints';
import { styled } from 'styled-components';
import {Avatar, Popover} from "antd";

export const HeaderWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
      padding: 8px 16px;
      height: 40px;
      border-radius: 100px;
      background: var(--primary-1, #F6C447);
      cursor: pointer;
      
      color: var(--text-primary, #18181B);
      /* Sub-headings/Sub-head 1/Medium */
      font-family: Outfit;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      
      @media screen and (max-width: ${breakpoints.md}) {
        display: none;
      }
    }
    
    .avatar-item {
      cursor: pointer;
      
      @media screen and (max-width: ${breakpoints.md}) {
        img {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.md}) {
    padding: 8px 16px;
    /* margin-bottom: 4px; */
    img {
      width: 110px;
    }
  }
`;

export const PopoverAvatarWrapper = styled(Popover)``


export const ContentPopoverWrapper = styled.div`
  .title {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;

    .infor {
      .name {
        color: var(--text-primary, #18181B);

        /* Sub-headings/Sub-head 2/Medium */
        font-family: Outfit;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
      }

      .email {
        color: var(--text-secondary, #737373);
        text-align: center;

        /* Body/Body 2/Regular */
        font-family: Outfit;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 18px */
      }
    }


  }

  .remaining-generated-count {
    color: var(--neutral-800, #262626);
    text-align: center;

    /* Body/Body 2/Regular */
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }

  .dash {
    margin: 12px 0;
    width: 100%;
    height: 1px;
    background: var(--neutral-200, #E5E5E5);
  }

  .sign-out-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
      color: var(--text-primary, #18181B);
      text-align: center;

      /* Sub-headings/Sub-head 2/Regular */
      font-family: Outfit;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
    }
  }
`
