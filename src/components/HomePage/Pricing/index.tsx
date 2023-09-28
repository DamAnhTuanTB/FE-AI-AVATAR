import { Description, SubTitle } from '@/pages/HomePage/styles';
import React from 'react';
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

export default function Pricing() {
  const { prices } = useAppSelector((state: RootState) => state.app);
  return (
    <Wrapper>
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
                <Price>${price?.price}</Price>
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

              <SelectButton popular={popular}>
                <p>Select</p>
              </SelectButton>
            </PackageWrapper>
          );
        })}
      </PackagesWrapper>
    </Wrapper>
  );
}
