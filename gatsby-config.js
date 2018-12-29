process.noDeprecation = true; // https://github.com/webpack/webpack/issues/6568

module.exports = {
  __experimentalThemes: [
    {
      resolve: '@dschau/gatsby-theme-blog',
      options: {
        root: __dirname
      }
    }
  ]
}
