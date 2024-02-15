import { StaticImage } from "gatsby-plugin-image";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import ArrowBullet from "./arrowBullet";
import Button from "./button";
import Card from "./card";

const Preparation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full space-y-12 font-veteran-typewriter">
      <ArrowBullet>
        <h3 className="font-veteran-typewriter">{t("preparation.title")}</h3>
      </ArrowBullet>
      <div className="flex flex-wrap justify-center text-justify gap-12">
        <div className="flex flex-col max-w-64">
          <Card>
            <StaticImage
              src={`../images/preparation/bike.png`}
              alt={t(`preparation.steps.0.alt`)}
              placeholder="blurred"
              aspectRatio={1}
            />
          </Card>
          <h3 className="text-center py-3">{t(`preparation.steps.0.title`)}</h3>
          <p className="flex-1 mb-6">{t(`preparation.steps.0.text`)}</p>
          <div className="mx-auto">
            <Button>
              <Link to={"/"}>{t("preparation.steps.0.button")}</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col max-w-64">
          <Card>
            <StaticImage
              src={`../images/preparation/accessories.png`}
              alt={t(`preparation.steps.1.alt`)}
              placeholder="blurred"
              aspectRatio={1}
            />
          </Card>
          <h3 className="text-center py-3">{t(`preparation.steps.1.title`)}</h3>
          <p className="flex-1 mb-6">{t(`preparation.steps.1.text`)}</p>
          <div className="mx-auto">
            <Button>
              <Link to={"/"}>{t("preparation.steps.1.button")}</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col max-w-64">
          <Card>
            <StaticImage
              src={`../images/preparation/flask.png`}
              alt={t(`preparation.steps.2.alt`)}
              placeholder="blurred"
              aspectRatio={1}
            />
          </Card>
          <h3 className="text-center py-3">{t(`preparation.steps.2.title`)}</h3>
          <p className="flex-1 mb-6">{t(`preparation.steps.2.text`)}</p>
          <div className="mx-auto">
            <Button>
              <Link to={"/"}>{t("preparation.steps.2.button")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preparation;
