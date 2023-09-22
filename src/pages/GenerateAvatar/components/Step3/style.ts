import { styled } from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: 12px 16px;
  padding-bottom: 65px;
  overflow-y: auto;
  .title {
    color: var(--text-primary, #18181b);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    margin-bottom: 8px;
  }
  .description {
    color: var(--text-secondary, #737373);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    margin-bottom: 16px;
  }
  .list-styles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    .item-style {
      position: relative;
      border-radius: 14px;
      cursor: pointer;
      overflow: hidden;
      &::after {
        content: '';
        display: inline-block;
        padding-bottom: 100%;
      }
      .image-style {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 14px;
      }
      .name-style {
        white-space: nowrap;
        width: 100%;
        bottom: 0;
        position: absolute;
        text-align: center;
        color: var(--gray-scale-white, #fff);
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 14px */
        padding-top: 13px;
        padding-bottom: 13px;
        border-radius: 0px 0px 4px 4px;
        background: linear-gradient(
          180deg,
          rgba(9, 9, 23, 0) 0%,
          rgba(9, 9, 23, 0.3) 100%
        );
        -webkit-backdrop-filter: blur(9px);
        backdrop-filter: blur(9px);
      }
    }
    .style-active {
      border: 2px solid var(--primary-1, #f6c447);
      img {
        transform: scale(1.01);
      }
    }
  }
  .bottom {
    padding: 10px 16px;
    flex-direction: column;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0;
    background: transparent;
  }
`;
