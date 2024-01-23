import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { ADDRESS, MAIL, PHONE } from "../lib/const";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t-2 border-black">
      <div className="flex flex-col max-w-6xl mx-auto space-y-12">
        <p className="text-cg-red">{t("footer.contact")}</p>
        <nav className="flex justify-between max-w-sm grow text-white ">
          <a
            href="https://www.instagram.com/la_bullecyclette?igsh=MXF2eGU3NW1sOWdndQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-liberty"
            aria-label="Champagne Chaléroux-Ghys instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a
            href="https://www.instagram.com/champagnechalerouxghys/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-liberty"
            aria-label="Champagne Chaléroux-Ghys instagram"
          >
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a
            href="https://www.instagram.com/champagnechalerouxghys/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-liberty"
            aria-label="Champagne Chaléroux-Ghys instagram"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </nav>
        <div className="flex justify-between items-center grow py-4 px-20 whitespace-pre-line bg-white text-cg-red rounded-3xl">
          <p className="text-center">{`${t("footer.mail")}\n${MAIL}`}</p>
          <p className="text-center">{`${t("footer.address")}\n${ADDRESS}`}</p>
          <p className="text-center">{`${t("footer.phone")}\n${PHONE}`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
