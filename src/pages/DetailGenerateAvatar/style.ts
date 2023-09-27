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
    margin-bottom: 16px;
    padding: 8px 0px;
    @media screen and (max-width: ${breakpoints.lg}) {
      padding: 0px 16px;
      margin-top: 4px;
      margin-bottom: 12px;
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
    .style {
      color: var(--text-primary, #18181b);
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
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
        span {
          display: none;
        }
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
      padding: 12px 16px;
      border-top: 1px solid #f5f5f5;
      margin-top: 4px;
      border-radius: 0px;
    }
    .list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;
      @media screen and (max-width: ${breakpoints.lg}) {
        grid-template-columns: repeat(3, 1fr);

        background: transparent;
      }
      @media screen and (max-width: ${breakpoints.md}) {
        grid-template-columns: repeat(1, 1fr);
        gap: 12px;
        background: transparent;
      }
      .parent-item-avatar {
        cursor: pointer;
        .item-avatar {
          display: flex;
          border-radius: 10px;
          overflow: hidden;
          border: 1.667px solid rgba(255, 255, 255, 0.6);
          position: relative;
          .col-1 {
            flex: 2;
            position: relative;
            border-right: 1.667px solid rgba(255, 255, 255, 0.6);
            &:after {
              content: '';
              display: block;
              padding-bottom: 100%;
            }
            img {
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: 50% 50%;
            }
          }
          .col-2 {
            flex: 1;
            display: flex;
            flex-direction: column;
            .col-21,
            .col-22 {
              width: 100%;
              position: relative;
              &:after {
                content: '';
                display: block;
                padding-bottom: 100%;
              }
              img {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 50%;
              }
            }
            .col-21 {
              border-left: 1.667px solid rgba(255, 255, 255, 0.6);
              border-bottom: 1.667px solid rgba(255, 255, 255, 0.6);
            }
            .col-22 {
              border-left: 1.667px solid rgba(255, 255, 255, 0.6);
              border-top: 1.667px solid rgba(255, 255, 255, 0.6);
            }
          }
          .second-image {
            border-radius: 12px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.4;
          }
        }
        .name-pack {
          color: var(--text-primary, #18181b);
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%;
          margin-top: 12px;
          margin-bottom: 4px;
          @media screen and (max-width: ${breakpoints.lg}) {
            font-size: 14px;
            font-weight: 500;
            margin-top: 8px;
            margin-bottom: 4px;
          }
        }
        .info-pack {
          color: var(--text-secondary, #737373);
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          display: flex;
          gap: 8px;
          @media screen and (max-width: ${breakpoints.lg}) {
            font-size: 12px;
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
