import React, { ReactNode } from 'react';
import { Root } from './styles';
import HomePageHeader from '@/components/HomePage/Header';
import HomePageFooter from '@/components/HomePage/Footer';

interface PropsType {
  children: ReactNode;
}

export default function Layout({ children }: PropsType) {
  return (
    <Root>
      <HomePageHeader />
      {children}
      <HomePageFooter />
    </Root>
  );
}
