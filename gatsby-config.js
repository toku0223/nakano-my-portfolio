/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [{
    resolve: `gatsby-source-wordpress`,
    options: {
      url: `http://nakanomyportfolio.local/graphql`,
    },
  },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,],
}
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})