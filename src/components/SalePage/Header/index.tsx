import LogoSrc from '@/assets/images/logo-secondary.svg';
import {
  ContentWrapper,
  CountDownWrapper,
  Description,
  Logo,
  PriceWrapper,
  SubTitle,
  Title,
  Wrapper,
} from './styles';
import CountDown from '@/components/CountDown';

export default function SaleHeader() {
  return (
    <Wrapper>
      <Logo src={LogoSrc} alt="logo" />

      <ContentWrapper>
        <SubTitle>Pre-launch Offer</SubTitle>
        <Title>{`Elevate Your Digital Presence with \n AI-Powered Avatars! 🚀`}</Title>
        <Description>
          Craft Personalized Avatars that Mirror Your Style and Personal
        </Description>
      </ContentWrapper>

      <PriceWrapper>
        <Description>The price increased by 15% in</Description>
        <CountDownWrapper>
          <CountDown />
        </CountDownWrapper>
      </PriceWrapper>
    </Wrapper>
  );
}
