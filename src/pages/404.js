import React from "react"

import Layout from "../components/layout"
import SEO from "react-seo-component"
import { graphql } from 'gatsby'


const NotFoundPage = ({data}) => (
  <Layout>

    <SEO
       title={`404: Not found`}
        titleTemplate={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={'https://radicalxchange.cn'+ data.imageSharp.fixed.src}
        pathname={data.site.siteMetadata.siteUrl}
        siteLanguage={data.site.siteMetadata.siteLanguage}
        siteLocale={data.site.siteMetadata.siteLocale}
        twitterUsername={data.site.siteMetadata.twitterUsername}
      />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const query = graphql`
  {

    site {
      siteMetadata {
        title
        description
        author
        keywords
        siteLanguage
        siteLocale
        siteUrl
        twitterUsername
      }
    }


imageSharp(sizes: {originalName: {eq: "gatsby-icon.png"}}) {
  fixed {
    src
  }
}
  }
`

export default NotFoundPage
