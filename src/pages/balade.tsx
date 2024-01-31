import { graphql, type HeadFC, type PageProps } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import CountdownTimer from "../components/countdownTimer";

import Layout from "../components/layout";
import { EVENT_DATE, SALES_DATE } from "../lib/const";
import ArrowBullet from "../components/arrowBullet";
import { StaticImage } from "gatsby-plugin-image";
import Video from "../components/video";
import Commitment from "../components/commitment";
import PersonCard from "../components/personCard";

const BaladePage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="max-w-6xl mx-auto md:my-5">
        <div className="grid md:grid-flow-row-dense md:grid-cols-3">
          <div className="md:col-span-2 flex justify-center">
            <div className="grid grid-flow-row flex justify-center min-w-full">
              <StaticImage
                src="../images/bullecyclette.png"
                alt="bullecyclette"
                placeholder="blurred"
              />
              <ArrowBullet
                desc={t("balade.whatTitle")}
                color="black"
                bgcolor="white"
              />
              <div className="grid md:grid-cols-2 md:space-x-4">
                <div className="text-justify whitespace-pre-line">
                  {t("balade.whatDescription.0.text")}
                </div>
                <div className="text-justify whitespace-pre-line">
                  {t("balade.whatDescription.1.text")}
                </div>
              </div>
            </div>
          </div>

          <div className="m-auto">
            <StaticImage
              src={`../images/what.jpg`}
              alt="what"
              placeholder="blurred"
              layout="fixed"
              width={200}
              height={300}
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto md:my-5">
        <PersonCard
          alt=""
          image={t("artists.image")}
          title={t("artists.title")}
          attribut="artists.persons"
        ></PersonCard>
      </section>

      <section className="max-w-6xl mx-auto md:my-10">
        <div className="grid grid-rows-2 grid-flow-col">
          <div className="row-span-4">
            <ArrowBullet
              desc={t("balade.ticketTitle")}
              color="black"
              bgcolor="white"
            />
            <p className="text-justify">{t("balade.ticketDescription")}</p>
          </div>
          <div className="col-span-2 row-span-1 m-auto">
            <CountdownTimer
              title={t("common.counterLabel")}
              deadline={EVENT_DATE}
            />
          </div>
          <div className="col-span-2 row-span-1 m-auto">
            <CountdownTimer
              title={t("balade.ticketCounterLabel")}
              deadline={SALES_DATE}
            />
          </div>
          <div className="col-span-2 row-span-2 m-auto  justify-center">
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

      <section className="max-w-6xl mx-auto my-10">
        <ArrowBullet
          desc={t("commitment.title")}
          color="black"
          bgcolor="white"
        />
        <Commitment />
      </section>

      <section className="max-w-6xl mx-auto my-10">
        <ArrowBullet
          desc={t("balade.videoTitle")}
          color="black"
          bgcolor="white"
        />
        <Video
          videoSrcURL="https://www.youtube.com/embed/gU_hqPdNylk?si=sa61AmrNZUG0nxlI"
          videoTitle="LSF"
          height="500"
          width="80%"
        />
      </section>
    </Layout>
  );
};

export default BaladePage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
