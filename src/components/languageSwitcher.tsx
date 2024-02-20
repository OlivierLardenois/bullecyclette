import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

const LanguageSwitcher: React.FC = () => {
  const { t } = useTranslation();
  const { originalPath } = useI18next();

  const classname = "hover:opacity-75";

  return (
    <div className="flex space-x-4 justify-center">
      <Link to={originalPath} language="fr" className={classname}>
        <StaticImage
          src={`../images/fr-flag.png`}
          alt={t("common.fr-flag-alt")}
          placeholder="blurred"
          layout="fixed"
          width={32}
          height={32}
        />
      </Link>
      {/* <Link to={originalPath} language="en" className={classname}>
        <StaticImage
          src={`../images/en-flag.png`}
          alt={t("common.en-flag-alt")}
          placeholder="blurred"
          layout="fixed"
          width={32}
          height={32}
        />
      </Link> */}
    </div>
  );
};

export default LanguageSwitcher;
