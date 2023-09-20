import { HomepageContainer, Title } from '@/pages/HomePage/styles';
import React from 'react';
import {
  AvatarScroll,
  AvatarsColItem,
  ContainerWrapper,
  ContentWrapper,
  GetStartedWrapper,
  IntroDescription,
  RateWrapper,
  Reviewer,
  ReviewersWrapper,
  ReviewsContent,
  ReviewsCount,
  ReviewsWrapper,
  ScrollAvatarWrapper,
  ScrollWrapper,
  Shadow,
  StarsWrapper,
  Wrapper,
} from './styles';
import ArrowRight from '@/components/Icons/ArrowRight';
import Avatar1 from '@/assets/images/home-page/avt-1.svg';
import Avatar2 from '@/assets/images/home-page/avt-2.svg';
import Avatar3 from '@/assets/images/home-page/avt-3.svg';
import Avatar4 from '@/assets/images/home-page/avt-4.svg';
import Avatar5 from '@/assets/images/home-page/avt-5.svg';
import Star from '@/components/Icons/Star';
import AvatarScroll1 from '@/assets/images/home-page/avt-scroll-1.svg';
import AvatarScroll2 from '@/assets/images/home-page/avt-scroll-2.svg';
import AvatarScroll3 from '@/assets/images/home-page/avt-scroll-3.svg';
import AvatarScroll4 from '@/assets/images/home-page/avt-scroll-4.svg';
import AvatarScroll5 from '@/assets/images/home-page/avt-scroll-5.svg';
import AvatarScroll6 from '@/assets/images/home-page/avt-scroll-6.svg';
import AvatarScroll7 from '@/assets/images/home-page/avt-scroll-7.svg';
import AvatarScroll8 from '@/assets/images/home-page/avt-scroll-8.svg';
import AvatarScroll9 from '@/assets/images/home-page/avt-scroll-9.svg';
import AvatarScroll10 from '@/assets/images/home-page/avt-scroll-10.svg';
import ShadowTop from '@/assets/images/home-page/shadow-avt-scroll-top.png';
import ShadowBottom from '@/assets/images/home-page/shadow-avt-scroll-bottom.png';

const reviewers = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

const avatars = [
  {
    key: 'col-1',
    items: [
      AvatarScroll1,
      AvatarScroll2,
      AvatarScroll3,
      AvatarScroll4,
      AvatarScroll5,
    ],
  },
  {
    key: 'col-2',
    items: [
      AvatarScroll6,
      AvatarScroll7,
      AvatarScroll8,
      AvatarScroll9,
      AvatarScroll10,
    ],
  },
];

export default function Intro() {
  return (
    <ContainerWrapper>
      <Wrapper>
        <ContentWrapper>
          <div>
            <Title>Express limitless versions of yourself with AI Avatar</Title>
            <IntroDescription>
              Transform your photos into AI-powered avatars that mirror your
              style and persona. Elevate your digital presence with the AI
              Avatar Maker today!
            </IntroDescription>
          </div>

          <GetStartedWrapper>
            <p>Get started</p>
            <ArrowRight />
          </GetStartedWrapper>

          <ReviewsWrapper>
            <ReviewersWrapper>
              {reviewers.map((reviewer, index) => (
                <Reviewer
                  key={index}
                  src={reviewer}
                  alt={`reviewer ${index + 1}`}
                  first={index === 0}
                />
              ))}
            </ReviewersWrapper>
            <ReviewsContent>
              <RateWrapper>
                <StarsWrapper>
                  {Array.from(Array(5).keys()).map((item) => (
                    <Star key={item} />
                  ))}
                </StarsWrapper>
                <p>5.0</p>
              </RateWrapper>

              <ReviewsCount>From 500+ reviews</ReviewsCount>
            </ReviewsContent>
          </ReviewsWrapper>
        </ContentWrapper>

        <ScrollWrapper>
          <ScrollAvatarWrapper>
            {avatars.map((avatarsCol) => (
              <AvatarsColItem key={avatarsCol.key}>
                {avatarsCol.items.map((avatar, index) => (
                  <AvatarScroll
                    key={avatarsCol.key + index}
                    src={avatar}
                    alt={`avatar-${index + 1}-${avatarsCol.key}`}
                  />
                ))}
              </AvatarsColItem>
            ))}
          </ScrollAvatarWrapper>
          <Shadow src={ShadowTop} alt={'shadow-top'} style={{ top: 0 }} />
          <Shadow
            src={ShadowBottom}
            alt={'shadow-bottom'}
            style={{ bottom: 0 }}
          />
        </ScrollWrapper>
      </Wrapper>
    </ContainerWrapper>
  );
}
