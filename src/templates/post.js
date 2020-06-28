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
  Image,
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
        mb={["15vh","15vh","20vh","40vh"]}
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
        <Divider/>

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
        <Divider/>
        <Flex
          justifyContent={["center", "center", "center", "space-between"]}
          mt="10rem"
          flexWrap="wrap"
        >
          <Box  w={["100%","100%","80%","40%"]} h="100%">
            {previous && (
              <Link to={previous.fields.slug} rel="nepreviousxt">
                <Image
                  w={["100%", "100%", "100%", "100%"]}
                  h={["100%", "100%", "100%", "15vh"]}
                  objectFit="cover"
                  src={previous.frontmatter.img.childImageSharp.fluid.src}
                  alt={previous.frontmatter.title}
                />
                <Heading fontSize="2xl" mt={4}>
                  {previous.frontmatter.title}
                </Heading>
              </Link>
            )}
          </Box>

          <Box   w={["100%","100%","80%","40%"]}  h="100%" mt={["10vh","10vh","10vh","0"]}>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <Image
                  w={["100%", "100%", "100%", "100%"]}
                  h={["100%", "100%", "100%", "15vh"]}
                  objectFit="cover"
                  src={next.frontmatter.img.childImageSharp.fluid.src}
                  alt={next.frontmatter.title}
                />
                <Heading mt={4} fontSize="2xl">
                  {" "}
                  {next.frontmatter.title}
                </Heading>
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
