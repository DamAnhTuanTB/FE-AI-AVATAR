import React, { ReactNode, useEffect } from 'react';
import { Root } from './styles';
import HomePageHeader from '@/components/HomePage/Header';
import HomePageFooter from '@/components/HomePage/Footer';

interface PropsType {
  children: ReactNode;
}

export default function Layout({ children }: PropsType) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Root>
      <HomePageHeader />
      {children}
      <HomePageFooter />
    </Root>
  );
}
