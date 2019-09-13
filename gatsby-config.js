module.exports = {
  siteMetadata: {
    title: `burst.gg`,
    description: `Esports webpage builder, site generator, cms, and esports team management platform`,
    author: `nickbarth`,
    siteUrl: `https://burst.gg`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "burst.gg",
        short_name: "burst.gg",
        start_url: "/",
        display: "standalone",
        icon: "src/images/burst-icon.png",
        crossOrigin: `use-credentials`,
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
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
