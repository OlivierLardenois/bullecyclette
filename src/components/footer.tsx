import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { ADDRESS, MAIL, PHONE } from "../lib/const";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t-2 border-dark-sienna">
      <div className="flex flex-col max-w-6xl mx-auto text-center space-y-12">
        <p className="text-cg-red">{t("footer.contact")}</p>
        <div>
          <nav className="flex justify-between mx-auto max-w-sm text-white ">
            <a
              href="https://www.instagram.com/la_bullecyclette?igsh=MXF2eGU3NW1sOWdndQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-liberty"
              aria-label="La Bullecyclette instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-liberty"
              aria-label="
            "
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-liberty"
              aria-label="
            "
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
          </nav>
        </div>
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
