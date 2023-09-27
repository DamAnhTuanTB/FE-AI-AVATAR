import BeforeAfterImageSrc from '@/assets/images/sale-page/before-after-img.png';
import SaleContent from '@/components/SalePage/Content';
import SalePageFooter from '@/components/SalePage/Footer';
import SaleHeader from '@/components/SalePage/Header';
import Payment from '@/components/SalePage/Payment';
import { salePageTracking } from '@/firebase/firebase';
import useFetchSaleConfig from '@/hooks/useFetchSaleConfig';
import useScreenSize from '@/hooks/useScreenSize';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import generateService from '@/services/generate.service';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import {
  BeforeAfterImage,
  Container,
  ContentWrapper,
  FooterWrapper,
  HeaderWrapper,
  PaymentWrapper,
  Wrapper,
} from './styles';

export default function SalePage() {
  const { isMobile, isTablet } = useScreenSize();
  const [priceSelected, setPriceSelected] = useState<any>(null);
  const [prices, setPrices] = useState<any[]>([]);
  const [searchParams] = useSearchParams();
  const fromQuery = searchParams.get('from');
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const { logEvent } = useTrackingEvent();
  const { discountPrice, startDate } = useFetchSaleConfig();

  const getListPrice = useMutation(
    (type: any) => generateService.getListPrice({ type }),
    {
      onSuccess: (res: any) => {
        const listPrice = res.data?.map((item: any) => ({
          id: item.id,
          name: item.metadata.name,
          price: item.unit_amount / 100,
          maxStyle: Number(item.metadata.numberStyle),
          bestOffer: item.metadata?.popular === 'true',
        }));
        setPrices(listPrice || []);
      },
    }
  );

  const handleSelectPrice = (price: any) => {
    setPriceSelected(price);
  };

  useEffect(() => {
    if (startDate) {
      const priceType =
        discountPrice === 0.5
          ? 'sale50'
          : discountPrice === 0.25
          ? 'sale25'
          : 'main';
      getListPrice.mutate(priceType);
    }
  }, [discountPrice, startDate]);

  useEffect(() => {
    const eventParams: any = {};
    if (fromQuery) {
      eventParams[salePageTracking.view.params.source] = fromQuery;
    }

    logEvent(salePageTracking.view.name, eventParams);
  }, [fromQuery]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Container>
          <SaleHeader />
        </Container>
      </HeaderWrapper>

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

      <FooterWrapper>
        <Container>
          <SalePageFooter />
        </Container>
      </FooterWrapper>
    </Wrapper>
  );
}
