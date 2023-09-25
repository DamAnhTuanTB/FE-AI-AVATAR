import BeforeAfterImageSrc from '@/assets/images/sale-page/before-after-img.svg';
import SaleContent from '@/components/SalePage/Content';
import SalePageFooter from '@/components/SalePage/Footer';
import SaleHeader from '@/components/SalePage/Header';
import Payment from '@/components/SalePage/Payment';
import useScreenSize from '@/hooks/useScreenSize';
import generateService from '@/services/generate.service';
import { discountPrice } from '@/utils/constants';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
  BeforeAfterImage,
  Container,
  ContentWrapper,
  HeaderFooterWrapper,
  PaymentWrapper,
  Wrapper,
} from './styles';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { salePageTracking } from '@/firebase/firebase';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { analyticsLogEvent } from '@/firebase';
import moment from 'moment';

export default function SalePage() {
  const { isMobile, isTablet } = useScreenSize();
  const [priceSelected, setPriceSelected] = useState<any>(null);
  const [prices, setPrices] = useState<any[]>([]);
  const [searchParams] = useSearchParams();
  const fromQuery = searchParams.get('from');
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);

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
        setPrices(listPrice || []);
      },
    }
  );

  const handleSelectPrice = (price: any) => {
    setPriceSelected(price);
  };

  useEffect(() => {
    const eventParams: any = {
      [salePageTracking.view.params.source]:
        fromQuery === 'mail' ? 'email_pre_launch' : 'landing_page',
    };
    if (userInfor?.id) {
      eventParams[salePageTracking.view.params.userId] = userInfor?.id;
    }
    analyticsLogEvent(salePageTracking.view.name, eventParams);
  }, [fromQuery]);

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
