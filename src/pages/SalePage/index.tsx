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
import SalePageFooter from '@/components/SalePage/Footer';
import { useState } from 'react';

export default function SalePage() {
  const { isMobile, isTablet } = useScreenSize();
  const [priceSelected, setPriceSelected] = useState<any>(null);

  const handleSelectPrice = (price: any) => {
    setPriceSelected(price);
  };

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
            <Payment
              handleSelectPrice={handleSelectPrice}
              priceSelected={priceSelected}
            />
          </PaymentWrapper>
        )}
        <SaleContent priceSelected={priceSelected} />
      </ContentWrapper>

      {!(isMobile || isTablet) && (
        <PaymentWrapper>
          <Payment
            handleSelectPrice={handleSelectPrice}
            priceSelected={priceSelected}
          />
        </PaymentWrapper>
      )}

      <HeaderFooterWrapper>
        <Container>
          <SalePageFooter />
        </Container>
      </HeaderFooterWrapper>
    </Wrapper>
  );
}
