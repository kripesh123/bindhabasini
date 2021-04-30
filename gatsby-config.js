/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Top Construction Company in South Lalitpur Nepal | Bindha Basini Construction",
    description: "Bindha Basini Construction, Best Construction Firm in Nepal South-Lalitpur Godawari Chapagaun",
    author: "@bindhabasiniconstruction",
    twitterUsername: "@bindhabasiniconstruction",
    image: "/twitter-img.png",
    siteUrl: "https://bindhabasiniconstruction.com",
},
  plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto\:400,700`,
                    `Open Sans`,
                ],
                display: 'swap'
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.UA,
            },
        },
  ],
}
