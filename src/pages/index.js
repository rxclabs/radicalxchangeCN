import React from "react"
import Layout from "../components/layout"
import SEO from "react-seo-component"
import FirstRow from "../components/index-components/firstRow"
import { useStaticQuery, graphql } from "gatsby"
const IndexPage = ({location}) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { tags: { eq: "news" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 6
      ) {
        nodes {
          frontmatter {
            title
            author
            date(formatString: "YYYY-MM-DD")
            description
            authorimg {
              childImageSharp {
                fixed(width: 32, height: 32) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            img {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 100)
        }
      }
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
  `)

  return (
    <Layout>
      <SEO
       title={`首页`}
        titleTemplate={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={'https://radicalxchange.cn'+ data.imageSharp.fixed.src}
        pathname={data.site.siteMetadata.siteUrl}
        siteLanguage={data.site.siteMetadata.siteLanguage}
        siteLocale={data.site.siteMetadata.siteLocale}
        twitterUsername={data.site.siteMetadata.twitterUsername}
      />
      <FirstRow data={data.allMarkdownRemark.nodes} />
    </Layout>
  )
}

export default IndexPage
