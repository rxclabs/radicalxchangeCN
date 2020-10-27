module.exports = {
  siteMetadata: {
    title: `RadicalxChange`,
    description: `RadicalxChange，中文为基进变革或激进变革，简称为RxC，是由《激进市场》（Radical Markets）作者Glen Weyl联合其他人包括以太坊创始人Vitalik Buterin发起的社区。RxC致力于通过对自由、竞争和开放市场机制的设计来减少不平等现象，缔造可最大化分享的繁荣，袮补全球化裂痕，探索合作型社会的机制。`,
    author: `@rxc`,
    keywords:`blog, RadicalxChange`,
    lastBuildDate: new Date(Date.now()).toISOString(),
    siteUrl:`https://radicalxchange.cn/`,
    twitterUsername: `@RxCCanton`,
    siteLanguage: `zh-CN`,
    siteLocale: `zh-cn`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/post`,
        name: `post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imagesicon`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
