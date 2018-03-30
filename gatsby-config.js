module.exports = {
  siteMetadata: {
    title: `Favorite Movies - Track movies to watch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/movies`,
        name: `movies`,
      },
    },
  ],
}
