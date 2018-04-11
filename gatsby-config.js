module.exports = {
  siteMetadata: {
    title: 'Design Systems Repo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/_design-systems`,
        name: '_design-systems',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
