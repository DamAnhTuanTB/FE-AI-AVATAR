import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 66px;
`;

export const MenusLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

export const MenuLink = styled.p`
  color: var(--text-primary, #18181b);
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
`;

export const GetStartedWrapper = styled.div`
  border-radius: 100px;
  background: #191a1f;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  p {
    color: #fff;
    text-align: center;
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    margin: 0;
  }
`;
