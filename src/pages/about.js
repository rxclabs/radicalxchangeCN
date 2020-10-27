import React from "react"
import Layout from "../components/layout"
import {
  Box,
  Text,
  ListItem,
  Flex,
  PseudoBox,
  Heading,
  useColorMode,
} from "@chakra-ui/core"
import { FaTwitter } from "react-icons/fa"
import SEO from "react-seo-component"
import Concept from "../components/concept"

import { graphql } from 'gatsby'


const About = ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout>
        <SEO
       title={`关于`}
        titleTemplate={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        image={'https://radicalxchange.cn'+ data.imageSharp.fixed.src}
        pathname={data.site.siteMetadata.siteUrl}
        siteLanguage={data.site.siteMetadata.siteLanguage}
        siteLocale={data.site.siteMetadata.siteLocale}
        twitterUsername={data.site.siteMetadata.twitterUsername}
      />
      <Concept />
      <Box
        overflow="visible"
        textAlign="justify"
        maxW={1170}
        mb={20}
        mx="auto"
        mt={[6, 8, 8, "9vh"]}
        px={[4, 8, 8, 8]}
      >
        <Heading
          fontSize="2.5rem"
          fontFamily="NotoSansSC-Regular"
          letterSpacing="wide"
        >
          RxC社区
        </Heading>
        <Text letterSpacing="wide" mt={10} lineHeight="taller">
          RadicalxChange社区的发起人为《激进市场》（Radical Markets）作者Glen
          Weyl，基金会成员包括以太坊创始人Vitalik
          Buterin。RxC致力于通过对自由、竞争和开放市场机制的设计来减少不平等现象，缔造可最大化分享的繁荣，袮补全球化裂痕，探索合作型社会的机制。这是一个由《激进市场》和区块链技术的爱好者组成的去中心化社区，其中有些人是学生、企业家、学者、艺术工作者、区块链开发者、IT从业人员等。
        </Text>
        <Text mt={10} fontWeight="bold" fontSize="lg">
          RxC核心价值:
        </Text>
        <ListItem lineHeight="taller" mt={5}>
          开放性：每个参与者都可以充分分享自己的想法，并在平等性原则上探索最大程度上的共识。
        </ListItem>
        <ListItem lineHeight="taller">
          平等性：更具竞争性的市场体系将会产生更广泛的财富分配。
        </ListItem>
        <ListItem lineHeight="taller">
          个人尊严：个人拥有追求自身幸福的自由，并得到全体社区的尊重。
        </ListItem>
        <ListItem lineHeight="taller">
          社会创新：鼓励向陈腐的观念或假设性的常识进行挑战！我们相信，通过协作周详的创新将会建立一个更好的社会。
        </ListItem>
        <Text mt={10} fontWeight="bold" fontSize="lg">
          RxC治理原则:
        </Text>
        <ListItem lineHeight="taller" mt={5}>
          多样性：为了建立一个真正具有广泛基础且高效的社区，RxC对各个阶层、独立群体和学术派别的参与和建议都持欢迎态度。
          任何持有RadicalxChange的理念人都可以进行各自的探索和作出建设性的创造。
        </ListItem>
        <ListItem lineHeight="taller">
          去中心化：RxC反对只有一种声音的存在，任何级别上的社区领导者不能也不会成为社区决定性的声音。
        </ListItem>
        <ListItem lineHeight="taller">
          责任感：能够成为RxC社区的领导者仅仅是因为其专业性和责任感，并要遵从RxC的社区原则。
        </ListItem>
        <ListItem lineHeight="taller">
          社会使命：RxC社区致力于实现社会正义使命，除此之外，别无目的。
        </ListItem>
        <ListItem lineHeight="taller">
          尊重：RxC社区成员彼此平等，珍视每个成员的想法并得以讨论。
        </ListItem>
        {/* 城市论坛 */}
        <Text mt={10} fontWeight="bold" fontSize="lg">
          RxC城市论坛：
        </Text>

        {/* 第一栏 */}
        <Flex
          mt={4}
          rounded="lg"
          direction={["column", "column", "row", "row"]}
          justifyContent={["center", "center", "flex-start", "flex-start"]}
          alignItems={"center"}
          flexWrap="wrap"
        >
          <PseudoBox
            as="button"
            backgroundColor={
              colorMode === "light" ? "rgb(249,248,253)" : "#444C5E"
            }
            p={4}
            m={2}
            rounded={12}
            w={["60%", "60%", "31%", "31%"]}
            outline="none"
            _hover={{
              bg: "#584dd8",
              color: " white",
              boxShadow: "10px 5px 10px #718096",
            }}
          >
            <Text fontSize={18} fontWeight={700} textAlign="center">
              RadicalxChange Canton/广州
            </Text>
            <Flex justifyContent="center" mt={2}>
              <Box w={2} />
              <a href="https://twitter.com/RxCCanton">
                <FaTwitter />
              </a>
            </Flex>
          </PseudoBox>

          <PseudoBox
            as="button"
            backgroundColor={
              colorMode === "light" ? "rgb(249,248,253)" : "#444C5E"
            }
            p={4}
            m={2}
            rounded={12}
            w={["60%", "60%", "31%", "31%"]}
            outline="none"
            _hover={{
              bg: "#584dd8",
              color: " white",
              boxShadow: "10px 5px 10px #718096",
            }}
          >
            <Text fontSize={18} fontWeight={700} textAlign="center">
              RadicalxChange Shanghai/上海
            </Text>
            <Flex justifyContent="center" mt={2}>
              <a href="https://twitter.com/RxCShanghai">
                <FaTwitter />
              </a>
            </Flex>
          </PseudoBox>

          <PseudoBox
            as="button"
            backgroundColor={
              colorMode === "light" ? "rgb(249,248,253)" : "#444C5E"
            }
            p={4}
            m={2}
            rounded={12}
            w={["60%", "60%", "31%", "31%"]}
            outline="none"
            _hover={{
              bg: "#584dd8",
              color: " white",
              boxShadow: "10px 5px 10px #718096",
            }}
          >
            <Text fontSize={18} fontWeight={700} textAlign="center">
              RadicalxChange Beijing/北京
            </Text>
            <Flex justifyContent="center" mt={2}>
              <a href="#">
                <FaTwitter />
              </a>
            </Flex>
          </PseudoBox>

          <PseudoBox
            as="button"
            backgroundColor={
              colorMode === "light" ? "rgb(249,248,253)" : "#444C5E"
            }
            p={4}
            m={2}
            rounded={12}
            w={["60%", "60%", "31%", "31%"]}
            outline="none"
            _hover={{
              bg: "#584dd8",
              color: " white",
              boxShadow: "10px 5px 10px #718096",
            }}
          >
            <Text fontSize={18} fontWeight={700} textAlign="center">
              RadicalxChange Shenzhen/深圳
            </Text>
            <Flex justifyContent="center" mt={2}>
              <Box w={2} />
              <a href="https://twitter.com/RxCShenzhen">
                <FaTwitter />
              </a>
            </Flex>
          </PseudoBox>

          <PseudoBox
            as="button"
            backgroundColor={
              colorMode === "light" ? "rgb(249,248,253)" : "#444C5E"
            }
            p={4}
            m={2}
            rounded={12}
            w={["60%", "60%", "31%", "31%"]}
            outline="none"
            _hover={{
              bg: "#584dd8",
              color: " white",
              boxShadow: "8px 5px 15px #A0AEC0",
            }}
          >
            <Text fontSize={18} fontWeight={700} textAlign="center">
              RadicalxChange HongKong/香港
            </Text>
            <Flex justifyContent="center" mt={2}>
              <Box w={2} />
              <a href="https://twitter.com/RxCHongKong">
                <FaTwitter />
              </a>
            </Flex>
          </PseudoBox>
        </Flex>
      </Box>
    </Layout>
  )
}


export const query = graphql`
  {

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

export default About
