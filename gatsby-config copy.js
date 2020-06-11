module.exports = {
  siteMetadata: {
    title: "Nonso Daniel Portfolio",
    author: "Ihedioha Chinonso daniel",
    description: "A Portfolio website for Ihedioha Chinonso Daniel"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Nonso Daniel',
        short_name: 'nonsodaniel',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/newpic.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
