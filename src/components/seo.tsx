import { graphql, useStaticQuery } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import * as React from "react";
import { Helmet } from "react-helmet";

type SeoProps = {
  description: string;
  title: string;
  pathname: string;
  children?: React.ReactNode;
};

// https://github.com/gatsbyjs/gatsby/issues/36458
export default function Seo({
  description,
  title,
  pathname,
  children,
}: SeoProps) {
  const { language } = useI18next();

  const data = useStaticQuery<Queries.SeoComponentQuery>(graphql`
    query SeoComponent {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
      ogImage: file(relativePath: { eq: "index/logo-viellit.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const siteUrl = data.site?.siteMetadata?.siteUrl;
  const ogImage = data.ogImage?.childImageSharp?.gatsbyImageData;

  const seo = {
    title,
    description,
    image: `${siteUrl}${ogImage.images.fallback?.src}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link
        rel="alternate"
        hrefLang="fr"
        href={`${siteUrl}${pathname.replace("/en", "")}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`${siteUrl}/en${pathname.replace("/en", "")}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteUrl}${pathname.replace("/en", "")}`}
      />
      {children}
    </Helmet>
  );
}
