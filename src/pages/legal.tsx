import { graphql, type PageProps } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";

import Layout from "../components/layout";

const LegalPage: React.FC<PageProps<Queries.LegalPageQuery>> = ({
  location,
}) => {
  const { t } = useTranslation();

  return (
    <Layout pageKey="legalPage" pathname={location.pathname}>
      <div className="max-w-5xl mx-auto w-full space-y-8 mt-12">
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return (
              <div className="space-y-4 whitespace-pre-line">
                <h4 className="text-liberty font-bold">
                  {t(`legalPage.section.${index}.title`)}
                </h4>
                <p>{t(`legalPage.section.${index}.content`)}</p>
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
