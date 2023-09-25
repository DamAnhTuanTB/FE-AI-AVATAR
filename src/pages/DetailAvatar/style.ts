import { breakpoints } from '@/config/breakpoints';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  @media screen and (max-width: ${breakpoints.lg}) {
  }
  .header-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0px;
    margin-bottom: 16px;
    @media screen and (max-width: ${breakpoints.lg}) {
      padding: 8px 16px;
      margin-bottom: 4px;
    }
    .back {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-primary, #18181b);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      @media screen and (max-width: ${breakpoints.lg}) {
        span {
          display: none;
        }
      }
    }
    .pack {
      color: var(--text-primary, #18181b);
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%; /* 28.8px */
      letter-spacing: -1px;
      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 16px;
      }
    }
    .save {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--primary-1, #f6c447);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 24px */
      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 14px;
      }
    }
  }
  .content-detail {
    flex: 1;
    border-radius: 8px;
    background: var(--neutral-100, #f5f5f5);
    overflow-y: auto;
    padding: 24px 16px;
    @media screen and (max-width: ${breakpoints.lg}) {
      background: transparent;
      border-radius: 0px;
      border-top: 1px solid #f5f5f5;
      padding: 8px 16px;
      padding-bottom: 20px;
    }
    .row {
      .title {
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .name-style {
          color: var(--text-primary, #18181b);
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%; /* 24px */
          @media screen and (max-width: ${breakpoints.lg}) {
            font-size: 14px;
          }
        }
        .view-all {
          cursor: pointer;
          color: var(--text-primary, #18181b);
          text-align: center;
          /* Body/Body 1.1/Medium */
          font-family: Outfit;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%; /* 16.8px */
          @media screen and (max-width: ${breakpoints.lg}) {
            font-size: 12px;
          }
        }
      }
      .list {
        display: grid;
        margin-bottom: 24px;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        @media screen and (max-width: ${breakpoints.lg}) {
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 12px;
        }
        .item-avatar {
          position: relative;
          border-radius: 12px;
          &::after {
            display: inline-block;
            content: '';
            padding-bottom: 100%;
          }
          img {
            border-radius: 12px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .bottom {
    display: none;
    @media screen and (max-width: ${breakpoints.lg}) {
      display: block;
      position: fixed;
      left: 0px;
      right: 0px;
      bottom: 0;
      background: white;
      z-index: 6;
    }
  }
`;
