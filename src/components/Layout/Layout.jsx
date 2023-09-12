import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import FormSection from '../FormSection';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FormSection />
      <Footer />
    </>
  );
};

export default Layout;
