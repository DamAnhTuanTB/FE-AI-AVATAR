import { breakpoints } from '@/config/breakpoints';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 60px;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${breakpoints.lg}) {
    padding-top: 6px;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 0px;
  }
  .title-my-generate {
    color: var(--text-primary, #18181b);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -1px;
    margin-bottom: 27px;
    @media screen and (max-width: ${breakpoints.lg}) {
      color: var(--text-primary, #18181b);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      margin-bottom: 16px;
    }
  }
  .content-my-generate {
    flex: 1;
    border-radius: 8px;
    background: var(--neutral-100, #f5f5f5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: ${breakpoints.lg}) {
      background: transparent;
      justify-content: flex-start;
    }
    .no-avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      .image-no-image {
        width: 360px;
        margin-bottom: 12px;
        @media screen and (max-width: ${breakpoints.lg}) {
          width: 209px;
          margin-top: 38px;
        }
      }
      .des {
        color: var(--text-secondary, #737373);
        text-align: center;
        font-family: Outfit;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 16.8px */
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
        line-height: 150%; /* 21px */
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
    .list-avatar {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
      .parent-content-list-avatar {
        padding: 24px 16px;
        overflow-y: auto;
        height: 60vh;
        @media screen and (max-width: ${breakpoints.lg}) {
          padding: 0px;
          padding-right: 5px;
        }
        .content-list-avatar {
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
          /* .item-avatar {
            cursor: pointer;
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            .image-item-avatar {
              position: relative;
              width: 100%;
              &::after {
                display: inline-block;
                content: '';
                padding-bottom: 100%;
              }
              .main-image {
                border-radius: 12px;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
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
            .pack {
              text-align: center;
              margin-top: 16px;
              color: var(--text-primary, #18181b);
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 150%; 
              @media screen and (max-width: ${breakpoints.lg}) {
                margin-top: 8px;
                font-size: 14px;
              }
            }
          } */
          .not-allow-avatar {
            cursor: not-allowed;
          }
        }
      }
      .create-new-desktop {
        padding: 40px 0px;
        display: flex;
        justify-content: center;
        .btn-create-new-desktop {
          width: 200px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          img {
            width: 24px;
          }
          color: var(--text-primary, #18181b);
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 21px */
          border-radius: 24px;
          background: var(--primary-1, #f6c447);
          border: none;
          &:hover {
            filter: brightness(0.8);
          }
          @media screen and (max-width: ${breakpoints.lg}) {
            display: none;
          }
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
      line-height: 150%; /* 21px */
      margin: auto;
    }
    @media screen and (max-width: ${breakpoints.lg}) {
      display: block;
      padding-top: 16px;
    }
  }
`;
