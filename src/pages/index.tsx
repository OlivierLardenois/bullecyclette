import { graphql, type PageProps } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Button from "../components/button";
import Card from "../components/card";
import Carousel from "../components/carousel";
import Layout from "../components/layout";
import Video from "../components/video";

const NAV_PAGES = [
  {
    href: "/balade",
    imgPath: "index/logo-viellit.png",
    key: "la-balade",
  },
  {
    href: "/guinguette",
    imgPath: "index/guinguette.jpg",
    key: "la-guinguette",
  },
  {
    href: "/",
    imgPath: "index/date.png",
    key: "infos",
  },
];

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({
  data,
  location,
}) => {
  const { t } = useTranslation();
  const { language } = useI18next();

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

  const bullecycletteImageFilter = data.bullecycletteImages.nodes.find(
    (node) => node.relativePath == `common/bullecyclette_${language}.png`,
  );
  const bullecycletteImage = bullecycletteImageFilter
    ? getImage(bullecycletteImageFilter.childImageSharp)
    : null;

  return (
    <Layout pageKey="homePage" pathname={location.pathname}>
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
            {bullecycletteImage && (
              <GatsbyImage image={bullecycletteImage} alt={"bullecyclette"} />
            )}
          </div>
          <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto">
            <div className="md:w-5/12 font-veteran-typewriter text-justify space-y-6">
              <h3>{t("homePage.presentation.title")}</h3>
              <p>{t("homePage.presentation.text")}</p>
              <Button dark>
                <Link to={"/balade#ticket"}>{t("homePage.ticket")}</Link>
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
          <Video
            videoSrcURL="https://www.youtube.com/embed/gU_hqPdNylk?si=D19aq113rJI9o4h0"
            videoTitle="La Bullecyclette"
          />
        </section>
        <section className="flex flex-wrap justify-center gap-x-20 gap-y-10 lg:justify-between max-w-6xl mx-auto">
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
                  <Link to={href} className="hover:opacity-75">
                    {t(`homePage.nav.${key}.title`)}
                  </Link>
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
            {/* <Button>
              <Link to={"/"}>{t("homePage.gallery")}</Link>
            </Button> */}
          </div>
        </section>
        <section className="flex flex-col space-y-4">
          <h1 className="max-w-7xl mx-auto">{t("homePage.partners")}</h1>
          <div className="bg-white">
            <div className="flex flex-wrap justify-center max-w-7xl mx-auto py-8 gap-x-12 gap-y-10">
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
    partnerLogos: allFile(
      filter: { dir: { regex: "/images/partners/" } }
      sort: { base: ASC }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(height: 60)
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
          gatsbyImageData(placeholder: BLURRED, width: 900)
        }
      }
    }
  }
`;
