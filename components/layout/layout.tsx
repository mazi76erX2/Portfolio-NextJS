import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode; // Specifies that children can be any valid React element or text
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
