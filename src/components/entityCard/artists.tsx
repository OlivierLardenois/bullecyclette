import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import EntityCard from ".";
import { ARTISTS } from "../../lib/const";

const Artists: React.FC = () => {
  const { t } = useTranslation();

  const data = useStaticQuery<Queries.ArtistCardQuery>(graphql`
    query ArtistCard {
      ArtistImages: allFile(
        filter: {
          relativePath: {
            in: ["artists/barboozes.png", "artists/jazz-of-france.png"]
          }
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
    <div className="flex flex-wrap justify-around text-justify gap-12">
      {ARTISTS.map(({ index, name, url, src }) => {
        const childImageSharp = data.ArtistImages.nodes.find(
          ({ relativePath }) => relativePath === src,
        )?.childImageSharp;
        const image = childImageSharp ? getImage(childImageSharp) : undefined;
        return (
          <EntityCard title={name} image={image}>
            <div className="space-y-4 font-veteran-typewriter grow">
              <p>{t(`guinguette.artists.${index}`)}</p>
              <div className="text-white">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </div>
            </div>
          </EntityCard>
        );
      })}
    </div>
  );
};

export default Artists;
