import BeforeAfterImageSrc from '@/assets/images/sale-page/before-after-img.svg';
import HomePageFooter from '@/components/HomePage/Footer';
import SaleContent from '@/components/SalePage/Content';
import SaleHeader from '@/components/SalePage/Header';
import Payment from '@/components/SalePage/Payment';
import useScreenSize from '@/hooks/useScreenSize';
import {
  BeforeAfterImage,
  Container,
  ContentWrapper,
  HeaderFooterWrapper,
  PaymentWrapper,
  Wrapper,
} from './styles';

export default function SalePage() {
  const { isMobile, isTablet } = useScreenSize();
  return (
    <Wrapper>
      <HeaderFooterWrapper>
        <Container>
          <SaleHeader />
        </Container>
      </HeaderFooterWrapper>

      <ContentWrapper>
        <BeforeAfterImage src={BeforeAfterImageSrc} alt="before-after" />
        {(isMobile || isTablet) && (
          <PaymentWrapper>
            <Payment />
          </PaymentWrapper>
        )}
        <SaleContent />
      </ContentWrapper>
      {!(isMobile || isTablet) && (
        <PaymentWrapper>
          <Payment />
        </PaymentWrapper>
      )}

      <HeaderFooterWrapper>
        <Container>
          <HomePageFooter />
        </Container>
      </HeaderFooterWrapper>
    </Wrapper>
  );
}
