import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/ProductDetails')) {
      document.title = 'Product Details';
    } else {
      
      switch (location.pathname) {
        case '/':
          document.title = 'Gadget Heaven';
          break;
        case '/Dashboard':
          document.title = 'Dashboard';
          break;
        case '/Statistics':
          document.title = 'Statistics';
          break;
        case '/Reviwe':
          document.title = 'Review';
          break;
        default:
          document.title = 'Gadget Heaven';
          break;
      }
    }
  }, [location]);

  return null;
};

const Mainlayout = () => {
  return (
    <div className='bg-gray-200'>
      <Toaster />
      <PageTitle />
      <Navbar />
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
