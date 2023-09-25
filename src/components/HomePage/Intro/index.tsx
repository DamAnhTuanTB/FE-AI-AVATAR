import { HomepageContainer, Title } from '@/pages/HomePage/styles';
import React from 'react';
import {
  AvatarScroll,
  AvatarsColItem,
  AvatarsColItemWrapper,
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
import AvatarScroll11 from '@/assets/images/home-page/avt-scroll-11.svg';
import AvatarScroll12 from '@/assets/images/home-page/avt-scroll-12.svg';
import AvatarScroll13 from '@/assets/images/home-page/avt-scroll-13.svg';
import AvatarScroll14 from '@/assets/images/home-page/avt-scroll-14.svg';
import AvatarScroll15 from '@/assets/images/home-page/avt-scroll-15.svg';
import AvatarScroll16 from '@/assets/images/home-page/avt-scroll-16.svg';
import AvatarScroll17 from '@/assets/images/home-page/avt-scroll-17.svg';
import ShadowTop from '@/assets/images/home-page/shadow-avt-scroll-top.png';
import ShadowBottom from '@/assets/images/home-page/shadow-avt-scroll-bottom.png';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import { landingPageTracking } from '@/firebase/firebase';
import { analyticsLogEvent } from '@/firebase';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

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
      AvatarScroll6,
      AvatarScroll7,
      AvatarScroll8,
    ],
  },
  {
    key: 'col-2',
    items: [
      AvatarScroll9,
      AvatarScroll10,
      AvatarScroll11,
      AvatarScroll12,
      AvatarScroll13,
      AvatarScroll14,
      AvatarScroll15,
      AvatarScroll16,
      AvatarScroll17,
    ],
  },
];

export default function Intro() {
  const navigate = useNavigate();
  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);
  return (
    <ContainerWrapper id={'intro'}>
      <Wrapper>
        <ContentWrapper>
          <div>
            <Title>Express limitless versions of yourself with AI Avatar</Title>
            <IntroDescription>
              Transform your photos into AI-powered avatars that mirror your
              style and persona. Elevate your digital presence with Avatarist
              today!
            </IntroDescription>
          </div>

          <GetStartedWrapper
            onClick={() => {
              const eventParams: any = {
                [landingPageTracking.clickStart.params.from]: 'hero',
              };
              if (userInfor?.id) {
                eventParams[landingPageTracking.clickStart.params.userId] =
                  userInfor?.id;
              }
              analyticsLogEvent(
                landingPageTracking.clickStart.name,
                eventParams
              );
              navigate(ROUTES.APP_PAGE);
            }}
          >
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
            {avatars.map((avatarsCol, index) => (
              <AvatarsColItemWrapper key={avatarsCol.key}>
                <AvatarsColItem first={index === 0}>
                  {avatarsCol.items.map((avatar, index) => (
                    <AvatarScroll
                      key={avatarsCol.key + index}
                      src={avatar}
                      alt={`avatar-${index + 1}-${avatarsCol.key}`}
                    />
                  ))}
                </AvatarsColItem>
              </AvatarsColItemWrapper>
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
