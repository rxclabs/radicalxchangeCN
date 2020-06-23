import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Box, Text, Divider, Link, Flex } from "@chakra-ui/core"
import Img from "gatsby-image"
const ConceptBody = ({ title, body, list }) => {
  const data = useStaticQuery(graphql`
    {
      imageSharp(id: { eq: "2cb3bf89-545a-5b6d-bd70-fbb631ccdb9b" }) {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  return (
    <>
      <Box
        mt="8vh"
        border="1px solid black"
        p={4}
        px={8}
        borderRadius="1rem"
        boxShadow="0 0 0.6rem #888"
      >
        <Img fixed={data.imageSharp.fixed} />
        <Flex justifyContent="center">
          <Heading
            py={2}
            display="inline-block"
            fontSize="1.4rem"
            borderTop="1px solid #000"
            borderBottom="1px solid #000"
            my={6}
            mt={8}
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
                  color="#3d1472"
                  fontWeight={600}
                  color="#3d1472"
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
