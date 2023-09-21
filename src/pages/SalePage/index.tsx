import BeforeAfterImageSrc from '@/assets/images/sale-page/before-after-img.svg';
import HomePageFooter from '@/components/HomePage/Footer';
import SaleContent from '@/components/SalePage/Content';
import SaleHeader from '@/components/SalePage/Header';
import Payment from '@/components/SalePage/Payment';
import useScreenSize from '@/hooks/useScreenSize';
import {
  BeforeAfterImage,
  Container,
  ContentRoot,
  ContentWrapper,
  ElipseDecorLeft,
  ElipseDecorRight,
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

      <ContentRoot>
        <ContentWrapper>
          <BeforeAfterImage src={BeforeAfterImageSrc} alt="before-after" />
          {(isMobile || isTablet) && (
            <PaymentWrapper>
              <Payment />
            </PaymentWrapper>
          )}
          <SaleContent />
        </ContentWrapper>
        <ElipseDecorLeft index={1} />
        <ElipseDecorRight index={1} />

        <ElipseDecorLeft index={2} />
        <ElipseDecorRight index={2} />

        <ElipseDecorLeft index={3} />
        <ElipseDecorRight index={3} />

        <ElipseDecorLeft index={4} />
        <ElipseDecorRight index={4} />
      </ContentRoot>

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
