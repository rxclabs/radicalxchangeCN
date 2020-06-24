import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import {
  Box,
  Heading,
  Stack,
  Avatar,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/core"
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

        <Text
          fontSize="1rem"
          color="#a8a9a6"
          mt="4vh"
          mb="4vh"
          lineHeight="3.25vh"
        >
          {post.frontmatter.description}
        </Text>
        <Divider />
        <Stack isInline mt="1.5rem" mb="2rem">
          <Avatar
            w="25px"
            h="25px"
            name={post.frontmatter.author}
            src={post.frontmatter.authorimg.childImageSharp.fixed.src}
          />
          <Text lineHeight="25px" fontSize="0.8rem">
            {post.frontmatter.author}
          </Text>
        </Stack>

        <Content input={post.html} />

        <Flex justifyContent="space-between" mt="5rem">
          <Box style={{ listStyleType: "none" }} >
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </Box>
          <Box style={{ listStyleType: "none" }} >
            {next && (
              <Link to={next.fields.slug} rel="next" >
               {next.frontmatter.title} →
              </Link>
            )}
          </Box>
        </Flex>
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
        authorimg {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        date(formatString: "YYYY-MM-DD")
        description
        img {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        featuredpost
        tags
        title
      }
      html
    }
  }
`
