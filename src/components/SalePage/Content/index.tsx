import Avatar1 from '@/assets/images/sale-page/avt-1.png';
import Avatar10 from '@/assets/images/sale-page/avt-10.png';
import Avatar11 from '@/assets/images/sale-page/avt-11.png';
import Avatar12 from '@/assets/images/sale-page/avt-12.png';
import Avatar13 from '@/assets/images/sale-page/avt-13.png';
import Avatar14 from '@/assets/images/sale-page/avt-14.png';
import Avatar15 from '@/assets/images/sale-page/avt-15.png';
import Avatar16 from '@/assets/images/sale-page/avt-16.png';
import Avatar17 from '@/assets/images/sale-page/avt-17.png';
import Avatar18 from '@/assets/images/sale-page/avt-18.png';
import Avatar2 from '@/assets/images/sale-page/avt-2.png';
import Avatar3 from '@/assets/images/sale-page/avt-3.png';
import Avatar4 from '@/assets/images/sale-page/avt-4.png';
import Avatar5 from '@/assets/images/sale-page/avt-5.png';
import Avatar6 from '@/assets/images/sale-page/avt-6.png';
import Avatar7 from '@/assets/images/sale-page/avt-7.png';
import Avatar8 from '@/assets/images/sale-page/avt-8.png';
import Avatar9 from '@/assets/images/sale-page/avt-9.png';
import { salePageTracking } from '@/firebase/firebase';
import usePurchase from '@/hooks/usePurchase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import {
  AvatarsWrapper,
  BuyNowButton,
  Description,
  SectionTitle,
  SectionWrapper,
  TermItem,
  TermsWrapper,
  Wrapper,
} from './styles';

const avatarsGroup1 = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6];
const avatarsGroup2 = [Avatar7, Avatar8, Avatar9, Avatar10, Avatar11, Avatar12];
const avatarsGroup3 = [
  Avatar13,
  Avatar14,
  Avatar15,
  Avatar16,
  Avatar17,
  Avatar18,
];

interface PropsType {
  priceSelected: any;
}

export default function SaleContent({ priceSelected }: PropsType) {
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  const { handlePurchase } = usePurchase();
  const { logEvent } = useTrackingEvent();

  return (
    <Wrapper>
      <Description>
        {`Are you ready to take your online presence to the next level? We're
          thrilled to introduce you to the Avatarist – the ultimate tool that's
          about to revolutionize the way you showcase yourself, your brand, and
          your gaming persona.`}
      </Description>
      <SectionWrapper>
        <SectionTitle>🌟 Elevate Your Digital Presence with Ease</SectionTitle>
        <Description>
          {`Picture this: turning your ordinary selfies into eye-catching avatars
          that reflect your style, your vibe, and your personality. Our
          Avatarist does just that, and it does it in a snap! No need to spend
          hours tinkering with design software or hiring expensive artists –
          we've got you covered.`}
        </Description>
        <AvatarsWrapper>
          {avatarsGroup1.map((avatarSrc, index) => (
            <img key={index + 1} src={avatarSrc} alt={`avatar-${index + 1}`} />
          ))}
        </AvatarsWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>🎮 Power Up Your Gaming Avatar</SectionTitle>
        <Description>
          {`Attention all gamers! Say goodbye to generic avatars that don't quite
          capture your gaming spirit. With Avatarist, you can create a unique
          virtual gaming character avatar that truly reflects your personality.
          Whether you're conquering lands in fantasy worlds or battling it out
          in action-packed arenas, your gaming avatar will make a statement.`}
        </Description>
        <AvatarsWrapper>
          {avatarsGroup2.map((avatarSrc, index) => (
            <img
              key={(index + 1) * 2}
              src={avatarSrc}
              alt={`avatar-${(index + 1) * 2}`}
            />
          ))}
        </AvatarsWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>💼 Boost Your Brand Identity</SectionTitle>
        <Description>
          {`Are you a brand or business looking to stand out? We've got your back
          too. Imagine having a lifelike AI avatar as your brand logo or your
          LinkedIn profile picture. It's more than just an image – it's a visual
          representation of your authenticity and identity.`}
        </Description>
        <AvatarsWrapper>
          {avatarsGroup3.map((avatarSrc, index) => (
            <img
              key={(index + 1) * 3}
              src={avatarSrc}
              alt={`avatar-${(index + 1) * 3}`}
            />
          ))}
        </AvatarsWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>🚀 Pre-Launch Offer – Limited Time!</SectionTitle>
        <Description>
          {`Here's the exciting part – we're kicking off with a pre-launch offer exclusively for you! Get the Avatarist  at an unbeatable price before we launch it to the world.`}
        </Description>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Deal Terms:</SectionTitle>
        <TermsWrapper>
          <TermItem>
            This pre-launch offer is valid until [Date] at [Time] [Time Zone].
          </TermItem>
          <TermItem>
            Prices will increase by [Percentage]% after the pre-launch period
            ends.
          </TermItem>
          <TermItem>
            Your purchase includes access to all features and updates for a
            one-time payment.
          </TermItem>
          <TermItem>
            {`We offer a [Number]-day money-back guarantee. If you're not
            satisfied, we've got you covered.`}
          </TermItem>
        </TermsWrapper>
        <Description>
          {`Don't let this opportunity slip through your fingers. Get started now
          and get ready to see your online presence soar to new heights.`}
        </Description>
      </SectionWrapper>

      <BuyNowButton
        onClick={() => {
          const eventParams: any = {};
          if (priceSelected?.maxStyle) {
            eventParams[
              salePageTracking.clickBuyNow.params.package
            ] = `${priceSelected?.maxStyle}style`;
          }

          logEvent(salePageTracking.clickBuyNow.name, eventParams);
          handlePurchase(priceSelected?.id);
        }}
      >
        <p>Buy now</p>
      </BuyNowButton>
    </Wrapper>
  );
}
