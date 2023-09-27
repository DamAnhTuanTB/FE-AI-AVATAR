import { breakpoints } from '@/config/breakpoints';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  @media screen and (max-width: ${breakpoints.lg}) {
    padding-bottom: 160px;
  }
  .content-list-avatar {
    background: var(--neutral-100, #f5f5f5);
    padding: 16px;
    height: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: ${breakpoints.lg}) {
      background: transparent;
      padding: 0px;
    }
    .title-my-generate {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      align-items: center;
      @media screen and (max-width: ${breakpoints.lg}) {
        padding: 12px 16px;
        margin-bottom: 0px;
        border-bottom: 1px solid var(--neutral-200, #e5e5e5);
      }
      .text {
        color: var(--text-primary, #18181b);
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -1px;
        @media screen and (max-width: ${breakpoints.lg}) {
          color: var(--text-primary, #18181b);
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
        }
      }
      .btn-create-new {
        width: 235px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        color: var(--text-primary, #18181b);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
        gap: 8px;
        border-radius: 100px;
        background: var(--primary-1, #f6c447);
        transition: 0.3s;
        &:hover {
          filter: brightness(0.8);
        }
        @media screen and (max-width: ${breakpoints.lg}) {
          display: none;
        }
      }
    }
    .content-my-generate {
      flex: 1;
      overflow-y: auto;
      @media screen and (max-width: ${breakpoints.lg}) {
        padding: 12px 16px;
      }
      .no-avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        @media screen and (max-width: ${breakpoints.lg}) {
          justify-content: flex-start;
          padding-top: 46px;
        }
        .image-no-image {
          width: 360px;
          @media screen and (max-width: ${breakpoints.lg}) {
            width: 209px;
          }
        }
        .des {
          color: var(--text-secondary, #737373);
          text-align: center;
          font-family: Outfit;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          margin-top: 12px;
          margin-bottom: 64px;
          @media screen and (max-width: ${breakpoints.lg}) {
            max-width: 259px;
          }
        }
        .btn-create-new {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          width: 200px;
          height: 40px;
          border-radius: 24px;
          gap: 8px;
          background: var(--primary-1, #f6c447);
          color: var(--text-primary, #18181b);
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          img {
            width: 24px;
          }
          &:hover {
            filter: brightness(0.8);
          }
          @media screen and (max-width: ${breakpoints.lg}) {
            display: none;
          }
        }
      }
      .content-list-avatar {
        padding: 0px;
        padding-right: 8px;
        @media screen and (max-width: ${breakpoints.lg}) {
          padding-right: 0px;
        }
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        @media screen and (max-width: ${breakpoints.lg}) {
          grid-template-columns: repeat(2, 1fr);
          gap: 11px;
        }
        @media screen and (max-width: ${breakpoints.md}) {
          grid-template-columns: repeat(1, 1fr);
          gap: 11px;
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
            margin-bottom: 8px;
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
        .not-allow-avatar {
          cursor: not-allowed;
        }
      }
    }
  }

  .bottom {
    display: none;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0;
    background: white;
    z-index: 6;
    .btn-create-new-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      width: 200px;
      height: 40px;
      border-radius: 24px;
      gap: 8px;
      background: var(--primary-1, #f6c447);
      color: var(--text-primary, #18181b);
      font-family: Outfit;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      margin: auto;
    }
    @media screen and (max-width: ${breakpoints.lg}) {
      display: block;
      padding-top: 16px;
    }
  }
`;
