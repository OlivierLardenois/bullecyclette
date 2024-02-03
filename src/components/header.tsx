import { StaticImage } from "gatsby-plugin-image";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import LanguageSwitcher from "./languageSwitcher";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="border-b-2 border-black">
      <div className="flex justify-between max-w-7xl mx-auto p-4">
        <Link to={"/"}>
          <StaticImage
            src={`../images/logo.png`}
            alt={t("common.logo")}
            placeholder="blurred"
            layout="fixed"
            height={100}
          />
        </Link>
        <div className="flex flex-col justify-between">
          <LanguageSwitcher />
          <HeadersLinks />
        </div>
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
          <li
            key={page.key}
            className="hover:opacity-50 font-veteran-typewriter text-xl"
          >
            <Link to={page.to}>{t(page.key)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
