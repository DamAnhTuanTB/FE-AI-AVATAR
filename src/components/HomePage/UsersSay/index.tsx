import React from 'react';
import {
  BodyWrapper,
  CustomTitle,
  GroupsWrapper,
  RatesWrapper,
  Shadow,
  UserCard,
  UserInfoWrapper,
  UserJob,
  UserName,
  UserSaid,
  Wrapper,
} from './styles';
import { Description, SubTitle } from '@/pages/HomePage/styles';
import User1 from '@/assets/images/home-page/user-1.png';
import User2 from '@/assets/images/home-page/user-2.png';
import User3 from '@/assets/images/home-page/user-3.png';
import User4 from '@/assets/images/home-page/user-4.png';
import User5 from '@/assets/images/home-page/user-5.png';
import User6 from '@/assets/images/home-page/user-6.png';
import User7 from '@/assets/images/home-page/user-7.png';
import User8 from '@/assets/images/home-page/user-8.png';
import User9 from '@/assets/images/home-page/user-9.png';
import Star from '@/components/Icons/Star';
import useScreenSize from '@/hooks/useScreenSize';

const groups = [
  {
    key: 1,
    users: [
      {
        key: 'Sarah Johnson',
        name: 'Sarah Johnson',
        job: 'Social Media Influencer',
        rate: 5,
        said: `“Avatarist is a game-changer! It's taken my online presence to a whole new level. My followers love the creativity, and it's boosted my engagement.”`,
        avt: User1,
      },
      {
        key: 'David Rodriguez',
        name: 'David Rodriguez',
        job: 'Student & Content Creator',
        rate: 5,
        said: `“Being a content creator on YouTube, I wanted a unique avatar that stands out. Avatarist had me covered with its wide range of styles.”`,
        avt: User4,
      },
      {
        key: 'Natalie Attired',
        name: 'Natalie Attired',
        job: 'Student & Content Creator',
        rate: 5,
        said: `"The best part is that Avatarist is incredibly user-friendly. You don't need to be a tech expert to navigate the platform. It's so intuitive and easy to use, making the entire process a breeze. Really love this tool"`,
        avt: User7,
      },
    ],
  },
  {
    key: 2,
    users: [
      {
        key: 'Jaylen Smith',
        name: 'Jaylen Smith',
        job: 'Gamer & Streamer',
        rate: 5,
        said: `“As a streamer, my avatar is my brand. Avatarist gave me the freedom to design a character that represents my gaming style. It's been a hit on Twitch!”`,
        avt: User2,
      },
      {
        key: 'Laura Chen',
        name: 'Laura Chen',
        job: 'Freelance Artist',
        rate: 4,
        said: `“As an artist, I appreciate good design. Avatarist's user-friendly interface made it easy for me to customize avatars for my clients.”`,
        avt: User5,
      },
      {
        key: 'Nicole Anne Dime',
        name: 'Nicole Anne Dime',
        job: 'Freelance Artist',
        rate: 4,
        said: `“If you're looking for a hassle-free way to generate multiple avatars that truly reflect your unique personality, Avatarist is the way to go. I can't recommend it enough!"`,
        avt: User8,
      },
    ],
  },
  {
    key: 3,
    users: [
      {
        key: 'Emily Davis',
        name: 'Emily Davis',
        job: 'Marketing Manager',
        rate: 5,
        said: `“We integrated our AI avatar into our brand logo, and it's been a hit with our clients. It adds a personal touch to our brand that sets us apart.”`,
        avt: User3,
      },

      {
        key: 'Michael Anderson',
        name: 'Michael Anderson',
        job: 'Small Business Owner',
        rate: 4,
        said: `“Our AI avatar has become the face of our brand. It's professional, engaging, and it's helped us connect with our customers on a personal level.”`,
        avt: User6,
      },

      {
        key: 'Susan Socks',
        name: 'Susan Socks',
        job: 'Small Business Owner',
        rate: 4,
        said: `"I've always wanted to have a variety of avatars that represent me in different online platforms, but creating them from scratch was a time-consuming task. That's when I discovered Avatarist, and it completely changed the game for me!"`,
        avt: User9,
      },
    ],
  },
];

const groupsMobile = [
  {
    key: 1,
    users: [
      {
        key: 'Sarah Johnson',
        name: 'Sarah Johnson',
        job: 'Social Media Influencer',
        rate: 5,
        said: `“Avatarist is a game-changer! It's taken my online presence to a whole new level. My followers love the creativity, and it's boosted my engagement.”`,
        avt: User1,
      },
    ],
  },
  {
    key: 2,
    users: [
      {
        key: 'David Rodriguez',
        name: 'David Rodriguez',
        job: 'Student & Content Creator',
        rate: 5,
        said: `“Being a content creator on YouTube, I wanted a unique avatar that stands out. Avatarist had me covered with its wide range of styles.”`,
        avt: User4,
      },
    ],
  },
  {
    key: 3,
    users: [
      {
        key: 'Jaylen Smith',
        name: 'Jaylen Smith',
        job: 'Gamer & Streamer',
        rate: 5,
        said: `“As a streamer, my avatar is my brand. Avatarist gave me the freedom to design a character that represents my gaming style. It's been a hit on Twitch!”`,
        avt: User2,
      },
    ],
  },
];

export default function UsersSay() {
  const { isMobile } = useScreenSize();
  const groupsShowed = isMobile ? groupsMobile : groups;
  return (
    <Wrapper id="testimonials">
      <SubTitle>TESTIMONIALS</SubTitle>
      <CustomTitle>What our users say</CustomTitle>
      <Description>
        {`Don't take our word for it – listen to our thrilled avatars and their creators. Here's what they're saying:`}
      </Description>

      <BodyWrapper>
        <Shadow />
        {groupsShowed.map((group) => (
          <GroupsWrapper key={group.key}>
            {group.users.map((user, index) => (
              <UserCard key={user.key} gradient={index === 2}>
                <div>
                  <UserInfoWrapper>
                    <img src={user.avt} alt={user.key} />
                    <div>
                      <UserName>{user.name}</UserName>
                      <UserJob>{user.job}</UserJob>
                    </div>
                  </UserInfoWrapper>
                  <RatesWrapper>
                    {Array.from(Array(user.rate).keys()).map((star) => (
                      <Star key={user.key + star} />
                    ))}
                  </RatesWrapper>
                </div>
                <UserSaid>{user.said}</UserSaid>
              </UserCard>
            ))}
          </GroupsWrapper>
        ))}
      </BodyWrapper>
    </Wrapper>
  );
}
