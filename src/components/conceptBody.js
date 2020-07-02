import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Box, Text, Link, Flex, useColorMode } from "@chakra-ui/core"
import Img from "gatsby-image"
const ConceptBody = ({ title, body, list }) => {
  // 夜间模式状态
  const { colorMode, toggleColorMode } = useColorMode()
  const data = useStaticQuery(graphql`
    {
      allImageSharp(
        filter: { resolutions: { originalName: { eq: "gatsby-icon.png" } } }
      ) {
        nodes {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      <Box
        mt="8vh"
        border="1px solid black"
        px={8}
        borderRadius="1rem"
        boxShadow="0 0 0.6rem #888"
      >
        <Img fixed={data.allImageSharp.nodes[0].fixed} />
        <Flex justifyContent="center">
          <Heading
            py={2}
            display="inline-block"
            fontSize="1.4rem"
            borderTop="1px solid #000"
            borderBottom="1px solid #000"
            mb="1rem"
          >
            <span>&nbsp; </span>
            {title}
            <span>&nbsp; </span>
          </Heading>
        </Flex>
        <Box mt="1rem">
          <Text mb="1rem" whiteSpace="pre-line" textAlign="left">
            {body}
          </Text>

          <ul style={{ marginLeft: "1.4rem", marginBottom: "2.5rem" }}>
            {list.map((val, index) => (
              <li key={index}>
                <Link
                  fontWeight={600}
                  color={colorMode === "light" ? "#3d1472" : "#9665D4"}
                  fontWeight={600}
                  href={val.link}
                >
                  {val.title}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </>
  )
}

export default ConceptBody

// {
//   imageSharp(id: { eq: "2cb3bf89-545a-5b6d-bd70-fbb631ccdb9b" }) {
//     fixed(width: 35, height: 35) {
//       ...GatsbyImageSharpFixed
//     }
//   }
// }
