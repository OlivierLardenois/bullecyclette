import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import ArrowBullet from "../components/arrowBullet";
import Commitment from "../components/commitment";
import CountdownTimer from "../components/countdownTimer";
import Drink from "../components/drinks";
import Artists from "../components/entityCard/artists";
import Exhibitors from "../components/entityCard/exhibitors";
import Food from "../components/entityCard/food";
import Layout from "../components/layout";
import { GuinguettePreparation } from "../components/preparation";
import { EVENT_DATE } from "../lib/const";

const GuinguettePage: React.FC<PageProps<Queries.GuinguettePageQuery>> = ({
  location,
  data,
}) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const guinguetteImageFilter = data.guinguetteImages.nodes.find(
    (node) => node.relativePath == `guinguette-hero-${language}.png`,
  );
  const guinguetteImage = guinguetteImageFilter
    ? getImage(guinguetteImageFilter.childImageSharp)
    : null;

  const guinguetteDateFilter = data.guinguetteDateImages.nodes.find(
    (node) => node.relativePath == `dates/29-june-${language}.png`,
  );
  const guinguetteDateImage = guinguetteDateFilter
    ? getImage(guinguetteDateFilter.childImageSharp)
    : null;

  const schedulerImageFilter = data.schedulerImages.nodes.find(
    (node) =>
      node.relativePath == `schedule/guinguette-schedule-${language}.png`,
  );
  const schedulerImage = schedulerImageFilter
    ? getImage(schedulerImageFilter.childImageSharp)
    : null;

  const schedulerMDImageFilter = data.schedulerMDImages.nodes.find(
    (node) =>
      node.relativePath == `schedule/guinguette-schedule-${language}-md.png`,
  );
  const schedulerMDImage = schedulerMDImageFilter
    ? getImage(schedulerMDImageFilter.childImageSharp)
    : null;

  return (
    <Layout pageKey="guinguette" pathname={location.pathname}>
      <div>
        {guinguetteImage && (
          <GatsbyImage
            backgroundColor="#3F5DA7"
            image={guinguetteImage}
            alt={"bullecyclette"}
          />
        )}
      </div>
      <section className="flex justify-center bg-liberty py-12 text-white">
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

            {guinguetteDateImage && (
              <GatsbyImage image={guinguetteDateImage} alt={"bullecyclette"} />
            )}
          </div>
        </div>
      </section>

      <section className="flex justify-center py-12 bg-liberty">
        <div className="max-w-7xl mx-8 w-full space-y-12">
          <ArrowBullet dark>
            <h3 className="font-veteran-typewriter">
              {t("guinguette.program.title")}
            </h3>
          </ArrowBullet>
          <div className="hidden md:block max-w-3xl mx-auto">
            {schedulerImage && (
              <GatsbyImage
                image={schedulerImage}
                alt={"bullecyclette"}
                className="bg-liberty"
              />
            )}
          </div>
          <div className="block md:hidden max-w-xs mx-auto">
            {schedulerMDImage && (
              <GatsbyImage
                image={schedulerMDImage}
                alt={"bullecyclette"}
                className="bg-liberty"
              />
            )}
          </div>
        </div>
      </section>

      <section className="flex justify-center py-12">
        <div className="max-w-7xl mx-8 w-full">
          <GuinguettePreparation />
        </div>
      </section>

      <section className="flex justify-center py-12">
        <div className="max-w-7xl mx-8 w-full">
          <Artists />
        </div>
      </section>

      <section className="flex justify-center bg-liberty py-12">
        <div className="max-w-7xl mx-8 w-full">
          <Exhibitors />
        </div>
      </section>

      <section className="flex justify-center bg-liberty py-12">
        <div className="max-w-7xl mx-8 w-full">
          <Food />
        </div>
      </section>

      <section className="flex justify-center bg-liberty py-12">
        <div className="max-w-7xl mx-8 w-full">
          <Drink />
        </div>
      </section>

      <section className="flex flex-wrap justify-center bg-liberty py-12 space-y-12">
        <div className="max-w-7xl mx-8 w-full">
          <ArrowBullet dark>
            <h3 className="font-veteran-typewriter">{t("commitment.title")}</h3>
          </ArrowBullet>
        </div>
        <div className="max-w-7xl w-full">
          <Commitment />
        </div>
      </section>
    </Layout>
  );
};

export default GuinguettePage;

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
    guinguetteImages: allFile(
      filter: {
        relativePath: {
          in: ["guinguette-hero-en.png", "guinguette-hero-fr.png"]
        }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    guinguetteDateImages: allFile(
      filter: {
        relativePath: { in: ["dates/29-june-en.png", "dates/29-june-fr.png"] }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    schedulerImages: allFile(
      filter: {
        relativePath: {
          in: [
            "schedule/guinguette-schedule-fr.png"
            "schedule/guinguette-schedule-en.png"
          ]
        }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    schedulerMDImages: allFile(
      filter: {
        relativePath: {
          in: [
            "schedule/guinguette-schedule-fr-md.png"
            "schedule/guinguette-schedule-en-md.png"
          ]
        }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
