module.exports = {
  siteMetadata: {
    title: `Südtiroler Initiative Stottern`,
    description: `Homepage der Südtiroler Initiative Stottern`,
    author: `@leitnerdominik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Südtiroler Initiative Stottern`,
        short_name: `SIS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ea4a16`,
        display: `standalone`,
        icon: `src/images/speech.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
