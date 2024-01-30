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
      <section className="max-w-6xl mx-auto my-10">
        <PersonCard
          alt=""
          image={t("artists.image")}
          title={t("artists.title")}
          attribut="artists.persons"
        ></PersonCard>
      </section>

      <section className="max-w-6xl mx-auto my-10">
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
