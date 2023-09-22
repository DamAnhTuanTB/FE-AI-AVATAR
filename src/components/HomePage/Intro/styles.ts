import { breakpoints } from '@/config/breakpoints';
import { Description, HomepageContainer } from '@/pages/HomePage/styles';
import styled, { keyframes } from 'styled-components';

export const ContainerWrapper = styled(HomepageContainer)`
  @media screen and (max-width: ${breakpoints.md}) {
    padding: 0px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 120px;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 13px;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 71px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (max-width: ${breakpoints.md}) {
    margin-top: 40px;
    padding: 0 20px;
    p {
      text-align: start;
    }
  }
`;

export const IntroDescription = styled(Description)`
  margin-top: 16px;
  text-align: left;
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;

const GetstartedAnimated = keyframes`
  from{
    background-color: #f6c447;
  }
  to
  {
    background-color:rgba(246, 196, 71, 0.8)
    }
`;

export const GetStartedWrapper = styled.div`
  cursor: pointer;
  border-radius: 100px;
  background: var(--primary-1, #f6c447);
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: max-content;
  &:hover {
    animation: ${GetstartedAnimated} 0.5s;
    -webkit-animation-fill-mode: forwards;
  }
  p {
    margin: 0;
    color: var(--text-primary, #18181b);
    text-align: center;
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  svg {
    path {
      stroke: #18181b;
    }
  }
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ReviewersWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Reviewer = styled.img<{ first?: boolean }>`
  margin-left: ${(props) => (props.first ? '0px' : '-17px')};
  @media screen and (max-width: ${breakpoints.md}) {
    width: 42px;
    margin-left: ${(props) => (props.first ? '0px' : '-14px')};
  }
`;

export const ReviewsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RateWrapper = styled.div`
  display: flex;
  gap: 8px;
  p {
    margin: 0;
    color: var(--text-primary, #18181b);

    /* Body/Body 2/Semibold */
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 18px */
  }
`;

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  svg {
    width: 24px;
  }
`;

export const ReviewsCount = styled.p`
  margin: 0;
  color: var(--text-secondary, #737373);

  /* Sub-headings/Sub-head 2/Semibold */
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
`;

export const ScrollWrapper = styled.div`
  position: relative;
  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const ScrollAvatarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 17.73px;
  min-width: 450px;
  height: 614px;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 0px;
    border-radius: 12px !important;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background: #f5f5f5 !important;
    border-radius: 12px;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    min-width: auto;
    width: 100%;
  }
`;

export const AvatarsColItemWrapper = styled.div`
  position: relative;
`;

const ScrollLeftAnimated = keyframes`
  0% {
    top: 0%;
  }
  50% {
    top: -260%;
  }
  100% {
    top: 0%;
  }
`;
const ScrollLeftAnimatedMobile = keyframes`
  0% {
    top: 0%;
  }
  50% {
    top: -200%;
  }
  100% {
    top: 0%;
  }
`;
const ScrollRightAnimated = keyframes`
  0% {
    top: -260%;
  }
  50% {
    top: 00%;
  }
  100% {
    top: -260%;
  }
`;
const ScrollRightAnimatedMobile = keyframes`
  0% {
    top: -200%;
  }
  50% {
    top: 00%;
  }
  100% {
    top: -200%;
  }
`;

export const AvatarsColItem = styled.div<{ first: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 14.57px;
  width: 100%;
  animation: ${(props) =>
      props.first ? ScrollLeftAnimated : ScrollRightAnimated}
    40s linear infinite;
  @media screen and (max-width: ${breakpoints.md}) {
    animation: ${(props) =>
        props.first ? ScrollLeftAnimatedMobile : ScrollRightAnimatedMobile}
      40s linear infinite;
  }
`;

export const AvatarScroll = styled.img`
  width: 100%;
  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const Shadow = styled.img`
  position: absolute;
  width: 100%;
`;
