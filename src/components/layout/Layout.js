import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollAnimation from '../ScrollAnimation';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const location = useLocation();

  return (
    <div className="main-page">
      <div className="progress-line" />
      <Navbar />
      <ScrollToTop />
      <ScrollAnimation key={location.pathname} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
