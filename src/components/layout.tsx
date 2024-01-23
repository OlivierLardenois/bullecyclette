import * as React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="relative grow">{children}</main>
    </>
  );
};

export default Layout;
