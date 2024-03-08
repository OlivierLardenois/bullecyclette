import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import EntityCard from ".";
import { EXHIBITORS } from "../../lib/const";
import ArrowBullet from "../arrowBullet";

const Exhibitors: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      <ArrowBullet dark>
        <h3 className="font-veteran-typewriter">{t("exhibitors.title")}</h3>
      </ArrowBullet>
      <div className="grid grid-cols-[repeat(auto-fill,208px)] gap-6 justify-around">
        {EXHIBITORS.map(({ index, name, url }) => {
          return (
            <EntityCard title={name}>
              <div className="space-y-4 font-veteran-typewriter grow">
                <p>{t(`guinguette.exhibitors.${index}`)}</p>
                <div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-80"
                  >
                    {url}
                  </a>
                </div>
              </div>
            </EntityCard>
          );
        })}
      </div>
    </div>
  );
};

export default Exhibitors;
