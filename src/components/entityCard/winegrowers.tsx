import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import EntityCard from ".";
import { WINEGROWERS } from "../../lib/const";
import ArrowBullet from "../arrowBullet";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Winegrowers: React.FC = () => {
  const { t } = useTranslation();

  const data = useStaticQuery<Queries.WinegrowersQuery>(graphql`
    query Winegrowers {
      winegrowersLabel: allFile(
        filter: { relativePath: { in: ["winegrowers/winegrowers_fr.png"] } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const image = getImage(data.winegrowersLabel.nodes[0].childImageSharp);

  return (
    <div className="space-y-12">
      <ArrowBullet>
        <h3 className="font-veteran-typewriter">{t("winegrowers.title")}</h3>
      </ArrowBullet>
      {image && (
        <div className="max-w-md mx-auto">
          <GatsbyImage image={image} alt={"alt"} />
        </div>
      )}
      <div className="flex flex-wrap justify-around text-justify gap-12">
        {WINEGROWERS.map(({ name, url, phone, address }) => {
          return (
            <div className="w-52">
              <EntityCard title={name}>
                <div className="space-y-3 font-veteran-typewriter grow">
                  <p className="whitespace-pre-line">{address}</p>
                  <p>{phone}</p>
                  <div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-liberty"
                    >
                      {url}
                    </a>
                  </div>
                </div>
              </EntityCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Winegrowers;
