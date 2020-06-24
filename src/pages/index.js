import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstRow from "../components/index-components/firstRow"
import { useStaticQuery, graphql } from "gatsby"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { tags: { eq: "news" } } }
        sort: { fields: frontmatter___date, order: DESC }, limit: 6
      ) {
        nodes {
          frontmatter {
            title
            author
            date(formatString: "YYYY-MM-DD")
            description
            authorimg {
              publicURL
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
    }
  `)

  return (
    <Layout>
      <SEO title="首页" />
      <FirstRow data={data.allMarkdownRemark.nodes}/>
    </Layout>
  )
}

export default IndexPage
