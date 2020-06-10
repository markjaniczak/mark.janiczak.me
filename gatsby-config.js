module.exports = {
  siteMetadata: {
    title: `Mark Janiczak`,
    description: `Web developer. Brisbane, Australia. Familiar with MERN stack, ecommerce, Google Cloud, to name a few.`,
    author: `Mark Janiczak`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
