module.exports = {
  siteMetadata: {
    title: `Alessandro Di Puccio`,
    description: `Alessandro Di Puccio Official Website. Alessandro Di Puccio (Firenze, 4 Ottobre 1958) è un musicista jazz, compositore e arrangiatore, vibrafonista e batterista. Attivo come didatta e visual storyteller.`,
    author: `marta di puccio`,
    siteUrl: 'https://www.alessandrodipuccio.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-theme-gallery`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.alessandrodipuccio.com',
        sitemap: 'https://www.alessandrodipuccio.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-manifest`, 
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/my-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`it`, `en`],
        // language file path
        defaultLanguage: `it`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    
  ],
}
