import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import ArrowBullet from "./arrowBullet";
import { useTranslation } from "gatsby-plugin-react-i18next";

export type PersonCardProps = {
  title: string;
  alt: string;
  image: string;
  attribut: string;
};

const PersonCard: React.FC<PersonCardProps> = ({
  title,
  //alt,
  //image,
  attribut,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <ArrowBullet desc={title} color="black" bgcolor="white" />
      </div>

      <div className="flex justify-center">
        <StaticImage
          src={"../images/artists.png"}
          alt="ticket"
          layout="constrained"
          width={600}
          height={200}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="mx-2">
          <div className="grid bg-white w-full items-center justify-center rounded-lg m-auto text-center text-blue-800  text-xl">
            {t(attribut + ".0.name")}
          </div>

          <div className="gridw-full items-center justify-center m-auto text-center my-2  text-base">
            {t(attribut + ".0.description")}
          </div>

          <div className="gridw-full items-center justify-center m-auto text-center my-2 text-sm">
            <a
              href={t(attribut + ".0.url")}
              className="text-blue-800 underline underline-offset-auto"
            >
              {t(attribut + ".0.shorturl")}
            </a>
          </div>

          <div className="gridw-full flex justify-center my-2">
            <StaticImage
              src={"../images/jeannick_liebert.jpg"}
              alt="ticket"
              layout="constrained"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mx-2">
          <div className="grid bg-white w-full items-center justify-center rounded-lg m-auto text-center text-blue-800  text-xl">
            {t(attribut + ".1.name")}
          </div>

          <div className="gridw-full items-center justify-center m-auto text-center my-2  text-base">
            {t(attribut + ".1.description")}
          </div>

          <div className="gridw-full items-center justify-center m-auto text-center my-2 text-sm">
            <a
              href={t(attribut + ".1.url")}
              className="text-blue-800 underline underline-offset-auto"
            >
              {t(attribut + ".1.shorturl")}
            </a>
          </div>

          <div className="gridw-full flex justify-center my-2">
            <StaticImage
              src={"../images/tonneliers.jpg"}
              alt="ticket"
              layout="constrained"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mx-2">
          <div className="grid bg-white w-full items-center justify-center rounded-lg m-auto text-center text-blue-800  text-xl">
            {t(attribut + ".2.name")}
          </div>

          <div className="gridw-full items-center justify-center m-auto text-center my-2  text-base">
            {t(attribut + ".2.description")}
          </div>

          <div className="gridw-full items-center justify-center m-auto text-center my-2 text-sm">
            <a
              href={t(attribut + ".2.url")}
              className="text-blue-800 underline underline-offset-auto"
            >
              {t(attribut + ".2.shorturl")}
            </a>
          </div>

          <div className="gridw-full flex justify-center my-2">
            <StaticImage
              src={"../images/swing_shady.jpg"}
              alt="ticket"
              layout="constrained"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mx-2">
          <div className="grid bg-white w-full items-center justify-center rounded-lg m-auto text-center text-blue-800  text-xl">
            {t(attribut + ".3.name")}
          </div>

          <div className="gridw-full items-center justify-center m-auto text-center my-2  text-base">
            {t(attribut + ".3.description")}
          </div>

          <div className="gridw-full items-center justify-center m-auto text-center my-2 text-sm">
            <a
              href={t(attribut + ".3.url")}
              className="text-blue-800 underline underline-offset-auto"
            >
              {t(attribut + ".3.shorturl")}
            </a>
          </div>

          <div className="gridw-full flex justify-center my-2">
            <StaticImage
              src={"../images/bal_jojo.jpg"}
              alt="ticket"
              layout="constrained"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
