import { HomepageContainer } from '@/pages/HomePage/styles';
import React from 'react';
import LogoSrc from '@/assets/images/logo.svg';
import {
  ContainerWrapper,
  GetStartedWrapper,
  Logo,
  MenuLink,
  MenusLink,
  Wrapper,
} from './style';
import ArrowRight from '@/components/Icons/ArrowRight';

const links = [
  { title: 'Why AI Avatar', href: '' },
  { title: 'How it works?', href: '' },
  { title: 'FAQs', href: '' },
  { title: 'Testimonials', href: '' },
];

export default function Header() {
  return (
    <ContainerWrapper>
      <Wrapper>
        <Logo src={LogoSrc} alt="logo" />

        <MenusLink>
          {links.map((link) => (
            <MenuLink key={link.title}>{link.title}</MenuLink>
          ))}
        </MenusLink>

        <GetStartedWrapper>
          <p>Get Started</p>
          <ArrowRight />
        </GetStartedWrapper>
      </Wrapper>
    </ContainerWrapper>
  );
}
