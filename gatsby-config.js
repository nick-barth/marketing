module.exports = {
  siteMetadata: {
    title: `Esports Web Builder`,
    description: `Esports webpage builder, site generator, cms, and esports team management platform`,
    author: `nickbarth`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-113145122-8",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/, // See below to configure properly
        },
      },
    },
    plugins: [`gatsby-plugin-sitemap`],
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
