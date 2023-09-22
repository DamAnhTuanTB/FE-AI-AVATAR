import { breakpoints } from '@/config/breakpoints';
import styled from 'styled-components';
import DesktopBg from '@/assets/images/sale-page/bg.png';
import MobileBg from '@/assets/images/sale-page/bg-mobile.png';

export const Wrapper = styled.div`
  padding-top: 28px;
  /* height: 100vh;
  overflow-y: auto;
  overflow-x: hidden; */
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background: var(--neutral-50, #fafafa); */
  background: url(${DesktopBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: ${breakpoints.md}) {
    background: url(${MobileBg});
    padding-top: 32px;
  }
`;

export const HeaderFooterWrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  @media screen and (max-width: ${breakpoints.lg}) {
    overflow-x: hidden;
  }
`;

export const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  /* width: calc(100% - 350px); */
  position: relative;
  z-index: 1;
  border-radius: 8px;
  border: 1px solid var(--neutral-100, #f5f5f5);
  background: var(--secondary-white, #fff);
  width: 716px;
  padding: 24px 24px 40px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  /* flex: 1 0 auto; */
  @media screen and (max-width: ${breakpoints.lg}) {
    margin-right: 0px;
    padding: 24px 0px 0px;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    border: none;
    width: 100%;
    background: transparent;
  }
`;

export const PaymentWrapper = styled.div`
  width: 364px;

  height: max-content;
  /* flex: 1 0 auto; */
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1;
  @media screen and (max-width: ${breakpoints.lg}) {
    position: static;
    margin: auto;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 0 24px;
  }
`;

export const BeforeAfterImage = styled.img`
  width: 100%;
    @media screen and (max-width: ${breakpoints.md}) {
        padding: 0 24px;
      }
`;

export const Description = styled.p`
  margin: 0;
  color: var(--secondary-black, #262626);

  /* Sub-headings/Sub-head 1/Regular */
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export const ElipseDecorLeft = styled.div<{ index: number }>`
  width: 2066px;
  height: 2065px;
  flex-shrink: 0;
  border-radius: 2066px;
  background: rgba(228, 224, 254, 0.5);
  filter: blur(200px);
  position: absolute;
  /* bottom: -248px; */
  top: 1720px;
  left: -1350px;
  display: ${(props) => (props.index > 1 ? 'none' : 'block')};
  @media screen and (max-width: ${breakpoints.md}) {
    display: block;
    width: 557px;
    height: 556px;
    left: -310px;
    bottom: ${(props) => {
      switch (props.index) {
        case 1: {
          return '75%';
        }
        case 2: {
          return '50%';
        }
        case 3: {
          return '25%';
        }
        case 4: {
          return '0%';
        }
        default:
          return '0%';
      }
    }};
  }
`;

export const ElipseDecorRight = styled.div<{ index: number }>`
  width: 2066px;
  height: 2065px;
  flex-shrink: 0;
  border-radius: 2066px;
  background: rgba(253, 236, 235, 0.8);
  filter: blur(200px);
  position: absolute;
  /* bottom: -248px; */
  top: 1720px;
  right: -1850px;
  display: ${(props) => (props.index > 1 ? 'none' : 'block')};
  @media screen and (max-width: ${breakpoints.md}) {
    display: block;
    width: 557px;
    height: 556px;
    right: -310px;
    bottom: ${(props) => {
      switch (props.index) {
        case 1: {
          return '75%';
        }
        case 2: {
          return '50%';
        }
        case 3: {
          return '25%';
        }
        case 4: {
          return '0%';
        }
        default:
          return '0%';
      }
    }};
  }
`;
