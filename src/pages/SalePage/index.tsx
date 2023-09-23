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
import { useQuery } from 'react-query';
import { discountPrice } from '@/utils/constants';
import generateService from '@/services/generate.service';

export default function SalePage() {
  const { isMobile, isTablet } = useScreenSize();
  const [priceSelected, setPriceSelected] = useState<any>(null);
  const [prices, setPrices] = useState<any[]>([]);

  const priceType =
    discountPrice === 0.5
      ? 'sale50'
      : discountPrice === 0.25
      ? 'sale25'
      : 'main';

  useQuery(
    ['get-list-price'],
    () => generateService.getListPrice({ type: priceType }),
    {
      onSuccess: (res: any) => {
        const listPrice = res.data?.map((item: any) => ({
          id: item.id,
          name: item.metadata.name,
          price: item.unit_amount / 100,
          maxStyle: Number(item.metadata.numberStyle),
          bestOffer: item.metadata?.popular === 'true',
        }));
        setPrices(listPrice);
      },
    }
  );

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
              prices={prices}
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
            prices={prices}
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
