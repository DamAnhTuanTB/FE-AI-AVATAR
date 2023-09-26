import { breakpoints } from '@/config/breakpoints';
import { Popover } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.md}) {
    img {
      width: 100%;
    }
  }
`;

export const PopoverAvatarWrapper = styled(Popover)``;

export const ContentPopoverWrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;

    .infor {
      .name {
        color: var(--text-primary, #18181b);

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
    background: var(--neutral-200, #e5e5e5);
  }

  .sign-out-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
      color: var(--text-primary, #18181b);
      text-align: center;

      /* Sub-headings/Sub-head 2/Regular */
      font-family: Outfit;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
    }
  }
`;
