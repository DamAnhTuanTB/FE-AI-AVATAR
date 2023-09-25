import React from 'react';
import {
  AccessoryDigitalProfile,
  FeatureCard,
  FeatureContent,
  FeatureDescription,
  FeatureImageWrapper,
  FeatureTitle,
  FeaturesWrapper,
  KeyTitle,
  KeyUnderline,
  TransformTitle,
  Wrapper,
} from './styles';
import { Description, SubTitle } from '@/pages/HomePage/styles';
import TransformImage1 from '@/assets/images/home-page/transform-1.png';
import TransformImage2 from '@/assets/images/home-page/transform-2.png';
import TransformImage3 from '@/assets/images/home-page/transform-3.png';
import TransformItem1 from '@/assets/images/home-page/transform-item-1.svg';

const features = [
  {
    key: 'digital profile',
    image: (
      <FeatureImageWrapper>
        <img src={TransformImage1} alt={'digital profile'} />
        <AccessoryDigitalProfile
          src={TransformItem1}
          alt={'digital profile item'}
        />
      </FeatureImageWrapper>
    ),
    title: {
      secondary: 'Evaluate your',
      primary: 'Digital Profile',
    },
    description:
      'Craft personalized avatars that express your unique online identity. Choose from mythical to professional styles and leave a lasting impression on your digital platforms.',
  },
  {
    key: 'gaming avatars',
    image: <img src={TransformImage2} alt={'gaming avatars'} />,
    title: {
      secondary: 'Power up your',
      primary: 'Gaming Avatars',
    },
    description:
      'Transform your gaming characters into captivating avatars. Show your gaming persona with avatars that reflect your in-game alter ego and stand out in the gaming community.',
  },
  {
    key: 'Brand Identity',
    image: <img src={TransformImage3} alt={'Brand Identity'} />,
    title: {
      secondary: 'Boost Your',
      primary: 'Brand Identity',
    },
    description: `Elevate your brand's visual identity with tailor-made avatars. Whether playful, professional, or brand-focused, create avatars that embody your brand's essence.`,
  },
];

export default function TransformPhoto() {
  return (
    <Wrapper id="why-choose-avatar">
      <SubTitle>WHY CHOOSE AVATARIST?</SubTitle>
      <TransformTitle>
        Transform your photos into expressive avatars
      </TransformTitle>
      <Description>
        {`Whether you're a content creator, gamer, or business professional, our
        AI-powered avatars make your online identity remarkable.`}
      </Description>

      <FeaturesWrapper>
        {features.map((feature) => (
          <FeatureCard key={feature.key}>
            {feature.image}

            <FeatureContent>
              <FeatureTitle>
                <p>{feature.title.secondary}</p>
                <KeyTitle>
                  <p>{feature.title.primary}</p>
                  <KeyUnderline />
                </KeyTitle>
              </FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
          </FeatureCard>
        ))}
      </FeaturesWrapper>
    </Wrapper>
  );
}
