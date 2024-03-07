import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { DRINK_PROVIDERS } from "../lib/const";
import ArrowBullet from "./arrowBullet";

const Drink: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      <ArrowBullet dark>
        <h3 className="font-veteran-typewriter">{t("drink.title")}</h3>
      </ArrowBullet>
      <div className="space-y-4">
        <p className="text-white font-veteran-typewriter text-xl">
          {t("drink.description")}
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-6 justify-around">
          {DRINK_PROVIDERS.map(({ name, city }) => {
            return (
              <div className="flex flex-col items-center text-liberty bg-white p-2 rounded-lg">
                <p className="font-semibold text-lg">{name}</p>
                <p className="italic text-sm">{city}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Drink;
