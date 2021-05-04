/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title:'Retete proteice',
    description:'Rapid, Sanatos si Gustos',
    author:'@webdev@mihaibenta.com',
    person:{name:'Mihai', age:26},
    simpleData: ['item 1', 'item 2'],
    complexData:[
      {name:'Mihai', age:26},
      {name:'Susan', age:32},
    ]
  },
  plugins: 
  [`gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  { 
    resolve: `gatsby-source-filesystem`,
    options:{
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },

  },
   {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pso7mz14sdls`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
        
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            
            {
              family: "Roboto",
              variants: ["400","500","600"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ] ,
}
 