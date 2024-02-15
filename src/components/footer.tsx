import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { ADDRESS, MAIL, PHONE } from "../lib/const";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex justify-center py-12">
      <div className="flex flex-col max-w-6xl mx-8 space-y-12">
        <p className="text-cg-red text-center">{t("footer.contact")}</p>
        <div className="flex justify-center">
          <nav className="flex justify-center flex-wrap gap-20 gap-y-12 max-w-sm text-white ">
            <a
              href="https://www.instagram.com/la_bullecyclette?igsh=MXF2eGU3NW1sOWdndQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-liberty"
              aria-label="La Bullecyclette instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="4x" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556269170342"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-liberty"
              aria-label="La Bullecyclette Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="4x" />
            </a>

            <a
              href={`mailto:${MAIL}`}
              className="hover:text-liberty"
              aria-label="La Bullecyclette mail"
            >
              <FontAwesomeIcon icon={faEnvelope} size="4x" />
            </a>
          </nav>
        </div>
        <div className="flex flex-wrap gap-10 justify-center py-4 px-16 whitespace-pre-line bg-white text-cg-red rounded-3xl">
          <p className="min-w-52 text-center">
            <span className="underline uppercase">{`${t("footer.mail")}\n`}</span>
            {MAIL}
          </p>
          <p className="min-w-52 text-center">
            <span className="underline uppercase">{`${t("footer.address")}\n`}</span>
            {ADDRESS}
          </p>
          <p className="min-w-52 text-center">
            <span className="underline uppercase">{`${t("footer.phone")}\n`}</span>
            {PHONE}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
