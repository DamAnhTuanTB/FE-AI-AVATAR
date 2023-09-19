import React from 'react';
import {
  BodyWrapper,
  CustomTitle,
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
import User1 from '@/assets/images/home-page/user-1.svg';
import User2 from '@/assets/images/home-page/user-2.svg';
import User3 from '@/assets/images/home-page/user-3.svg';
import User4 from '@/assets/images/home-page/user-4.svg';
import User5 from '@/assets/images/home-page/user-5.svg';
import User6 from '@/assets/images/home-page/user-6.svg';
import User7 from '@/assets/images/home-page/user-7.svg';
import User8 from '@/assets/images/home-page/user-8.svg';
import User9 from '@/assets/images/home-page/user-9.svg';
import Star from '@/components/Icons/Star';

const users = [
  {
    key: 'Sarah Johnson',
    name: 'Sarah Johnson',
    job: 'Social Media Influencer',
    rate: 5,
    said: `“The AI Avatar Maker is a game-changer! It's taken my online presence to a whole new level. My followers love the creativity, and it's boosted my engagement.”`,
    avt: User1,
  },
  {
    key: 'Jaylen Smith',
    name: 'Jaylen Smith',
    job: 'Gamer & Streamer',
    rate: 5,
    said: `“As a streamer, my avatar is my brand. The AI Avatar Maker gave me the freedom to design a character that represents my gaming style. It's been a hit on Twitch!”`,
    avt: User2,
  },
  {
    key: 'Emily Davis',
    name: 'Emily Davis',
    job: 'Marketing Manager',
    rate: 5,
    said: `“We integrated our AI avatar into our brand logo, and it's been a hit with our clients. It adds a personal touch to our brand that sets us apart.”`,
    avt: User3,
  },
  {
    key: 'David Rodriguez',
    name: 'David Rodriguez',
    job: 'Student & Content Creator',
    rate: 5,
    said: `“Being a content creator on YouTube, I wanted a unique avatar that stands out. The AI Avatar Maker had me covered with its wide range of styles.”`,
    avt: User4,
  },
  {
    key: 'Laura Chen',
    name: 'Laura Chen',
    job: 'Freelance Artist',
    rate: 4,
    said: `“As an artist, I appreciate good design. The AI Avatar Maker's user-friendly interface made it easy for me to customize avatars for my clients.”`,
    avt: User5,
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
    key: 'Natalie Attired',
    name: 'Natalie Attired',
    job: 'Student & Content Creator',
    rate: 5,
    said: `““Being a content creator on YouTube, I wanted a unique avatar that stands out. The AI Avatar Maker had me covered with its wide range of styles.”`,
    avt: User7,
  },
  {
    key: 'Nicole Anne Dime',
    name: 'Nicole Anne Dime',
    job: 'Freelance Artist',
    rate: 4,
    said: `“As an artist, I appreciate good design. The AI Avatar Maker's user-friendly interface made it easy for me to customize avatars for my clients.”`,
    avt: User8,
  },
  {
    key: 'Susan Socks',
    name: 'Susan Socks',
    job: 'Small Business Owner',
    rate: 4,
    said: `“Our AI avatar has become the face of our brand. It's professional, engaging, and it's helped us connect with our customers on a personal level.”`,
    avt: User9,
  },
];

export default function UsersSay() {
  return (
    <Wrapper>
      <SubTitle>TESTIMONIALS</SubTitle>
      <CustomTitle>What our users say</CustomTitle>
      <Description>
        {`Don't take our word for it – listen to our thrilled avatars and their creators. Here's what they're saying:`}
      </Description>

      <BodyWrapper>
        <Shadow />
        {users.map((user, index) => (
          <UserCard key={user.key} gradient={index + 1 >= 7}>
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
      </BodyWrapper>
    </Wrapper>
  );
}
