import Facebook from '@/assets/images/socials/facebook.svg';
import Linkedin from '@/assets/images/socials/linkedin.svg';
import Twitter from '@/assets/images/socials/twitter.svg';
import Star from '@/components/Icons/Star';
import { useState } from 'react';
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
  TimeNumber,
  Wrapper,
} from './styles';
import { Radio } from 'antd';
import useCountDown from '@/hooks/useCountDown';
import CountDown from './CountDown';

const options = [
  {
    key: 1,
    label: '50 images (5 styles)',
    originalPrice: 10,
    newPrice: 4.99,
  },
  {
    key: 2,
    label: '100 images (10 styles)',
    originalPrice: 16,
    newPrice: 7.99,
  },
  {
    key: 3,
    label: '200 images (20 styles)',
    originalPrice: 26,
    newPrice: 12.99,
  },
];

export default function Payment() {
  const [optionActive, setOptionActive] = useState(options[0]);
  return (
    <Wrapper>
      <SelectPackageSection>
        <Label>Select a package:</Label>
        <div>
          {options.map((option) => (
            <OptionWrapper
              key={option.key}
              onClick={() => {
                setOptionActive(option);
              }}
            >
              <LabelOptionWrapper>
                <CustomRadio checked={optionActive.key === option.key} />
                <Label>{option.label}</Label>
              </LabelOptionWrapper>
              <PriceWrapper>
                <OriginalPrice>
                  ${option.originalPrice.toFixed(2)}
                </OriginalPrice>
                <NewPrice>${option.newPrice.toFixed(2)}</NewPrice>
              </PriceWrapper>
            </OptionWrapper>
          ))}
        </div>
      </SelectPackageSection>

      <BuyButton>
        <p>Buy now</p>
      </BuyButton>

      <Saving>
        <SaveItem first>
          <StatisticPrimaryText>50%</StatisticPrimaryText>
          <StatisticPrimaryText>savings</StatisticPrimaryText>
        </SaveItem>
        <SaveItem>
          <StatisticPrimaryText>
            ${optionActive.newPrice.toFixed(2)}
          </StatisticPrimaryText>
          <StatisticPrimaryText>value</StatisticPrimaryText>
        </SaveItem>
        <SaveItem>
          <StatisticPrimaryText>
            ${(optionActive.originalPrice - optionActive.newPrice).toFixed(2)}
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
