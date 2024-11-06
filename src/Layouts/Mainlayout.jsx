import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Link, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const PageTitle = () => {
const location = useLocation();  
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Home';
        break;
      case '/about':
        document.title = 'About Us';
        break;
      case '/contact':
        document.title = 'Contact Us';
        break;
      default:
        document.title = 'My Awesome App';
        break;
    }
  }, [location]);

  return null;
};
const Mainlayout = () => {
    return (
        <div className='bg-gray-200'>
            <Toaster />
            <div className="">
            <Navbar />
            </div>
            <div className="min-h-[calc(100vh-288px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Mainlayout;