import Avatar1 from '@/assets/images/home-page/avt-1.svg';
import Avatar2 from '@/assets/images/home-page/avt-2.svg';
import Avatar3 from '@/assets/images/home-page/avt-3.svg';
import Avatar4 from '@/assets/images/home-page/avt-4.svg';
import Avatar5 from '@/assets/images/home-page/avt-5.svg';
import AvatarScroll1 from '@/assets/images/home-page/avt-scroll-1.jpg';
import AvatarScroll10 from '@/assets/images/home-page/avt-scroll-10.jpg';
import AvatarScroll11 from '@/assets/images/home-page/avt-scroll-11.jpg';
import AvatarScroll12 from '@/assets/images/home-page/avt-scroll-12.jpg';
import AvatarScroll13 from '@/assets/images/home-page/avt-scroll-13.jpg';
import AvatarScroll14 from '@/assets/images/home-page/avt-scroll-14.jpg';
import AvatarScroll15 from '@/assets/images/home-page/avt-scroll-15.jpg';
import AvatarScroll16 from '@/assets/images/home-page/avt-scroll-16.jpg';
import AvatarScroll17 from '@/assets/images/home-page/avt-scroll-17.jpg';
import AvatarScroll2 from '@/assets/images/home-page/avt-scroll-2.jpg';
import AvatarScroll3 from '@/assets/images/home-page/avt-scroll-3.jpg';
import AvatarScroll4 from '@/assets/images/home-page/avt-scroll-4.jpg';
import AvatarScroll5 from '@/assets/images/home-page/avt-scroll-5.jpg';
import AvatarScroll6 from '@/assets/images/home-page/avt-scroll-6.jpg';
import AvatarScroll7 from '@/assets/images/home-page/avt-scroll-7.jpg';
import AvatarScroll8 from '@/assets/images/home-page/avt-scroll-8.jpg';
import AvatarScroll9 from '@/assets/images/home-page/avt-scroll-9.jpg';
import ShadowBottom from '@/assets/images/home-page/shadow-avt-scroll-bottom.png';
import ShadowTop from '@/assets/images/home-page/shadow-avt-scroll-top.png';
import IconCrown from '@/assets/images/home-page/vuong-mien.svg';
import ArrowRight from '@/components/Icons/ArrowRight';
import Star from '@/components/Icons/Star';
import { landingPageTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { uploadPhotoLinkFromLandingPage } from '@/pages/HomePage';
import { Title } from '@/pages/HomePage/styles';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useNavigate } from 'react-router-dom';
import {
  AvatarScroll,
  AvatarsColItem,
  AvatarsColItemWrapper,
  ContainerWrapper,
  ContentWrapper,
  GetStartedWrapper,
  IntroDescription,
  ParentGetStarted,
  RateWrapper,
  Reviewer,
  ReviewersWrapper,
  ReviewsContent,
  ReviewsCount,
  ReviewsWrapper,
  ScrollAvatarWrapper,
  ScrollWrapper,
  SeeAllStyles,
  Shadow,
  StarsWrapper,
  Wrapper,
} from './styles';
import ModalPreviewStyle from '@/pages/GenerateAvatar/components/Modals/ModalPreviewStyle';
import { useState } from 'react';

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
  const { logEvent } = useTrackingEvent();
  const [showModalPreviewStyle, setShowModalPreviewStyle] = useState(false);
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
          <ParentGetStarted>
            <GetStartedWrapper
              onClick={() => {
                const eventParams: any = {
                  [landingPageTracking.clickStart.params.from]: 'hero',
                };

                logEvent(landingPageTracking.clickStart.name, eventParams);
                navigate(uploadPhotoLinkFromLandingPage);
              }}
            >
              <p>Get started</p>
              <ArrowRight />
            </GetStartedWrapper>
            <SeeAllStyles onClick={() => setShowModalPreviewStyle(true)}>
              <div>See all styles</div>
              <div>
                <span>NEW</span>
                <img src={IconCrown} alt="" />
              </div>
            </SeeAllStyles>
          </ParentGetStarted>

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
          <Shadow
            src={ShadowTop}
            alt={'shadow-top'}
            style={{ top: '-1px', left: '-1px' }}
          />
          <Shadow
            src={ShadowBottom}
            alt={'shadow-bottom'}
            style={{ bottom: '-1px', left: '-1px' }}
          />
        </ScrollWrapper>
      </Wrapper>
      {showModalPreviewStyle && (
        <ModalPreviewStyle
          open={showModalPreviewStyle}
          setOpen={setShowModalPreviewStyle}
          gender="Female"
          hasClose={true}
        />
      )}
    </ContainerWrapper>
  );
}
