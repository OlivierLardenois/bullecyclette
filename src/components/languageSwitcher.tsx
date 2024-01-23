import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import * as React from "react";

const LanguageSwitcher: React.FC = () => {
  const { originalPath } = useI18next();

  const classname = "hover:opacity-75";

  return (
    <div className="flex space-x-4">
      <Link to={originalPath} language="fr" className={classname}>
        <StaticImage
          src={`../images/fr-flag.png`}
          alt={`French flag`}
          placeholder="blurred"
          layout="fixed"
          width={32}
          height={32}
        />
      </Link>
      <Link to={originalPath} language="en" className={classname}>
        <StaticImage
          src={`../images/en-flag.png`}
          alt={`United Kingdom flag`}
          placeholder="blurred"
          layout="fixed"
          width={32}
          height={32}
        />
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
