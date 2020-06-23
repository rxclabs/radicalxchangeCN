import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { Box, Heading, Stack, Avatar,Text } from "@chakra-ui/core"
import Layout from "../components/layout"
import Content from "../components/content"

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
        <Heading
          lineHeight="7vh"
          fontWeight="700"
          fontFamily="NotoSansSC-Medium"
        >
          {post.frontmatter.title}
        </Heading>

        <Stack isInline mt="1.5rem">
          <Avatar w="25px" h="25px" name={post.frontmatter.author} src={post.frontmatter.authorimg} />
          <Text lineHeight="25px" fontSize="0.8rem">{post.frontmatter.author}</Text>
        </Stack>

        <Content input={post.html} />

        <nav>
          <ul>
            <li style={{listStyleType:"none"}}>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                          上一篇： ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li style={{listStyleType:"none"}}>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  下一篇： {next.frontmatter.title} →
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
