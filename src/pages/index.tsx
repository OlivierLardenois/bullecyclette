import { graphql, type HeadFC, type PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Card, { CardProps } from "../components/card";
import Carousel from "../components/carousel";
import Layout from "../components/layout";

const NAV_PAGES = [
  {
    href: "/",
    imgPath: "en-flag.png",
    imgAltKey: "",
  },
  {
    href: "/",
    imgPath: "fr-flag.png",
    imgAltKey: "",
  },
];

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const { t } = useTranslation();

  const carouselCards = data.carouselImages.nodes.reduce<CardProps[]>(
    (acc, node) => {
      const image = getImage(node.childImageSharp);

      return image ? acc.concat({ alt: "", image }) : acc;
    },
    [],
  );

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
      <section className="flex justify-between max-w-6xl mx-auto">
        {NAV_PAGES.map(({ href, imgAltKey, imgPath }) => {
          const node = data.navImages.nodes.find(
            (node) => node.relativePath === imgPath,
          );
          if (!node) return null;

          const image = getImage(node.childImageSharp);
          return image ? (
            <Link to={href} className="hover:opacity-75">
              <Card alt={t(imgAltKey)} image={image} />
            </Link>
          ) : null;
        })}
      </section>
      <section className="flex max-w-6xl mx-auto">
        <Carousel cards={carouselCards} />
      </section>
      <section className="flex flex-col">
        <h3 className="max-w-6xl mx-auto">{t("homePage.partners")}</h3>
        <div className="text-center bg-white">
          <div className="max-w-6xl mx-auto py-8 space-x-8">
            {partnerLogos.map(({ alt, image }) => {
              return <GatsbyImage image={image} alt={alt} className="" />;
            })}
          </div>
        </div>
      </section>
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
      filter: { relativePath: { in: ["en-flag.png", "fr-flag.png"] } }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    carouselImages: allFile(
      filter: { relativePath: { in: ["en-flag.png", "fr-flag.png"] } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData
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
