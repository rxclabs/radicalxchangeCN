import React from "react"
import Layout from "../components/layout"
import SEO from "react-seo-component"
import EachList from "../components/eachList"
// ui
import { Heading, Box, Text, Divider } from "@chakra-ui/core"
import { graphql } from 'gatsby'

const Research = ({ data }) => {
  return (
    <Layout>
      < Box mb="30vh">
      <SEO
       title={`研究`}
        titleTemplate={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={'https://radicalxchange.cn'+ data.imageSharp.fixed.src}
        pathname={data.site.siteMetadata.siteUrl}
        siteLanguage={data.site.siteMetadata.siteLanguage}
        siteLocale={data.site.siteMetadata.siteLocale}
        twitterUsername={data.site.siteMetadata.twitterUsername}
      />
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
      </Box>
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
          date(formatString: "YYYY-MM-DD")
          description
          authorimg {
            childImageSharp {
              fixed(width: 25, height: 25) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          img {
            childImageSharp {
              fluid(maxWidth: 1000, maxHeight: 450) {
                ...GatsbyImageSharpFluid
              }}
          }
        }
        fields {
          slug
        }
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
`

export default Research
