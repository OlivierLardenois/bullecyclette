import { graphql, type HeadFC, type PageProps } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <p>{t("hello")}</p>
    </Layout>
  );
};

export default IndexPage;

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
