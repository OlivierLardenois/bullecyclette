import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import { Trans, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

import ArrowBullet from "../components/arrowBullet";
import Layout from "../components/layout";

const InformationPage: React.FC<PageProps<Queries.InformationPageQuery>> = ({
  data,
}) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const bullecycletteImageFilter = data.bullecycletteImages.nodes.find(
    (node) => node.relativePath == `common/bullecyclette_${language}.png`,
  );
  const bullecycletteImage = bullecycletteImageFilter
    ? getImage(bullecycletteImageFilter.childImageSharp)
    : null;

  return (
    <Layout>
      <div className="space-y-24">
        <section className="max-w-6xl lg:mx-auto">
          <div className="grid md:grid-flow-row-dense md:grid-cols-2 md:grid-rows-3">
            <div className="grid grid-flow-row order-2 md:order-first md:row-span-3">
              <div className="mx-8 space-y-4">
                <ArrowBullet>
                  <h3 className="font-veteran-typewriter">
                    {t("information.details.title")}
                  </h3>
                </ArrowBullet>
                <div className="font-veteran-typewriter ml-4  text-justify text-sm">
                  <Trans i18nKey="information.details.text.0.title">
                    <p className="text-white bg-red-600 inline-block pl-2">
                      text
                    </p>
                  </Trans>
                  <Trans>
                    <ul className="list-disc p-6">
                      {Array.from({ length: 9 }, (v, i) =>
                        t(`information.details.text.0.list.${i}`),
                      ).map((text) => (
                        <li>{text}</li>
                      ))}
                    </ul>
                  </Trans>

                  <Trans i18nKey="information.details.text.1.title">
                    <p className="text-white bg-sky-800 inline-block pl-2">
                      text
                    </p>
                  </Trans>
                  <Trans i18nKey="information.details.text.1.description">
                    text
                    <Link
                      to="/"
                      className="text-blue-800 underline decoration-blue-800"
                    >
                      text
                    </Link>
                  </Trans>

                  {[2, 3, 4, 5].map((number) => (
                    <p className="mt-4">
                      <Trans
                        i18nKey={"information.details.text." + number + ".text"}
                      >
                        <p className="text-white bg-sky-800 inline-block pl-2">
                          text
                        </p>
                        text
                      </Trans>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid place-items-center order-first md:order-2">
              <div className="w-2/3">
                {bullecycletteImage && (
                  <GatsbyImage
                    image={bullecycletteImage}
                    alt={"bullecyclette"}
                  />
                )}
              </div>
              <div className="w-4/5 p-2 bg-white">
                <StaticImage
                  src={`../images/information/information.jpg`}
                  alt="information"
                />
              </div>
            </div>

            <div className="order-last font-veteran-typewriter text-justify text-sm mx-8 space-y-4 mt-8">
              <Trans i18nKey="information.details.text.6.title">
                <p className="text-white bg-red-600 inline-block pl-2">text</p>
              </Trans>
              <Trans>
                <ul className="list-disc p-6">
                  {Array.from({ length: 2 }, (v, i) =>
                    t(`information.details.text.6.list.${i}`),
                  ).map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </Trans>

              <Trans i18nKey="information.details.text.7.text">
                <p className="text-white bg-sky-800 inline-block pl-2">text</p>
                text
              </Trans>
            </div>
          </div>
          <div className="flex text-center font-veteran-typewriter text-sm mt-8 md:mt-2 mx-8">
            <Trans
              i18nKey="information.details.faq"
              className="size-3/4"
            ></Trans>
          </div>
        </section>

        <section className="max-w-6xl lg:mx-auto">
          <div className="mx-8 space-y-4">
            <ArrowBullet>
              <h3 className="font-veteran-typewriter">
                {t("information.access.title")}
              </h3>
            </ArrowBullet>

            <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto">
              <div className="md:w-5/12 font-veteran-typewriter space-y-6">
                <Trans i18nKey="information.access.text" />
                <StaticImage
                  src={`../images/information/acces.png`}
                  alt={t("")}
                  placeholder="blurred"
                  layout="constrained"
                />
              </div>
              <div className="mt-6 w-1 bg-white md:my-auto md:w-6/12">
                PLAN GOOGLE
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl lg:mx-auto">
          <div className="mx-8 space-y-4">
            <ArrowBullet>
              <h3 className="font-veteran-typewriter">
                {t("information.parking.title")}
              </h3>
            </ArrowBullet>

            <div className="flex flex-col justify-between max-w-5xl mx-auto">
              <div className="font-veteran-typewriter space-y-6">
                <Trans i18nKey="information.parking.text" />
              </div>
              <div className="mt-6 h-full bg-white md:my-auto">
                PLAN PARKING
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl lg:mx-auto">
          <div className="mx-8 space-y-4">
            <ArrowBullet>
              <h3 className="font-veteran-typewriter">
                {t("information.bike.title")}
              </h3>
            </ArrowBullet>
          </div>
        </section>

        <section className="max-w-6xl lg:mx-auto">
          <div className="mx-8 space-y-4">
            <ArrowBullet>
              <h3 className="font-veteran-typewriter">
                {t("information.clothes.title")}
              </h3>
            </ArrowBullet>
          </div>
        </section>

        <section className="max-w-6xl lg:mx-auto">
          <div className="mx-8 space-y-4">
            <ArrowBullet>
              <h3 className="font-veteran-typewriter">
                {t("information.accommodation.title")}
              </h3>
            </ArrowBullet>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InformationPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query InformationPage($language: String!) {
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
  }
`;
