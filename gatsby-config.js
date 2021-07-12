module.exports = {
  siteMetadata: {
    title: `Defend the Atlanta Forest`,
    description: `The Atlanta Police Department seeks to turn 300 acres of forest into a tactical training compound featuring a mock city. Blackhall wants to clear cut 170 acres of forest to develop into an airport and erect the largest sound stage in America. We refuse to let our forest be bulldozed in favor of the police and sold out to Hollywood.`,
    author: `Defend the Forest Atlanta`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `defend-the-forest`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
