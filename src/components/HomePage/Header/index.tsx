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
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';

const links = [
  { title: 'Why AI Avatar', href: '#why-choose-avatar' },
  { title: 'How it works?', href: '#how-it-works' },
  { title: 'FAQs', href: '#faq' },
  { title: 'Testimonials', href: '#testimonials' },
];

export default function Header() {
  const navigate = useNavigate();
  return (
    <ContainerWrapper>
      <Wrapper>
        <Logo src={LogoSrc} alt="logo" />

        <MenusLink>
          {links.map((link) => (
            <MenuLink key={link.title} href={link.href}>
              {link.title}
            </MenuLink>
          ))}
        </MenusLink>

        <GetStartedWrapper
          onClick={() => {
            navigate(ROUTES.HOME);
          }}
        >
          <p>Get Started</p>
          <ArrowRight />
        </GetStartedWrapper>
      </Wrapper>
    </ContainerWrapper>
  );
}
