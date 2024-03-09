import { graphql, type PageProps } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Layout from "../components/layout";

const LegalPage: React.FC<PageProps<Queries.LegalPageQuery>> = ({
  location,
}) => {
  const { t } = useTranslation();

  return (
    <Layout pageKey="legal" pathname={location.pathname}>
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <h1 className="text-cg-red text-6xl text-center py-12 mx-8">
          {t("legal.title")}
        </h1>
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return (
              <div className="space-y-4 whitespace-pre-line mx-8">
                <h4 className="text-liberty font-bold">
                  {t(`legal.section.${index}.title`)}
                </h4>
                <p>{t(`legal.section.${index}.content`)}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default LegalPage;

export const query = graphql`
  query LegalPage($language: String!) {
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
