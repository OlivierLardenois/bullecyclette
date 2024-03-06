import { Link, graphql, type PageProps } from "gatsby";
import { Trans, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import CountdownTimer from "../components/countdownTimer";

import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import ArrowBullet from "../components/arrowBullet";
import Card from "../components/card";
import Commitment from "../components/commitment";
import Layout from "../components/layout";
import PersonCard from "../components/personCard";
import Preparation from "../components/preparation";
import {
  BullecycletteSchedule,
  GuinguetteSmallSchedule,
} from "../components/schedule";
import Video from "../components/video";
import { EVENT_DATE, SALES_DATE } from "../lib/const";

const BaladePage: React.FC<PageProps<Queries.BaladePageQuery>> = ({
  data,
  location,
}) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const bullecycletteImageFilter = data.bullecycletteImages.nodes.find(
    (node) => node.relativePath == `common/bullecyclette_${language}.png`,
  );
  const bullecycletteImage = bullecycletteImageFilter
    ? getImage(bullecycletteImageFilter.childImageSharp)
    : null;

  const stepRoadImageFilter = data.stepRoadImages.nodes.find(
    (node) => node.relativePath == `road/step_road_${language}.png`,
  );
  const stepRoadImage = stepRoadImageFilter
    ? getImage(stepRoadImageFilter.childImageSharp)
    : null;

  const kmRoadImageFilter = data.kmRoadImages.nodes.find(
    (node) => node.relativePath == `road/km_${language}.png`,
  );
  const kmRoadImage = kmRoadImageFilter
    ? getImage(kmRoadImageFilter.childImageSharp)
    : null;

  const descRoadImageFilter = data.descRoadImages.nodes.find(
    (node) => node.relativePath == `road/desc_road_${language}.png`,
  );
  const descRoadImage = descRoadImageFilter
    ? getImage(descRoadImageFilter.childImageSharp)
    : null;

  return (
    <Layout pageKey="balade" pathname={location.pathname}>
      <section className="flex justify-center pb-12">
        <div className="max-w-6xl grid md:grid-flow-row-dense md:grid-cols-3 ">
          <div className="md:col-span-2">
            <div className="grid grid-flow-row min-w-full">
              {bullecycletteImage && (
                <GatsbyImage image={bullecycletteImage} alt={"bullecyclette"} />
              )}
              <div className="mx-8 md:mr-0 xl:mx-0 space-y-4">
                <ArrowBullet>
                  <h3 className="font-veteran-typewriter">
                    {t("balade.what.title")}
                  </h3>
                </ArrowBullet>
                <div className="grid md:grid-cols-2 md:space-x-4 font-veteran-typewriter">
                  <div className="text-justify whitespace-pre-line">
                    <Trans i18nKey={"balade.what.description.0.text"} />
                  </div>
                  <div className="text-justify">
                    <Trans i18nKey={"balade.what.description.1.text"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 mx-auto md:m-auto">
            <Card>
              <StaticImage
                src={`../images/common/what.jpg`}
                alt="what"
                placeholder="blurred"
                transformOptions={{ cropFocus: "center" }}
                width={200}
                height={300}
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="flex justify-center py-12">
        <div className="max-w-6xl mx-8 grid md:grid-flow-row-dense md:grid-cols-3">
          <div className="m-auto">
            <Card>
              <StaticImage
                src={`../images/common/when.jpg`}
                alt="what"
                placeholder="blurred"
                width={300}
                height={500}
              />
            </Card>
          </div>

          <div className="md:col-span-2 flex justify-center py-12">
            <div className="grid grid-flow-row">
              <ArrowBullet>
                <h3 className="font-veteran-typewriter">
                  {t("balade.when.title")}
                </h3>
              </ArrowBullet>
              <StaticImage
                src="../images/common/date_fr.png"
                alt="date"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-liberty py-12">
        <div className="flex flex-col max-w-6xl mx-8 md:mx-auto space-y-12 bg-inherit">
          <ArrowBullet>
            <h3 className="font-veteran-typewriter">
              {t("balade.program.title")}
            </h3>
          </ArrowBullet>
          <BullecycletteSchedule />
          <GuinguetteSmallSchedule />
        </div>
      </section>

      <section className="flex flex-wrap justify-center py-12 space-y-12">
        <div className="max-w-6xl mx-8 w-full">
          <ArrowBullet>
            <h3 className="font-veteran-typewriter">
              {t("balade.road.title")}
            </h3>
          </ArrowBullet>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center max-w-6xl">
          <div className="md:w-7/12">
            <StaticImage src={`../images/road/road.png`} alt="road" />
          </div>

          <div className="flex-col md:w-5/12 text-center px-8 mt-8 md:mt-0 space-y-4">
            <div className="mx-auto w-3/5 max-w-80 md:max-w-56">
              {kmRoadImage && (
                <GatsbyImage image={kmRoadImage} alt={"km_road"} />
              )}
            </div>
            {stepRoadImage && (
              <GatsbyImage
                image={stepRoadImage}
                alt={"step_road"}
                className="w-11/12"
              />
            )}
            {descRoadImage && (
              <GatsbyImage image={descRoadImage} alt={"step_road"} />
            )}
            <p className="mx-auto font-veteran-typewriter text-sm">
              {t("balade.road.information")}
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center py-12">
        <div className="max-w-6xl mx-8 w-full">
          <Preparation />
        </div>
      </section>

      {/* <section className="flex justify-center py-12">
        <div className="max-w-6xl mx-8 w-full">
          <PersonCard person="winegrowers" />
        </div>
      </section> */}

      <section className="flex justify-center py-12">
        <div className="max-w-6xl mx-8 w-full">
          <PersonCard person="artists" />
        </div>
      </section>

      <section
        id="ticket"
        className="flex justify-center flex-wrap py-12 space-y-12"
      >
        <div className="max-w-6xl mx-8 w-full">
          <ArrowBullet>
            <h3>{t("balade.ticket.title")}</h3>
          </ArrowBullet>
        </div>
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-8 w-full space-y-8 gap-x-8">
          <p className="text-justify md:w-1/2 font-veteran-typewriter">
            <Trans i18nKey="balade.ticket.description">
              text <u>Si vous venez en groupe :</u> text
              <p className="text-white bg-red-600 inline-block">
                INFORMATIONS :
              </p>
              text
              <Link
                to="/"
                className="text-blue-800 underline decoration-blue-800"
              >
                içi
              </Link>
            </Trans>
          </p>
          <div className="flex flex-col space-y-12 items-center md:w-1/2">
            <CountdownTimer
              title={t("countdown-timer.label.day-before-event")}
              deadline={EVENT_DATE}
            />
            <CountdownTimer
              title={t("countdown-timer.label.day-before-ticketing")}
              deadline={SALES_DATE}
            />
            <a
              className="hover:opacity-50"
              href="https://my.weezevent.com/la-bullecyclette?_gl=1*1idejge*_gcl_au*Nzc0MzcwMTk1LjE3MDcxMjkyNTA.*_ga*ODEzMDEwMjUuMTcwNjg3MjA1Ng..*_ga_39H9VBFX7G*MTcwOTY2MzgxOS4xMy4xLjE3MDk2NjQwMTEuNjAuMC4w"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/common/ticket.png"
                alt="ticket"
                placeholder="blurred"
                className="max-w-sm"
              />
            </a>
            <p>{t("balade.redirect")}</p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-center py-12 space-y-12">
        <div className="max-w-6xl mx-8 w-full">
          <ArrowBullet>
            <h3 className="font-veteran-typewriter">{t("commitment.title")}</h3>
          </ArrowBullet>
        </div>
        <div className="max-w-6xl w-full">
          <Commitment />
        </div>
      </section>

      <section className="flex flex-wrap justify-center py-12 space-y-12">
        <div className="max-w-6xl mx-8 w-full">
          <ArrowBullet>
            <h3 className="font-veteran-typewriter">
              {t("balade.video.title")}
            </h3>
          </ArrowBullet>
        </div>
        <div className="max-w-6xl w-full">
          <Video
            videoSrcURL="https://www.youtube.com/embed/gU_hqPdNylk?si=sa61AmrNZUG0nxlI"
            videoTitle="LSF"
          />
        </div>
      </section>
    </Layout>
  );
};

export default BaladePage;

export const query = graphql`
  query BaladePage($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    bullecycletteImages: allFile(
      filter: {
        relativePath: {
          in: ["common/bullecyclette_en.png", "common/bullecyclette_fr.png"]
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
    stepRoadImages: allFile(
      filter: {
        relativePath: { in: ["road/step_road_en.png", "road/step_road_fr.png"] }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
    kmRoadImages: allFile(
      filter: { relativePath: { in: ["road/km_en.png", "road/km_fr.png"] } }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
    descRoadImages: allFile(
      filter: {
        relativePath: { in: ["road/desc_road_en.png", "road/desc_road_fr.png"] }
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
