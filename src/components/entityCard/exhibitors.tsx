import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import EntityCard from ".";
import { EXHIBITORS } from "../../lib/const";

const Exhibitors: React.FC = () => {
  const { t } = useTranslation();

  const data = useStaticQuery<Queries.ExhibitorsCardQuery>(graphql`
    query ExhibitorsCard {
      ExhibitorsImages: allFile(
        filter: {
          relativePath: {
            in: ["Exhibitorss/barboozes.png", "Exhibitorss/jazz-of-france.png"]
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
      {EXHIBITORS.map(({ index, name, url, src }) => {
        const childImageSharp = data.ExhibitorsImages.nodes.find(
          ({ relativePath }) => relativePath === src,
        )?.childImageSharp;
        const image = childImageSharp ? getImage(childImageSharp) : undefined;
        return (
          <EntityCard title={name} image={image}>
            <div className="space-y-4 font-veteran-typewriter grow">
              <p>{t(`guinguette.exhibitors.${index}`)}</p>
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

export default Exhibitors;
