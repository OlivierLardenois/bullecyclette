import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import Layout from "../components/layout";
import Card from "../components/card";
import { getImage } from "gatsby-plugin-image";

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
  }
`;
