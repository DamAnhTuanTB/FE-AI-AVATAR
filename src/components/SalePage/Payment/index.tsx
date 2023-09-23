import Facebook from '@/assets/images/socials/facebook.svg';
import Linkedin from '@/assets/images/socials/linkedin.svg';
import Twitter from '@/assets/images/socials/twitter.svg';
import Star from '@/components/Icons/Star';
import usePurchase from '@/hooks/usePurchase';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { discountPrice } from '@/utils/constants';
import { useEffect, useState } from 'react';
import CountDown from './CountDown';
import {
  BuyButton,
  CustomRadio,
  InfoBlock,
  Label,
  LabelOptionWrapper,
  NewPrice,
  Note,
  OptionWrapper,
  OriginalPrice,
  PriceWrapper,
  ProvidedLabel,
  RatesWrapper,
  SaveItem,
  Saving,
  SelectPackageSection,
  SocialsWrapper,
  StatisticPrimaryText,
  Wrapper,
} from './styles';
import { useQuery } from 'react-query';
import generateService from '@/services/generate.service';

interface PropsType {
  handleSelectPrice: (price: any) => void;
  priceSelected: any;
  prices: any[];
}

export default function Payment({
  priceSelected,
  handleSelectPrice,
  prices,
}: PropsType) {
  // const prices = useAppSelector((state: RootState) => state.app.prices);

  const { handlePurchase } = usePurchase();
  const tolerance = discountPrice > 0 ? 0.01 : 0;

  useEffect(() => {
    if (prices.length > 1) {
      handleSelectPrice(prices[1]);
    }
  }, [prices.length]);

  return (
    <Wrapper>
      <SelectPackageSection>
        <Label>Select a package:</Label>
        <div>
          {prices.map((price) => {
            const newPrice = price?.price || 0;
            const originalPrice = newPrice / (1 - discountPrice) + tolerance;

            return (
              <OptionWrapper
                key={price?.id}
                onClick={() => {
                  handleSelectPrice(price);
                }}
              >
                <LabelOptionWrapper>
                  <CustomRadio checked={priceSelected?.id === price?.id} />
                  <Label>{price?.name}</Label>
                </LabelOptionWrapper>
                <PriceWrapper>
                  {discountPrice > 0 && (
                    <OriginalPrice>${originalPrice.toFixed(2)}</OriginalPrice>
                  )}
                  <NewPrice>${newPrice.toFixed(2)}</NewPrice>
                </PriceWrapper>
              </OptionWrapper>
            );
          })}
        </div>
      </SelectPackageSection>

      <BuyButton
        onClick={() => {
          handlePurchase(priceSelected?.id);
        }}
      >
        <p>Buy now</p>
      </BuyButton>

      <Saving>
        <SaveItem first>
          <StatisticPrimaryText>{discountPrice * 100}%</StatisticPrimaryText>
          <StatisticPrimaryText>savings</StatisticPrimaryText>
        </SaveItem>
        <SaveItem>
          <StatisticPrimaryText>
            ${(priceSelected?.price || 0).toFixed(2)}
          </StatisticPrimaryText>
          <StatisticPrimaryText>value</StatisticPrimaryText>
        </SaveItem>
        <SaveItem>
          <StatisticPrimaryText>
            $
            {(
              (priceSelected?.price || 0) / (1 - discountPrice) -
              (priceSelected?.price || 0) +
              tolerance
            ).toFixed(2)}
          </StatisticPrimaryText>
          <StatisticPrimaryText>you save</StatisticPrimaryText>
        </SaveItem>
      </Saving>

      <InfoBlock>
        <StatisticPrimaryText>100% Money Back Guarantee</StatisticPrimaryText>
        <Note>(within 7 days of purchase)</Note>
      </InfoBlock>

      <InfoBlock>
        <RatesWrapper>
          {Array.from(Array(5).keys()).map((item) => (
            <Star key={item} />
          ))}
        </RatesWrapper>
        <StatisticPrimaryText>500+ reviews</StatisticPrimaryText>
      </InfoBlock>

      <InfoBlock>
        <ProvidedLabel>Provided by</ProvidedLabel>
        <StatisticPrimaryText>VisionLab Inc.,</StatisticPrimaryText>
      </InfoBlock>

      <CountDown />

      <SocialsWrapper>
        <a href="" target="_blank">
          <img src={Twitter} alt="twitter" />
        </a>
        <a href="" target="_blank">
          <img src={Facebook} alt="facebook" />
        </a>
        <a href="" target="_blank">
          <img src={Linkedin} alt="linkedin" />
        </a>
      </SocialsWrapper>
    </Wrapper>
  );
}
