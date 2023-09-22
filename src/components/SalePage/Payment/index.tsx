import Facebook from '@/assets/images/socials/facebook.svg';
import Linkedin from '@/assets/images/socials/linkedin.svg';
import Twitter from '@/assets/images/socials/twitter.svg';
import Star from '@/components/Icons/Star';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
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
import moment from 'moment';
import { SALE_SCHEDULED, discountPrice } from '@/utils/constants';
import { ROUTES } from '@/routes/routes';
import { useMutation } from 'react-query';
import generateService from '@/services/generate.service';

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

const tolerance = 0.01;

export default function Payment() {
  const prices = useAppSelector((state: RootState) => state.app.prices);
  const [priceSelected, setPriceSelected] = useState<any>(null);
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const purchaseMutation = useMutation(
    (payload: any) => generateService.purchaseNow(payload),
    {
      onSuccess: (res: any) => {
        if (res.data?.url) {
          window.location.assign(res.data?.url);
        }
      },
    }
  );

  const handleClickPurchase = () => {
    const payload: any = {
      priceId: priceSelected?.id,
      redirectUrl:
        `${window.location.protocol}//${window.location.host}` +
        ROUTES.APP_PAGE,
      // redirectUrl: 'https://avatar.apero.vn/',
    };
    if (isLoggedIn) {
      payload.userId = userInfor.id;
      payload.email = userInfor.userEmail;
    } else {
      const userIdFake =
        (Math.floor(Math.random() * (999999999999999 - 1 + 1)) + 1).toString() +
        (Math.floor(Math.random() * (999999999999999 - 1 + 1)) + 1).toString();
      payload.userId = 'fake' + userIdFake;
      localStorage.setItem('userIdFake', 'fake' + userIdFake);
      localStorage.removeItem('isComeFirst');
    }
    purchaseMutation.mutate(payload);
    // setStep(StepEnum.CHOOSE_STYLE);
    // setOpen(false);
    // setSuccessPurchase(true);
    // setOpen(false);
  };

  useEffect(() => {
    if (prices.length > 0) {
      setPriceSelected(prices[0]);
    }
  }, [prices.length]);

  return (
    <Wrapper>
      <SelectPackageSection>
        <Label>Select a package:</Label>
        <div>
          {prices.map((price) => {
            const originalPrice = price?.price || 0;
            const newPrice =
              originalPrice - originalPrice * discountPrice - tolerance;
            return (
              <OptionWrapper
                key={price?.id}
                onClick={() => {
                  setPriceSelected(price);
                }}
              >
                <LabelOptionWrapper>
                  <CustomRadio checked={priceSelected?.id === price?.id} />
                  <Label>{price?.name}</Label>
                </LabelOptionWrapper>
                <PriceWrapper>
                  <OriginalPrice>${originalPrice.toFixed(2)}</OriginalPrice>
                  <NewPrice>${newPrice.toFixed(2)}</NewPrice>
                </PriceWrapper>
              </OptionWrapper>
            );
          })}
        </div>
      </SelectPackageSection>

      <BuyButton onClick={handleClickPurchase}>
        <p>Buy now</p>
      </BuyButton>

      <Saving>
        <SaveItem first>
          <StatisticPrimaryText>{discountPrice * 100}%</StatisticPrimaryText>
          <StatisticPrimaryText>savings</StatisticPrimaryText>
        </SaveItem>
        <SaveItem>
          <StatisticPrimaryText>
            $
            {(
              (priceSelected?.price || 0) * (1 - discountPrice) -
              tolerance
            ).toFixed(2)}
          </StatisticPrimaryText>
          <StatisticPrimaryText>value</StatisticPrimaryText>
        </SaveItem>
        <SaveItem>
          <StatisticPrimaryText>
            $
            {((priceSelected?.price || 0) * discountPrice + tolerance).toFixed(
              2
            )}
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
