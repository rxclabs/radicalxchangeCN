import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EachList from "../components/eachList"
// ui
import { Heading, Box, Text, Divider } from "@chakra-ui/core"

const Research = ({ data }) => {
  return (
    <Layout>
      <SEO title="研究" />
      <Box
        w="100%"
        maxW={1080}
        mx="auto"
        px="30px"
        pt={["20px", "20px", "50px", "40px"]}
        mt="2vw"
      >
        <Heading fontSize="2.5rem" fontFamily="NotoSansSC-Regular">
          研究
        </Heading>
        <Text
          color="#969696"
          mt="1.2vw"
          fontWeight={500}
          fontSize="1.2rem"
          fontFamily="NotoSansSC-Regular"
        >
          深入问题本质，阐述彻底的变革方案。
        </Text>
      </Box>
      <Divider w="100%" maxW={1018} borderColor="#ddd" mt="1vw" mx="auto" />
      {data.allMarkdownRemark.nodes.map((value, index) => (
        <EachList value={value} key={index} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: "research" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          author
          date(difference: "YYYY-MM-DD")
          description
          authorimg {
            publicURL
          }
          img {
            childImageSharp {
              fixed(width: 250, height: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`

export default Research
