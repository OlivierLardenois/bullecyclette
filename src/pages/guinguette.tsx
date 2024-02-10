import { HeadFC, PageProps, graphql } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import ArrowBullet from "../components/arrowBullet";
import Commitment from "../components/commitment";
import CountdownTimer from "../components/countdownTimer";
import Food, { FOOD_PROVIDERS } from "../components/guinguette/food";
import Layout from "../components/layout";
import PersonCard from "../components/personCard";
import Preparation from "../components/preparation";
import { GuinguetteSchedule } from "../components/schedule";
import { EVENT_DATE } from "../lib/const";

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
      <section className="flex justify-center bg-gradient-to-b from-[#314782] to-liberty py-12 text-white">
        <div className="flex flex-col md:flex-row md:justify-between space-y-24 md:space-y-0 mx-8 max-w-7xl text-justify">
          <div className="md:w-5/12 space-y-4">
            <ArrowBullet dark>
              <h3 className="font-veteran-typewriter">
                {t("guinguette.presentation.what")}
              </h3>
            </ArrowBullet>
            <p>{t("guinguette.presentation.text")}</p>
            <div className="text-center md:text-start">
              <CountdownTimer
                title={t("countdown-timer.label.day-before-event")}
                deadline={EVENT_DATE}
              />
            </div>
          </div>
          <div className="md:w-6/12 space-y-4">
            <ArrowBullet dark>
              <h3 className="font-veteran-typewriter">
                {t("guinguette.presentation.when")}
              </h3>
            </ArrowBullet>
            <StaticImage
              src={"../images/dates/29-june.png"}
              alt={t("")}
              placeholder="blurred"
            />
          </div>
        </div>
      </section>
      <section className="bg-liberty py-12 text-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <ArrowBullet dark>
            <h3 className="font-veteran-typewriter">
              {t("guinguette.program.title")}
            </h3>
          </ArrowBullet>
          <div className="bg-liberty">
            <div className="max-w-6xl mx-auto [&>*]:max-w-4xl bg-inherit font-veteran-typewriter">
              <GuinguetteSchedule />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center mx-8 py-12">
        <div className="max-w-7xl w-full">
          <Preparation />
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-12">
        <section className="max-w-6xl mx-8 lg:mx-auto">
          <PersonCard person="artists" />
        </section>
      </section>
      <section className="bg-liberty py-12">
        <div className="max-w-6xl mx-auto">
          <ArrowBullet dark>
            <h3 className="font-veteran-typewriter">
              {t("guinguette.exhibitors.title")}
            </h3>
          </ArrowBullet>
        </div>
      </section>
      <section className="bg-liberty py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <ArrowBullet dark>
            <h3 className="font-veteran-typewriter">
              {t("guinguette.food.title")}
            </h3>
          </ArrowBullet>
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
        </div>
      </section>

      <section className="bg-liberty py-12">
        <div className="max-w-6xl mx-auto">
          <ArrowBullet dark>
            <h3 className="font-veteran-typewriter">
              {t("guinguette.drink.title")}
            </h3>
          </ArrowBullet>
        </div>
      </section>
      <section className="bg-liberty py-12">
        <div className="max-w-6xl mx-auto">
          <ArrowBullet dark>
            <h3 className="font-veteran-typewriter">{t("commitment.title")}</h3>
          </ArrowBullet>
          <Commitment />
        </div>
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
