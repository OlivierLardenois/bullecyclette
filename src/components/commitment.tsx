import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

const Commitment: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        className={`bg-[url('../images/fr-flag.png')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white flex h-1/2 w-3/5 items-center justify-center rounded-lg m-auto text-center">
          <div className="size-auto justify-center font-medium mx-2">
            {t("commitment.steps.0.title")}
          </div>
          <div className="size-auto">
            <hr className="size-1/5 border-black border-1 mx-auto" />
          </div>
          <div className="size-auto justify-center font-light mx-2">
            {t("commitment.steps.0.desc")}
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('../images/ticket.png')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white flex h-1/2 w-3/5 items-center justify-center rounded-lg m-auto text-center">
          <div className="size-auto justify-center font-medium mx-2">
            {t("commitment.steps.1.title")}
          </div>
          <div className="size-auto">
            <hr className="size-1/5 border-black border-1 mx-auto" />
          </div>
          <div className="size-auto justify-center font-light mx-2">
            {t("commitment.steps.1.desc")}
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('../images/en-flag.png')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white flex h-1/2 w-3/5 items-center justify-center rounded-lg m-auto text-center">
          <div className="size-auto justify-center font-medium mx-2">
            {t("commitment.steps.2.title")}
          </div>
          <div className="size-auto">
            <hr className="size-1/5 border-black border-1 mx-auto" />
          </div>
          <div className="size-auto justify-center font-light mx-2">
            {t("commitment.steps.2.desc")}
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('../images/icon.png')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white flex h-1/2 w-3/5 items-center justify-center rounded-lg m-auto text-center">
          <div className="size-auto justify-center font-medium mx-2">
            {t("commitment.steps.3.title")}
          </div>
          <div className="size-auto">
            <hr className="size-1/5 border-black border-1 mx-auto" />
          </div>
          <div className="size-auto justify-center font-light mx-2">
            {t("commitment.steps.3.desc")}
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('../images/fr-flag.png')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white flex h-1/2 w-3/5 items-center justify-center rounded-lg m-auto text-center">
          <div className="size-auto justify-center font-medium mx-2">
            {t("commitment.steps.4.title")}
          </div>
          <div className="size-auto">
            <hr className="size-1/5 border-black border-1 mx-auto" />
          </div>
          <div className="size-auto justify-center font-light mx-2">
            {t("commitment.steps.4.desc")}
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('../images/fr-flag.png')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white flex h-1/2 w-3/5 items-center justify-center rounded-lg m-auto text-center">
          <div className="size-auto justify-center font-medium mx-2">
            {t("commitment.steps.5.title")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
