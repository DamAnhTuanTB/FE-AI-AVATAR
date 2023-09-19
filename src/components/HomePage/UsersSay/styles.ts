import { HomepageContainer, Title } from '@/pages/HomePage/styles';
import styled from 'styled-components';

export const Wrapper = styled(HomepageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomTitle = styled(Title)`
  text-align: center;
  margin: 24px 0 16px;
`;

export const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 60px;
  position: relative;
`;

export const UserCard = styled.div<{ gradient?: boolean }>`
  border-radius: 10px;
  background: ${(props) =>
    props.gradient
      ? 'linear-gradient(180deg, #F5F5F5 0%, rgba(245, 245, 245, 0.00) 100%)'
      : '#f5f5f5'};
  display: flex;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const UserAvatar = styled.img``;

export const UserName = styled.p`
  margin: 0;
  color: var(--Primary, #1a1a1a);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const UserJob = styled.p`
  margin: 0;
  color: #899098;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const RatesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
`;

export const UserSaid = styled.p`
  margin: 0;
  color: var(--text-secondary, #737373);

  /* Sub-headings/Sub-head 2/Regular */
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const Shadow = styled.div`
  position: absolute;
  top: -60px;
  width: 100%;
  height: 167px;
  background: linear-gradient(
    180deg,
    #fff 0%,
    #fff 33.85%,
    rgba(255, 255, 255, 0) 100%
  );
`;
