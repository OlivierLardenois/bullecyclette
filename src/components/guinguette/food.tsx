import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

type FoodProvider = {
  index: number;
  name: string;
  url: string;
  phone: string;
  src?: string;
};

export const FOOD_PROVIDERS: FoodProvider[] = [
  {
    index: 0,
    name: "En Binôme",
    url: "aze.fr",
    phone: "01",
    src: "food/en-binome.png",
  },
  { index: 1, name: "Le Gooood Truck", url: "zer.fr", phone: "02" },
  {
    index: 2,
    name: "Le trio",
    url: "ert.fr",
    phone: "03",
    src: "food/le-trio.png",
  },
];

type FoodProps = Omit<FoodProvider, "src"> & { image?: IGatsbyImageData };

const Food: React.FC<FoodProps> = ({ index, name, phone, url, image }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-center max-w-80 space-y-4">
      <p className="bg-white px-2 rounded-md text-liberty text-center w-10/12 py-2">
        {name}
      </p>
      <p>{t(`guinguette.food.${index}`)}</p>
      <div className="grow">
        <p>{url}</p>
        <p>{phone}</p>
      </div>
      {image && <GatsbyImage image={image} alt={`${name} logo`} />}
    </div>
  );
};

export default Food;
