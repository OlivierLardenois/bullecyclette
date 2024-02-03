import * as React from "react";

import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className={`${isMenuOpen ? "h-screen overflow-hidden" : ""}`}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="relative grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
