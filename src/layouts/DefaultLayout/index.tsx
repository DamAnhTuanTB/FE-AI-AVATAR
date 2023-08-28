import { Outlet } from 'react-router-dom';
import { DefaultLayoutWrapper } from './style';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DefaultLayout() {
  return (
    <DefaultLayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
    </DefaultLayoutWrapper>
  );
}
