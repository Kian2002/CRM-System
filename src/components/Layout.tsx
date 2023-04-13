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
      <main className="overflow-auto min-h-[calc(100vh-114px)]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
