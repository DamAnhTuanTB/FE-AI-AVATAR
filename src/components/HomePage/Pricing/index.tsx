import { Description, SubTitle } from '@/pages/HomePage/styles';
import React, { useState } from 'react';
import {
  BasicInfo,
  BenefitItemWrapper,
  BenefitsWrapper,
  CustomTitle,
  NameWrapper,
  PackageWrapper,
  PackagesWrapper,
  PopularWrapper,
  Price,
  Recurring,
  SelectButton,
  Wrapper,
} from './styles';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import BlingIcon from '@/components/Icons/BlingIcon';
import StylesIcon from '@/assets/images/sale-page/pricing-style-icon.png';
import ImagesIcon from '@/assets/images/sale-page/pricing-images-icon.png';
import TimeIcon from '@/assets/images/sale-page/pricing-time-icon.png';
import usePurchase from '@/hooks/usePurchase';
import LoadingIcon from '@/assets/images/loading-icon.svg';

export default function Pricing() {
  const { prices } = useAppSelector((state: RootState) => state.app);
  const { handlePurchase, loading } = usePurchase();
  const [priceSelected, setPriceSelected] = useState('');

  return (
    <Wrapper id="pricing">
      <SubTitle>PRICING</SubTitle>
      <CustomTitle>Premium quality avatar with affordable price</CustomTitle>
      <Description>
        {`Get access to Avatarist to empower your digital presence`}
      </Description>
      <PackagesWrapper>
        {prices.map((price, index) => {
          const popular = index === 1;
          return (
            <PackageWrapper key={price?.id} popular={popular}>
              {popular && (
                <PopularWrapper>
                  <BlingIcon />
                  <p>Most Popular</p>
                </PopularWrapper>
              )}
              <BasicInfo>
                <NameWrapper>
                  <p>{price?.displayName}</p>
                  <BlingIcon />
                </NameWrapper>
                <Price popular={popular}>${price?.price}</Price>
                <Recurring>one time</Recurring>
              </BasicInfo>
              <BenefitsWrapper>
                <BenefitItemWrapper>
                  <img src={StylesIcon} alt="style icon" />
                  <p>{price?.maxStyle} styles of your choice </p>
                </BenefitItemWrapper>

                <BenefitItemWrapper>
                  <img src={ImagesIcon} alt="image icon" />
                  <p>{price?.maxImages} avatar images</p>
                </BenefitItemWrapper>

                <BenefitItemWrapper>
                  <img src={TimeIcon} alt="render time icon" />
                  <p>{price?.renderTime} render time </p>
                </BenefitItemWrapper>
              </BenefitsWrapper>

              <SelectButton
                popular={popular}
                onClick={() => {
                  handlePurchase(price?.id);
                  setPriceSelected(price?.id);
                }}
              >
                {loading && priceSelected === price?.id ? (
                  <img src={LoadingIcon} alt="loading-icon" />
                ) : (
                  <p>Select</p>
                )}
              </SelectButton>
            </PackageWrapper>
          );
        })}
      </PackagesWrapper>
    </Wrapper>
  );
}
