process.noDeprecation = true; // https://github.com/webpack/webpack/issues/6568

const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || "https://blog.dustinschau.com";

module.exports = {
  siteMetadata: {
    author: "Dustin Schau",
    description:
      "The blog of the Omaha, Nebraska based software engineer, Dustin Schau",
    siteUrl,
    social: {
      twitter: "schaudustin"
    }
  },
  __experimentalThemes: [
    {
      resolve: "@dschau/gatsby-theme-blog",
      options: {
        root: __dirname
      }
    }
  ]
};
