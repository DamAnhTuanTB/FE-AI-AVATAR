import { HomepageContainer, Title } from '@/pages/HomePage/styles';
import styled from 'styled-components';

export const Wrapper = styled(HomepageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TransformTitle = styled(Title)`
  text-align: center;
  margin: 24px 0 16px;
`;

export const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 60px;
`;

export const FeatureCard = styled.div`
  border-radius: 8px;
  background: var(--neutral-100, #f5f5f5);
  display: flex;
  padding: 0px 0px 40px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  img {
    width: 100%;
  }
`;

export const FeatureImageWrapper = styled.div`
  position: relative;
`;

export const AccessoryDigitalProfile = styled.img`
  width: 79.012px !important;
  height: 41.263px;
  position: absolute;
  bottom: -10px;
  right: 0;
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 24px;
`;

export const FeatureTitle = styled.div`
  display: flex;

  p {
    color: var(--text-primary, #18181b);
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 27px */
    margin-bottom: 0;
  }
`;

export const KeyTitle = styled.div`
  position: relative;
  margin-left: 5px;
  p {
    position: relative;
    z-index: 1;
  }
`;

export const KeyUnderline = styled.div`
  position: absolute;
  bottom: 2px;
  background: var(--primary-1, #f6c447);
  width: 100%;
  height: 9px;
`;

export const FeatureDescription = styled.p`
  color: var(--neutral-600, #525252);

  /* Body/Body 1/Regular */
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  margin: 0;
`;
