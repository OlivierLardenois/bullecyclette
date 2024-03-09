import { graphql, type PageProps } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Layout from "../components/layout";

const RegulationPage: React.FC<PageProps<Queries.RegulationPageQuery>> = ({
  location,
}) => {
  const { t } = useTranslation();

  return (
    <Layout pageKey="regulation" pathname={location.pathname}>
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <h1 className="text-cg-red text-6xl text-center py-12 mx-8">
          {t("regulation.title")}
        </h1>
        {Array(14)
          .fill(null)
          .map((_, index) => {
            return (
              <div className="space-y-4 whitespace-pre-line mx-8 text-justify">
                <h4 className="text-cg-red font-bold">
                  {t(`regulation.section.${index}.title`)}
                </h4>
                <p>{t(`regulation.section.${index}.content`)}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default RegulationPage;

export const query = graphql`
  query RegulationPage($language: String!) {
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
