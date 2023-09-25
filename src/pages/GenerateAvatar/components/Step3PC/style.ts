import { styled } from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100% - 111px);
  border-radius: 8px;
  margin-bottom: 40px;
  background: var(--neutral-100, #f5f5f5);
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  .title {
    text-align: center;
    color: var(--secondary-black, #262626);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 28.8px */
    letter-spacing: -1px;
  }
  .description {
    color: var(--text-secondary, #737373);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    margin-top: 10px;
    margin-bottom: 40px;
    text-align: center;
  }
  .parent-list-styles {
    flex: 1;
    overflow-y: auto;
    padding-right: 10px;
  }
  .list-styles {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 18px;
    .item-style {
      position: relative;
      border-radius: 12px;
      cursor: pointer;
      overflow: hidden;
      border: 2px solid transparent;
      &::after {
        content: '';
        display: inline-block;
        padding-bottom: 77%;
      }
      .image-style {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
        /* border: 2px solid transparent; */
      }
      .name-style {
        white-space: nowrap;
        width: 100%;
        bottom: 0;
        position: absolute;
        text-align: center;
        color: var(--gray-scale-white, #fff);
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 14px */
        padding-top: 13px;
        padding-bottom: 13px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
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
      /* border: 2px solid #f6c447; */
      img {
        border: 2px solid #f6c447;
      }
      .name-style {
        border: 2px solid #f6c447;
        border-top: none;
      }
      /* img {
        transform: scale(1.01);
      } */
    }
  }
  .btn-generate {
    display: flex;
    justify-content: center;
    padding: 22px 0px;
  }
`;
