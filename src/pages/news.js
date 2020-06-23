import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// ui
import {
  Flex,
  Heading,
  Box,
  Text,
  Stack,
  PseudoBox,
  Divider,
  Avatar,
} from "@chakra-ui/core"
// 图片引入】
import Img from "gatsby-image"

const News = () => {
  return (
    <Layout>
      <SEO title="新闻" />
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
          用不同维度解读社会问题，用发展的眼光看世界。
        </Text>
      </Box>
      <Divider w="100%" maxW={1018} borderColor="#ddd" mt="1vw" mx="auto" />

      <Box>
        <Heading></Heading>
        <Text>

        </Text>
      </Box>
    </Layout>
  )
}

export default News
