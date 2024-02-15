import { StaticImage } from "gatsby-plugin-image";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import LanguageSwitcher from "./languageSwitcher";

type HeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation();

  return (
    <header>
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
        <div className="hidden md:flex md:flex-col md:justify-between md:items-end">
          <LanguageSwitcher />
          <HeadersLinks />
        </div>
        <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

const Pages = [
  { key: "homePage.title", to: "/" },
  { key: "balade.title", to: "/balade" },
  { key: "guinguette.title", to: "/guinguette" },
];

const HeadersLinks = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="flex space-x-8">
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

type HamburgerMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }: HamburgerMenuProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex md:hidden z-10 items-center">
      <div
        className={`${
          isMenuOpen ? "fixed right-4 top-[3.4rem]" : ""
        } z-10 space-y-2 cursor-pointer`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`block w-8 h-0.5 bg-white duration-500 ${
            isMenuOpen && "rotate-45 translate-y-[10px]"
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-white duration-500 ${
            isMenuOpen && "opacity-0"
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-white duration-500 ${
            isMenuOpen && "-rotate-45 -translate-y-[10px]"
          }`}
        ></span>
      </div>
      <nav
        className={`fixed inset-0 bg-liberty h-screen transition-transform ease-in-out duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-center items-center h-full">
          <ul className="flex flex-col space-y-12 h-full max-h-[32rem] text-center text-4xl p-6">
            {Pages.map((page) => (
              <li
                key={page.key}
                className="hover:opacity-50 font-veteran-typewriter text-3xl"
              >
                <Link to={page.to}>{t(page.key)}</Link>
              </li>
            ))}
            <li key={"LanguageSwitcher"}>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
