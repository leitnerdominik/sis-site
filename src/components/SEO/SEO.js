import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const seo = ({ lang }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const metaDescription = data.site.siteMetadata.description;
      const metaTitle = data.site.siteMetadata.title;
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={metaTitle}
          titleTemplate={`%s | ${metaTitle}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: metaTitle,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />
        </Helmet>
      );
    }}
  />
);

seo.defaultProps = {
  lang: `de`,
  meta: [],
  keywords: [],
};

export default seo;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
