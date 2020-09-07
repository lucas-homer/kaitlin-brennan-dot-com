require("dotenv").config()
const {
  api: { projectId, dataset },
} = requireConfig("../studio/sanity.json")

module.exports = {
  siteMetadata: {
    title: `Kaitlin Brennan`,
    description: `Kaitlin Brennan is a content creation expert. This is her website to showcase her work samples, to get in contact with her, and to read her blog.`,
    author: `lucas homer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
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
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Merriweather", "Ubuntu"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

function requireConfig(path) {
  try {
    return require(path)
  } catch (e) {
    console.error(
      "Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js"
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || "",
        dataset: process.env.SANITY_DATASET || "",
      },
    }
  }
}
