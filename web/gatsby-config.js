module.exports = {
  siteMetadata: {
    title: `Kaitlin Brennan`,
    description: `Kaitlin Brennan is a content creation expert. This is her website to showcase her work samples, to get in contact with her, and to read her blog.`,
    author: `lucas homer`,
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
        name: `kaitlin-brennan-dot-com`,
        short_name: `kaitlinbrennan.com`,
        start_url: `/`,
        background_color: `#69A1AC`,
        theme_color: `#69A1AC`,
        display: `minimal-ui`,
        icon: `src/images/kb-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
