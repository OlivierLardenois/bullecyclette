import { graphql, type HeadFC, type PageProps } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import CountdownTimer from "../components/countdownTimer";

import Layout from "../components/layout";
import { EVENT_DATE, SALES_DATE } from "../lib/const";
import ArrowBullet from "../components/arrowBullet";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import Video from "../components/video";
import Commitment from "../components/commitment";
import PersonCard from "../components/personCard";
import Preparation from "../components/preparation";
import Card from "../components/card";
import {
  BullecycletteSchedule,
  GuinguetteSmallSchedule,
} from "../components/schedule";

const BaladePage: React.FC<PageProps<Queries.BaladePageQuery>> = ({ data }) => {
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
    <Layout>
      <div className="space-y-24">
        <section className="max-w-6xl lg:mx-auto">
          <div className="grid md:grid-flow-row-dense md:grid-cols-3 ">
            <div className="md:col-span-2">
              <div className="grid grid-flow-row min-w-full">
                {bullecycletteImage && (
                  <GatsbyImage
                    image={bullecycletteImage}
                    alt={"bullecyclette"}
                  />
                )}
                <div className="mx-8 md:mr-0 xl:mx-0 space-y-4">
                  <ArrowBullet>
                    <h3 className="font-veteran-typewriter">
                      {t("balade.what.title")}
                    </h3>
                  </ArrowBullet>
                  <div className="grid md:grid-cols-2 md:space-x-4 font-veteran-typewriter">
                    <div className="text-justify whitespace-pre-line">
                      {t("balade.what.description.0.text")}
                    </div>
                    <div className="text-justify whitespace-pre-line">
                      {t("balade.what.description.1.text")}
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

        <section className="max-w-6xl mx-8 lg:mx-auto">
          <div className="grid md:grid-flow-row-dense md:grid-cols-3">
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

            <div className="md:col-span-2 flex justify-center">
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

        <section className="bg-blue-800 !mt-12 py-12">
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

        <section className="max-w-6xl mx-8 !mt-12 lg:mx-auto">
          <div className="grid md:grid-flow-row-dense md:grid-cols-2">
            <div className="grid grid-flow-row min-w-full">
              <ArrowBullet>
                <h3 className="font-veteran-typewriter">
                  {t("balade.road.title")}
                </h3>
              </ArrowBullet>
              <StaticImage
                src={`../images/road.png`}
                alt="road"
                placeholder="blurred"
                width={500}
                height={500}
                className="md:-mt-36"
              />
            </div>

            <div className="flex-col">
              <div className="w-56 h-26 flex mx-auto my-5">
                {kmRoadImage && (
                  <GatsbyImage image={kmRoadImage} alt={"km_road"} />
                )}
              </div>
              <div className="flex m-auto justify-center">
                {stepRoadImage && (
                  <GatsbyImage image={stepRoadImage} alt={"step_road"} />
                )}
              </div>
              <div className="flex m-auto justify-center">
                {descRoadImage && (
                  <GatsbyImage image={descRoadImage} alt={"step_road"} />
                )}
              </div>
              <div className="w-auto h-auto mx-auto my-2 justify-center">
                Les cyclistes de tout genre, de tout niveau et de tout âge
                peuvent y participer
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-8 lg:mx-auto">
          <Preparation />
        </section>

        <section className="max-w-6xl mx-8 lg:mx-auto">
          <PersonCard person="winegrowers"></PersonCard>
        </section>

        <section className="max-w-6xl mx-8 lg:mx-auto">
          <PersonCard person="artists"></PersonCard>
        </section>

        <section className="max-w-6xl mx-8 lg:mx-auto">
          <div className="grid md:grid-rows-2 md:grid-flow-col">
            <div className="row-span-4">
              <ArrowBullet>
                <h3 className="font-veteran-typewriter">
                  {t("balade.ticket.title")}
                </h3>
              </ArrowBullet>
              <p className="text-justify whitespace-pre-line">
                {t("balade.ticket.description")}
              </p>
            </div>
            <div className="md:col-span-2 md:row-span-1 m-auto">
              <CountdownTimer
                title={t("countdown-timer.label.day-before-event")}
                deadline={EVENT_DATE}
              />
            </div>
            <div className="md:col-span-2 md:row-span-1 m-auto">
              <CountdownTimer
                title={t("countdown-timer.label.day-before-ticketing")}
                deadline={SALES_DATE}
              />
            </div>
            <div className="md:col-span-2 md:row-span-2 m-auto justify-center">
              <StaticImage
                src="../images/ticket.png"
                alt="ticket"
                placeholder="blurred"
                width={500}
                height={300}
              />
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-8 lg:mx-auto">
          <ArrowBullet>
            <h3 className="font-veteran-typewriter">{t("commitment.title")}</h3>
          </ArrowBullet>
          <Commitment />
        </section>

        <section className="max-w-6xl mx-8 lg:mx-auto">
          <ArrowBullet>
            <h3 className="font-veteran-typewriter">
              {t("balade.video.title")}
            </h3>
          </ArrowBullet>
          <Video
            videoSrcURL="https://www.youtube.com/embed/gU_hqPdNylk?si=sa61AmrNZUG0nxlI"
            videoTitle="LSF"
            height="500"
            width="80%"
          />
        </section>
      </div>
    </Layout>
  );
};

export default BaladePage;

export const Head: HeadFC = () => <title>Home Page</title>;

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
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            width: 350
            height: 400
          )
        }
      }
    }
    kmRoadImages: allFile(
      filter: { relativePath: { in: ["road/km_en.png", "road/km_fr.png"] } }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            width: 200
            height: 100
          )
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
