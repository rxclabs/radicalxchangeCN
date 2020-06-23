import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import {  Box } from "@chakra-ui/core"
import Layout from "../components/layout"
import postStyle from './post.module.css';

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Box
        w="100%"
        maxW={800}
        mx="auto"
        px="30px"
        pt={["20px", "20px", "50px", "10vh"]}
        mb="40vh"
      >
        <article>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        <nav>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Box>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        authorimg
        date(formatString: "YYYY-MM-DD")
        description
        img
        featuredpost
        tags
        title
      }
      html
    }
  }
`
