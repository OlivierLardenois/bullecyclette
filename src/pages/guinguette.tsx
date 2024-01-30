import { HeadFC, PageProps, graphql } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Food, { FOOD_PROVIDERS } from "../components/guinguette/food";
import Layout from "../components/layout";
import Preparation from "../components/preparation";
import { GuinguetteSchedule } from "../components/schedule";

const GuinguettePage: React.FC<PageProps<Queries.GuinguettePageQuery>> = ({
  data,
}) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div>
        <StaticImage
          src={`../images/guinguette-hero.jpg`}
          alt={t(`guinguette.hero-alt`)}
          placeholder="blurred"
        />
      </div>
      <section className="flex justify-between max-w-6xl mx-auto ">
        <div className="w-5/12">
          <h2>{t("guinguette.presentation.what")}</h2>
          <p>{t("guinguette.presentation.text")}</p>
        </div>
        <div className="w-6/12">
          <h2>{t("guinguette.presentation.when")}</h2>
          <StaticImage
            src={"../images/dates/29-june.png"}
            alt={t("")}
            placeholder="blurred"
          />
        </div>
      </section>
      <section className="bg-liberty">
        <div className="max-w-6xl mx-auto">
          <h2>{t("guinguette.program.title")}</h2>
          <div className="bg-liberty">
            <div className="max-w-6xl mx-auto [&>*]:max-w-4xl bg-inherit">
              <GuinguetteSchedule />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <Preparation />
      </section>
      <section className="max-w-6xl mx-auto">
        <h2>{t("guinguette.artists.title")}</h2>
      </section>
      <section className="max-w-6xl mx-auto">
        <h2>{t("guinguette.exhibitors.title")}</h2>
      </section>
      <section className="max-w-6xl mx-auto">
        <h2>{t("guinguette.food.title")}</h2>
        <div className="flex justify-between">
          {FOOD_PROVIDERS.map(({ index, name, phone, url, src }) => {
            const childImageSharp = data.foodProvidersImages.nodes.find(
              ({ relativePath }) => relativePath === src,
            )?.childImageSharp;

            const image = childImageSharp
              ? getImage(childImageSharp)
              : undefined;

            return (
              <Food
                image={image}
                index={index}
                name={name}
                phone={phone}
                url={url}
              />
            );
          })}
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <h2>{t("guinguette.drink.title")}</h2>
      </section>
      <section className="max-w-6xl mx-auto">
        <h2>{t("guinguette.commitments.title")}</h2>
      </section>
    </Layout>
  );
};

export default GuinguettePage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query GuinguettePage($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
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
`;
