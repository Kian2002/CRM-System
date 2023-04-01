import React, { FC } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
