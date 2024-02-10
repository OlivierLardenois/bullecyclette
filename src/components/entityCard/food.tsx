import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import EntityCard from ".";
import { FOOD_PROVIDERS } from "../../lib/const";
import ArrowBullet from "../arrowBullet";

const Food: React.FC = () => {
  const { t } = useTranslation();

  const data = useStaticQuery<Queries.FoodCardQuery>(graphql`
    query FoodCard {
      foodProvidersImages: allFile(
        filter: {
          relativePath: { in: ["food/en-binome.png", "food/le-trio.png"] }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  return (
    <div className="space-y-12">
      <ArrowBullet dark>
        <h3 className="font-veteran-typewriter">{t("food.title")}</h3>
      </ArrowBullet>
      <div className="flex flex-wrap justify-around text-justify gap-12">
        {FOOD_PROVIDERS.map(({ index, name, phone, url, src }) => {
          const childImageSharp = data.foodProvidersImages.nodes.find(
            ({ relativePath }) => relativePath === src,
          )?.childImageSharp;
          const image = childImageSharp ? getImage(childImageSharp) : undefined;
          return (
            <EntityCard title={name} image={image}>
              <div className="space-y-4 font-veteran-typewriter grow">
                <p>{t(`guinguette.food.${index}`)}</p>
                <div className="text-white">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                  {phone && <p>{phone}</p>}
                </div>
              </div>
            </EntityCard>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
