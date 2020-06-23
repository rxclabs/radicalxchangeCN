import React from "react"
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



const Research = () => {

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
        <Heading fontSize="2.5rem"  fontFamily="NotoSansSC-Regular">研究</Heading>
        <Text color="#969696" mt="1.2vw" fontWeight={500} fontSize="1.2rem" fontFamily="NotoSansSC-Regular">
          深入问题本质，阐述彻底的变革方案
        </Text>
      </Box>
      <Divider w="100%" maxW={1018} borderColor="#ddd" mt="1vw" mx="auto" />
     
    </Layout>
  )
}



export default Research
