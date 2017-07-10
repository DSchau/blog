module.exports = {
  pathPrefix: '/blog',
  siteMetadata: {
    title: `Dustin Schau - Blog`,
    author: `Dustin Schau`,
  },
  plugins: [
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
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-offline'
  ],
}
