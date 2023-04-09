import React from "react";
import { Header, Footer } from ".";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Header className="sticky top-0 z-50" />
      <main className="flex-grow">{children}</main>
      <Footer className="fixed bottom-0 left-0 right-0 z-50" />
    </div>
  );
};

export default Layout;
