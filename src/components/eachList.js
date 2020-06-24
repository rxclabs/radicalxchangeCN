import React from "react"
// ui
import {
  Flex,
  Box,
  Text,
  Stack,
  PseudoBox,
  Avatar,
} from "@chakra-ui/core"
// 图片引入】
import Img from "gatsby-image"

const EachList = ({value}) => {
  return (
    <>

    {console.log(value)}
      <PseudoBox
        // flexWrap="wrap"
        w="100%"
        maxW={1080}
        mx="auto"
        px="2vw"
        pt={["20px", "20px", "50px", "11vh"]}
        _hover={{ color: " #6873e5" }}
      >
        <Flex
          flexDir={["column", "column", "column", "row"]}
          paddingBottom="0.5vw"
          w={["100%", "100%", "100%", "100%"]}
          mx="auto"
          justifyContent="space-between "
        >
          <PseudoBox
            w={["100%", "100%", "100%", "45%"]}
            mx={["auto", "auto", "auto", 0]}
            boxShadow="-1.5em 1em 4em #ccc, 0em 0 1em #ccc;"
            position="relative"
            _hover={{
              boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
              top: "-1px",
              transition: "all 1000ms ease 0s",
            }}
          >
            <Img fixed={value.frontmatter.img.childImageSharp.fixed} />
          </PseudoBox>

          <Box
            w={["100%", "100%", "100%", "45%"]}
            my="auto"
            px={["2vw", 0, 0, 0]}
            ml={[0, 0, 0, "40px"]}
            cursor="pointer"
          >
            <PseudoBox
              as="h2"
              mb="12px"
              fontSize="1.6rem"
              mt={["1.2rem", "1.2rem", "1.2rem", 0]}
              fontWeight="800"
              lineHeight="1.2em"
              letterSpacing="0.05vw"
              fontFamily="NotoSansSC-Bold"
            >
             {value.frontmatter.title}
            </PseudoBox>
            <Text
              mb="1.2em"
              fontSize="1rem"
              lineHeight="1.5em"
              color="#969696"
              letterSpacing="0.025vw"
            >
             {value.frontmatter.description}
            </Text>
            <Stack isInline>
              <Avatar
                position="relative"
                top="-5px"
                w="25px"
                h="25px"
                name="author"
                src={value.frontmatter.authorimg.publicURL}
              />
              <Text fontSize="0.5px" color="#6873e5" fontWeight="700">
              {value.frontmatter.author}
              </Text>
              <Text fontSize="0.5px" color="#aaa" fontWeight="700">
              {value.frontmatter.date}
              </Text>
            </Stack>
          </Box>
        </Flex>
      </PseudoBox>
    </>
  )
}

export default EachList
