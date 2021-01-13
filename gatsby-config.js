/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require("./data/siteConfig");


module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.authorName,
    ...config
  },
  pathPrefix: config.pathPrefix,
  plugins: [
    `gatsby-plugin-preload-fonts`,
    'gatsby-plugin-sass',
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `archive`,
        path: `${__dirname}/content/archive`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shysell Isita`,
        short_name: `Shy Isita`,
        start_url: `/`,
        background_color: `#1F2C34`,
        theme_color: `#1F2C34`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
