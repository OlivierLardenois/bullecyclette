import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import * as React from "react";
import ArrowBullet from "./arrowBullet";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";

export type PersonCardProps = {
  person: "artists" | "winegrowers";
};

type PersonProps = {
  alt: string;
  image: IGatsbyImageData;
};

const PersonTitle: React.FC<PersonProps> = ({ alt, image }) => {
  return (
    <div className="flex justify-center">
      <GatsbyImage image={image} alt={alt} />
    </div>
  );
};

const PersonImage: React.FC<PersonProps> = ({ alt, image }) => {
  return (
    <div className="grid w-full flex justify-center my-2">
      <GatsbyImage image={image} alt={alt} />
    </div>
  );
};

function customPersonCard(
  person: "artists" | "winegrowers",
  title: boolean,
  imageName?: string,
) {
  const data = useStaticQuery<Queries.PersonCardQuery>(graphql`
    query PersonCard {
      artistsImageTitle: allFile(
        filter: {
          relativePath: {
            in: ["artists/artists_fr.png", "artists/artists_en.png"]
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 600, height: 200, layout: CONSTRAINED)
          }
        }
      }
      winegrowersImageTitle: allFile(
        filter: {
          relativePath: {
            in: [
              "winegrowers/winegrowers_fr.png"
              "winegrowers/winegrowers_en.png"
            ]
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 600, height: 200, layout: CONSTRAINED)
          }
        }
      }
      artistsImages: allFile(filter: { dir: { regex: "/images/artists/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED)
          }
        }
      }
      winegrowersImages: allFile(
        filter: { dir: { regex: "/images/winegrowers/" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED)
          }
        }
      }
    }
  `);

  const { language } = useI18next();

  if (title) {
    const personTitleImageFilter = data[`${person}ImageTitle`].nodes.find(
      (node) => node.relativePath == `${person}/${person}_${language}.png`,
    );
    const personTitleImage = personTitleImageFilter
      ? getImage(personTitleImageFilter.childImageSharp)
      : null;

    return personTitleImage ? (
      <PersonTitle image={personTitleImage} alt="" />
    ) : (
      <></>
    );
  } else {
    const personImageFilter = data[`${person}Images`].nodes.find(
      (node) => node.relativePath == `${imageName}`,
    );
    const personImage = personImageFilter
      ? getImage(personImageFilter.childImageSharp)
      : null;

    return personImage ? <PersonImage image={personImage} alt="" /> : <></>;
  }
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <ArrowBullet>
          <h3 className="font-veteran-typewriter">{t(person + ".title")}</h3>
        </ArrowBullet>
      </div>
      {customPersonCard(person, true)}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="mx-2">
          <div className="grid bg-white w-full rounded-lg m-auto text-center text-blue-800  text-xl">
            {t(person + ".persons.0.name")}
          </div>

          <div className="grid w-full m-auto text-center my-2 text-base whitespace-pre-line">
            {t(person + ".persons.0.description")}
          </div>

          <div className="grid w-full m-auto text-center my-2 text-sm">
            <a
              href={t(person + ".persons.0.url")}
              className="text-blue-800 underline underline-offset-auto"
            >
              {t(person + ".persons.0.shorturl")}
            </a>
          </div>

          {customPersonCard(
            person,
            false,
            t(person + ".persons.0.image").toString(),
          )}
        </div>

        <div className="mx-2">
          <div className="grid bg-white w-full rounded-lg m-auto text-center text-blue-800  text-xl">
            {t(person + ".persons.1.name")}
          </div>

          <div className="grid w-full m-auto text-center my-2 text-base whitespace-pre-line">
            {t(person + ".persons.1.description")}
          </div>

          <div className="grid w-full m-auto text-center my-2 text-sm">
            <a
              href={t(person + ".persons.1.url")}
              className="text-blue-800 underline underline-offset-auto"
            >
              {t(person + ".persons.1.shorturl")}
            </a>
          </div>

          {customPersonCard(
            person,
            false,
            t(person + ".persons.1.image").toString(),
          )}
        </div>

        <div className="mx-2">
          <div className="grid bg-white w-full rounded-lg m-auto text-center text-blue-800  text-xl">
            {t(person + ".persons.2.name")}
          </div>

          <div className="grid w-full m-auto text-center my-2 text-base whitespace-pre-line">
            {t(person + ".persons.2.description")}
          </div>

          <div className="grid w-full m-auto text-center my-2 text-sm">
            <a
              href={t(person + ".persons.2.url")}
              className="text-blue-800 underline underline-offset-auto"
            >
              {t(person + ".persons.2.shorturl")}
            </a>
          </div>

          {customPersonCard(
            person,
            false,
            t(person + ".persons.2.image").toString(),
          )}
        </div>

        <div className="mx-2">
          <div className="grid bg-white w-full rounded-lg m-auto text-center text-blue-800  text-xl">
            {t(person + ".persons.3.name")}
          </div>

          <div className="grid w-full m-auto text-center my-2 text-base whitespace-pre-line">
            {t(person + ".persons.3.description")}
          </div>

          <div className="grid w-full m-auto text-center my-2 text-sm">
            <a
              href={t(person + ".persons.3.url")}
              className="text-blue-800 underline underline-offset-auto"
            >
              {t(person + ".persons.3.shorturl")}
            </a>
          </div>

          {customPersonCard(
            person,
            false,
            t(person + ".persons.3.image").toString(),
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
