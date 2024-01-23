import * as React from "react";
import Header from "./header";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative grow">{children}</main>
    </>
  );
};

export default Layout;
