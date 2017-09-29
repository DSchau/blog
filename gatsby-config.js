const { remotePath: pathPrefix } = require('./.deploy.js');

module.exports = {
  pathPrefix: `/${pathPrefix}`,
  siteMetadata: {
    title: `Dustin Schau - Blog`,
    author: `Dustin Schau`,
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers'
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-102928446-2'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Dustin Schau's Blog`,
        description: 'The blog of the developer, Dustin Schau',
        short_name: 'DSchau Blog',
        background_color: 'white',
        theme_color: '#002635',
        orientation: 'portrait',
        display: 'minimal-ui'
      }
    },
    `gatsby-plugin-offline`
  ],
}
