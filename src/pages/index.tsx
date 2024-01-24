import { graphql, type HeadFC, type PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
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

  return (
    <Layout>
      <div className="flex justify-between max-w-6xl mx-auto">
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
      </div>
      <Carousel cards={carouselCards} />
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
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
