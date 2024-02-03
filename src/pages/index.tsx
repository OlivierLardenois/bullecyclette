import { graphql, type HeadFC, type PageProps } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Button from "../components/button";
import Card from "../components/card";
import Carousel from "../components/carousel";
import Layout from "../components/layout";

const NAV_PAGES = [
  {
    href: "/",
    imgPath: "index/logo-viellit.png",
    key: "la-balade",
  },
  {
    href: "/",
    imgPath: "index/guinguette.jpg",
    key: "la-guinguette",
  },
  {
    href: "/",
    imgPath: "index/date.png",
    key: "infos",
  },
];

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const { t } = useTranslation();

  const carouselCards = data.carouselImages.nodes.reduce<
    {
      alt: string;
      image: IGatsbyImageData;
    }[]
  >((acc, node) => {
    const image = getImage(node.childImageSharp);

    return image ? acc.concat({ alt: "", image }) : acc;
  }, []);

  const partnerLogos = data.partnerLogos.nodes.reduce<
    {
      alt: string;
      image: IGatsbyImageData;
    }[]
  >((acc, node) => {
    const image = getImage(node.childImageSharp);

    return image ? acc.concat({ alt: "", image }) : acc;
  }, []);

  return (
    <Layout>
      <div className="space-y-24">
        <StaticImage
          src={`../images/index/hero.jpeg`}
          alt={t("")}
          placeholder="blurred"
          layout="fullWidth"
          className="max-w-7xl mx-auto"
        />

        <section className="flex flex-col justify-between mx-8 space-y-4">
          <div className="max-w-7xl mx-auto w-full">
            <StaticImage
              src={`../images/index/bullecyclette.png`}
              alt={t("")}
              placeholder="blurred"
              layout="constrained"
              width={900}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto">
            <div className="md:w-5/12 font-veteran-typewriter text-justify space-y-6">
              <h3>{t("homePage.presentation.title")}</h3>
              <p>{t("homePage.presentation.text")}</p>
              <Button dark>
                <Link to={"/"}>{t("homePage.ticket")}</Link>
              </Button>
            </div>
            <div className="mt-6 md:my-auto md:w-6/12">
              <StaticImage
                src={`../images/index/route.png`}
                alt={t("")}
                placeholder="blurred"
                layout="constrained"
              />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/gU_hqPdNylk?si=D19aq113rJI9o4h0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
          ></iframe>
        </section>
        <section className="flex flex-wrap justify-center gap-x-20 gap-y-10 lg:justify-between max-w-6xl mx-auto font-veteran-typewriter">
          {NAV_PAGES.map(({ href, imgPath, key }) => {
            const node = data.navImages.nodes.find(
              (node) => node.relativePath === imgPath,
            );
            if (!node) return null;

            const image = getImage(node.childImageSharp);
            return image ? (
              <div className="space-y-4">
                <Link to={href} className="hover:opacity-75 ">
                  <Card>
                    <GatsbyImage
                      image={image}
                      alt={t(`homePage.nav.${key}.alt`)}
                    />
                  </Card>
                </Link>
                <h3 className="text-center max-w-64">
                  {t(`homePage.nav.${key}.title`)}
                </h3>
              </div>
            ) : null;
          })}
        </section>
        <section className="text-center">
          <div className="inline-flex items-center space-x-4 p-6 rounded-lg bg-white ">
            <StaticImage
              src={`../images/index/star.png`}
              alt={t("")}
              placeholder="blurred"
              layout="constrained"
              width={20}
              className="shrink-0"
            />
            <p className="text-cg-red text-2xl">
              {t("homePage.placesAvailable")}
            </p>
            <StaticImage
              src={`../images/index/star.png`}
              alt={t("")}
              placeholder="blurred"
              layout="constrained"
              width={20}
              className="shrink-0"
            />
          </div>
        </section>
        <section className="flex flex-col max-w-7xl mx-auto space-y-6">
          <Carousel cards={carouselCards} />
          <div className="mx-auto">
            <Button>
              <Link to={"/"}>{t("homePage.gallery")}</Link>
            </Button>
          </div>
        </section>
        <section className="flex flex-col space-y-4">
          <h2 className="max-w-5xl mx-auto">{t("homePage.partners")}</h2>
          <div className="bg-white">
            <div className="flex flex-wrap justify-center max-w-5xl mx-auto py-8 gap-x-12 gap-y-10">
              {partnerLogos.map(({ alt, image }) => {
                return <GatsbyImage image={image} alt={alt} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query IndexPage($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    navImages: allFile(
      filter: {
        relativePath: {
          in: [
            "index/logo-viellit.png"
            "index/guinguette.jpg"
            "index/date.png"
          ]
        }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(aspectRatio: 1)
        }
      }
    }
    carouselImages: allFile(
      filter: {
        relativePath: {
          in: [
            "gallery/photo-1.jpg"
            "gallery/photo-2.jpg"
            "gallery/photo-3.jpg"
            "gallery/photo-4.jpg"
          ]
        }
      }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            aspectRatio: 1
            transformOptions: { cropFocus: CENTER }
          )
        }
      }
    }
    partnerLogos: allFile(filter: { dir: { regex: "/images/partners/" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(height: 60)
        }
      }
    }
  }
`;
