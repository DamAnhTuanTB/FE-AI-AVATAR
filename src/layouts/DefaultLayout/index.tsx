import { Outlet } from 'react-router-dom';
import { ContentWrapper, DefaultLayoutWrapper } from './style';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DefaultLayout() {
  return (
    <DefaultLayoutWrapper>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      {/* <Footer /> */}
    </DefaultLayoutWrapper>
  );
}
