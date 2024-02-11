import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

const Commitment: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        className={`bg-[url('../images/commitments/commitment_1.jpg')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white h-1/2 w-3/5 rounded-lg m-auto text-center">
          <div className="size-auto font-medium mx-2">
            {t("commitment.steps.0.title")}
          </div>
          <div className="size-auto">
            <hr className="size-1/5 border-dark-sienna border-1 mx-auto" />
          </div>
          <div className="size-auto font-light mx-2">
            {t("commitment.steps.0.description")}
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('../images/commitments/commitment_2.jpg')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white h-1/2 w-3/5 rounded-lg m-auto text-center">
          <div className="size-auto font-medium mx-2">
            {t("commitment.steps.1.title")}
          </div>
          <div className="size-auto">
            <hr className="size-1/5 border-dark-sienna border-1 mx-auto" />
          </div>
          <div className="size-auto font-light mx-2">
            {t("commitment.steps.1.description")}
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('../images/commitments/commitment_3.jpg')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white h-1/2 w-3/5 rounded-lg m-auto text-center">
          <div className="size-auto  font-medium mx-2">
            {t("commitment.steps.2.title")}
          </div>
          <div className="size-auto">
            <hr className="size-1/5 border-dark-sienna border-1 mx-auto" />
          </div>
          <div className="size-auto font-light mx-2">
            {t("commitment.steps.2.description")}
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('../images/commitments/commitment_4.jpg')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white h-1/2 w-3/5 rounded-lg m-auto text-center">
          <div className="size-auto font-medium mx-2">
            {t("commitment.steps.3.title")}
          </div>
          <div className="size-auto">
            <hr className="size-1/5 border-dark-sienna border-1 mx-auto" />
          </div>
          <div className="size-auto font-light mx-2">
            {t("commitment.steps.3.description")}
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('../images/commitments/commitment_5.jpg')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white h-1/2 w-3/5 rounded-lg m-auto text-center">
          <div className="size-auto font-medium mx-2">
            {t("commitment.steps.4.title")}
          </div>
          <div className="size-auto">
            <hr className="size-1/5 border-dark-sienna border-1 mx-auto" />
          </div>
          <div className="size-auto font-light mx-2">
            {t("commitment.steps.4.description")}
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('../images/commitments/commitment_6.jpg')] bg-cover bg-center flex size-full h-60 justify-center`}
      >
        <div className="grid bg-white h-1/2 w-3/5 rounded-lg m-auto text-center">
          <div className="size-auto font-medium mx-2">
            {t("commitment.steps.5.title")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
