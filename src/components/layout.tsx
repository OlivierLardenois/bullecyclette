import * as React from "react";

import Footer from "./footer";
import Header from "./header";
import Seo from "./seo";
import { useTranslation } from "gatsby-plugin-react-i18next";

type LayoutProps = {
  pageKey: string;
  pathname: string;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children, pageKey, pathname }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <div className={`${isMenuOpen ? "h-screen overflow-hidden" : ""}`}>
      <Seo
        title={t(`${pageKey}.seo.title`)}
        description={t(`${pageKey}.seo.description`)}
        pathname={pathname}
      />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="relative grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
