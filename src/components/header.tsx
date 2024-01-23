import * as React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

const Header: React.FC = () => {
  return (
    <header className="border-b-2 border-black">
      <div className="flex justify-between max-w-6xl mx-auto">
        <p>logo</p>
        <HeadersLinks />
      </div>
    </header>
  );
};

const Pages = [{ key: "homePage.title", to: "/" }];

const HeadersLinks = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        {Pages.map((page) => (
          <li key={page.key} className="hover:text-mainDarkBrown">
            <Link to={page.to}>{t(page.key)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
