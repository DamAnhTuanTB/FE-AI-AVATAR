import { styled } from 'styled-components';

export const Wrapper = styled.div`
  overflow-x: hidden;
`;

export const HomepageContainer = styled.div`
  max-width: 1083px;
  margin: 0px auto;
`;

export const BannerWrapper = styled.div`
  background: linear-gradient(
    90deg,
    #8170ea 0%,
    #bd8ad2 29.52%,
    #d98e94 73.76%,
    #e18c84 100%
  );
  display: flex;
  width: 100vw;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const BannerContent = styled.p`
  margin: 0;
  color: #fff;
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 0px;
`;

export const BannerLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BannerLink = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  text-decoration-line: underline;
  margin-bottom: 0px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

export const SubTitle = styled.p`
  margin: 0px;
  color: var(--primary-1, #f6c447);
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;

export const Title = styled.p`
  margin: 0px;
  color: var(--text-primary, #18181b);
  text-align: center;
  font-family: Outfit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

export const Description = styled.p`
  margin: 0px;
  color: var(--text-secondary, #737373);
  text-align: center;
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
