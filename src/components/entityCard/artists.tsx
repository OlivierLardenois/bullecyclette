import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import EntityCard from ".";
import { ARTISTS } from "../../lib/const";
import ArrowBullet from "../arrowBullet";

const Artists: React.FC = () => {
  const { t } = useTranslation();

  const data = useStaticQuery<Queries.ArtistCardQuery>(graphql`
    query ArtistCard {
      ArtistImages: allFile(
        filter: { relativePath: { in: ["artists/spireight-sound-system.jpg"] } }
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
      <ArrowBullet>
        <h3 className="font-veteran-typewriter">{t("artists.title")}</h3>
      </ArrowBullet>
      <div className="flex flex-wrap justify-around text-justify gap-12">
        {ARTISTS.map(({ index, name, url, src }) => {
          const childImageSharp = data.ArtistImages.nodes.find(
            ({ relativePath }) => relativePath === src,
          )?.childImageSharp;
          const image = childImageSharp ? getImage(childImageSharp) : undefined;
          return (
            <div className="w-96">
              <EntityCard title={name} image={image}>
                <div className="space-y-4 font-veteran-typewriter grow">
                  <p>{t(`guinguette.artists.${index}`)}</p>
                  <div className="text-liberty">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {url}
                    </a>
                  </div>
                </div>
              </EntityCard>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Artists;
