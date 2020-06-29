import React from "react"
import {
  Flex,
  Heading,
  Box,
  PseudoBox,
  Text,
  Stack,
  useColorMode,
} from "@chakra-ui/core"
import Img from "gatsby-image"
import { Link } from "gatsby"

const FirstRow = ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      flexWrap="wrap"
      w="100%"
      maxW={1080}
      mx="auto"
      px={[0, 0, 0, "30px"]}
      pt={["2vw", "2vw", "3vw", "4.5vw"]}
      mb="15vw"
    >
      {/* 第一大栏目 */}
      <PseudoBox
        display="flex"
        flexDir={["column", "column", "column", "row"]}
        w={["100%", "45%", "45%", "97.5%"]}
        borderBottom="1px solid #eee"
        mx="auto"
        mb="4vw"
        paddingBottom="4vw"
        _hover={{ color: " #6873e5 " }}
      >
         
        <PseudoBox
          w="100%"
          maxW={["400px", "400px", "620px", "620px"]}
          mx="auto"
          boxShadow={ colorMode === "light" ? "-1.5em 1em 4em #ccc, 0em 0 1em #ccc" : "-1.5em 1em 4em #000, 0em 0 1em #2D3748"}
          position="relative"
          _hover={
            colorMode === "light"
              ? {
                  boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
                  top: "-1px",
                  transition: "all 1000ms ease 0s",
                }
              : {
                  boxShadow: "-1em 0.5em 10em #4A5568,  0em 0 2em #4A5568;",
                  top: "-1px",
                  transition: "all 1000ms ease 0s",
                }
          }
        >
          <Img fluid={data[0].frontmatter.img.childImageSharp.fluid} />
        </PseudoBox>
        <Box
          w={["100%", "100%", "100%", "40%"]}
          my="auto"
          px={["5vw", 0, 0, 0]}
          ml={[0, 0, 0, "40px"]}
        >
          <Link to={data[0].fields.slug}>
            <PseudoBox
              mb="12px"
              fontWeight="900"
              fontSize="2rem"
              lineHeight="2.5rem"
              fontFamily="NotoSansSC-Medium "
              mt={["1.2rem", "1.2rem", "1.2rem", 0]}
            >
              <PseudoBox
                as="h2"
                mb="12px"
                _hover={{ color: " #6873e5" }}
                fontSize={["1.1rem", "1.1rem", "1.1rem", "2xl"]}
                mt={"1.2rem"}
                color={colorMode === "light" ? "black" : "white"}
              >
                {data[0].frontmatter.title}
              </PseudoBox>
            </PseudoBox>
            <Text
              mb="1.5em"
              fontSize={["0.9rem", "0.9rem", "0.9rem", "1.1rem"]}
              lineHeight="1.5em"
              color="#999"
              letterSpacing="0.025vw"
              fontFamily="NotoSansSC-Medium !important"
            >
              {data[0].frontmatter.description.substring(0, 70)}...
            </Text>
            <Stack isInline>
              {" "}
              <Img
                fixed={data[0].frontmatter.authorimg.childImageSharp.fixed}
                style={{ borderRadius: "50%" }}
              />
              <Flex flexDir="column" ml="0.5vw">
                <Text
                  fontSize="0.5rem"
                  color="#6873e5"
                  fontWeight="700"
                  lineHeight="1rem"
                >
                  {data[0].frontmatter.author}
                </Text>
                <Text
                  color="#aaa"
                  fontWeight="700"
                  fontSize="0.5rem"
                  lineHeight="1.3rem"
                >
                  {data[0].frontmatter.date}
                </Text>
              </Flex>
            </Stack>
          </Link>
        </Box>
      </PseudoBox>

      {/* 第二大栏目 */}
      <PseudoBox
        w={["100%", "45%", "45%", "31%"]}
        borderBottom="1px solid #eee"
        mx="auto"
        mb="4vw"
        pb="4vw"
        _hover={{ color: " #6873e5" }}
        mt={["0", "1.5rem", "1.5rem", 0]}
      >
        <Link to={data[1].fields.slug}>
          {/* 图片 */}
          <PseudoBox
            w="100%"
            maxW={["400px", "400px", "620px", "620px"]}
            mx="auto"
            boxShadow={ colorMode === "light" ? "-1.5em 1em 4em #ccc, 0em 0 1em #ccc" : "-1.5em 1em 4em #000, 0em 0 1em #2D3748"}
            position="relative"
            _hover={
              colorMode === "light"
                ? {
                    boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
                    top: "-1px",
                    transition: "all 1000ms ease 0s",
                  }
                : {
                    boxShadow: "-1em 0.5em 10em #4A5568,  0em 0 2em #4A5568;",
                    top: "-1px",
                    transition: "all 1000ms ease 0s",
                  }
            }
          >
            <Img fluid={data[1].frontmatter.img.childImageSharp.fluid} />
          </PseudoBox>
          {/* 描述 */}
          <Box px={["5vw", 0, 0, 0]}>
            <PseudoBox
              _hover={{ color: " #6873e5" }}
              mb="12px"
              fontWeight="900"
              fontSize={["2rem", "2rem", "2rem", "1.5rem"]}
              lineHeight={["2.5rem", "2.5rem", "2.5rem", "2rem"]}
              mt={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
              fontFamily="NotoSansSC-Medium"
            >
              <Heading
                mb="12px"
                fontSize="1.1rem"
                mt={"1.2rem"}
                color={colorMode === "light" ? "black" : "white"}
              >
                {data[1].frontmatter.title}
              </Heading>
            </PseudoBox>
            <Text
              mb="1.5em"
              fontSize="0.9rem"
              lineHeight="1.5em"
              color="#999"
              letterSpacing="0.025vw"
              fontFamily="NotoSansSC-Medium !important"
            >
              {data[1].frontmatter.description.substring(0, 70)}...
            </Text>
            <Stack isInline>
              {" "}
              <Img
                fixed={data[1].frontmatter.authorimg.childImageSharp.fixed}
                style={{ borderRadius: "50%" }}
              />
              <Flex flexDir="column" ml="0.5vw">
                <Text
                  fontSize="0.5rem"
                  color="#6873e5"
                  fontWeight="700"
                  lineHeight="1rem"
                >
                  {data[1].frontmatter.author}
                </Text>
                <Text
                  color="#aaa"
                  fontWeight="700"
                  fontSize="0.5rem"
                  lineHeight="1.3rem"
                >
                  {data[1].frontmatter.date}
                </Text>
              </Flex>
            </Stack>
          </Box>
        </Link>
      </PseudoBox>

      {/* 第3大栏目 */}

      <PseudoBox
        w={["100%", "45%", "45%", "31%"]}
        borderBottom="1px solid #eee"
        mx="auto"
        mb="4vw"
        pb="4vw"
        _hover={{ color: " #6873e5" }}
      >
        <Link to={data[2].fields.slug}>
          {/* 图片 */}
          <PseudoBox
            w="100%"
            maxW={["400px", "400px", "620px", "620px"]}
            mx="auto"
            boxShadow={ colorMode === "light" ? "-1.5em 1em 4em #ccc, 0em 0 1em #ccc" : "-1.5em 1em 4em #000, 0em 0 1em #2D3748"}
            position="relative"
            _hover={
              colorMode === "light"
                ? {
                    boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
                    top: "-1px",
                    transition: "all 1000ms ease 0s",
                  }
                : {
                    boxShadow: "-1em 0.5em 10em #4A5568,  0em 0 2em #4A5568;",
                    top: "-1px",
                    transition: "all 1000ms ease 0s",
                  }
            }
          >
            <Img fluid={data[2].frontmatter.img.childImageSharp.fluid} />
          </PseudoBox>
          {/* 描述 */}
          <Box px={["5vw", 0, 0, 0]}>
            <PseudoBox
              _hover={{ color: " #6873e5" }}
              mb="12px"
              fontWeight="900"
              fontSize={["2rem", "2rem", "2rem", "1.5rem"]}
              lineHeight={["2.5rem", "2.5rem", "2.5rem", "2rem"]}
              mt={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
              fontFamily="NotoSansSC-Medium"
            >
              <Heading
                mb="12px"
                fontSize="1.1rem"
                mt={"1.2rem"}
                color={colorMode === "light" ? "black" : "white"}
              >
                {data[2].frontmatter.title}
              </Heading>
            </PseudoBox>
            <Text
              mb="1.5em"
              fontSize="0.9rem"
              lineHeight="1.5em"
              color="#999"
              letterSpacing="0.025vw"
              fontFamily="NotoSansSC-Medium !important"
            >
              {data[2].frontmatter.description.substring(0, 70)}...
            </Text>
            <Stack isInline>
              {" "}
              <Img
                fixed={data[2].frontmatter.authorimg.childImageSharp.fixed}
                style={{ borderRadius: "50%" }}
              />
              <Flex flexDir="column" ml="0.5vw">
                <Text
                  fontSize="0.5rem"
                  color="#6873e5"
                  fontWeight="700"
                  lineHeight="1rem"
                >
                  {data[2].frontmatter.author}
                </Text>
                <Text
                  color="#aaa"
                  fontWeight="700"
                  fontSize="0.5rem"
                  lineHeight="1.3rem"
                >
                  {data[2].frontmatter.date}
                </Text>
              </Flex>
            </Stack>
          </Box>
        </Link>
      </PseudoBox>

      {/* 第4大栏目 */}
      <PseudoBox
        w={["100%", "45%", "45%", "31%"]}
        borderBottom="1px solid #eee"
        mx="auto"
        mb="4vw"
        paddingBottom="4vw"
        _hover={{ color: " #6873e5" }}
      >
        <Link to={data[3].fields.slug}>
          {/* 图片 */}
          <PseudoBox
            w="100%"
            maxW={["400px", "400px", "620px", "620px"]}
            mx="auto"
            boxShadow={ colorMode === "light" ? "-1.5em 1em 4em #ccc, 0em 0 1em #ccc" : "-1.5em 1em 4em #000, 0em 0 1em #2D3748"}
            position="relative"
            _hover={
              colorMode === "light"
                ? {
                    boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
                    top: "-1px",
                    transition: "all 1000ms ease 0s",
                  }
                : {
                    boxShadow: "-1em 0.5em 10em #4A5568,  0em 0 2em #4A5568;",
                    top: "-1px",
                    transition: "all 1000ms ease 0s",
                  }
            }
          >
            <Img fluid={data[3].frontmatter.img.childImageSharp.fluid} />
          </PseudoBox>
          {/* 描述 */}
          <Box px={["5vw", 0, 0, 0]}>
            <PseudoBox
              _hover={{ color: " #6873e5" }}
              mb="12px"
              fontWeight="900"
              fontSize={["2rem", "2rem", "2rem", "1.5rem"]}
              lineHeight={["2.5rem", "2.5rem", "2.5rem", "2rem"]}
              mt={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
              fontFamily="NotoSansSC-Medium"
            >
              <Heading
                mb="12px"
                fontSize="1.1rem"
                mt={"1.2rem"}
                color={colorMode === "light" ? "black" : "white"}
              >
                {data[3].frontmatter.title}
              </Heading>
            </PseudoBox>
            <Text
              mb="1.5em"
              fontSize="0.9rem"
              lineHeight="1.5em"
              color="#999"
              letterSpacing="0.025vw"
              fontFamily="NotoSansSC-Medium !important"
            >
              {data[3].frontmatter.description.substring(0, 70)}...
            </Text>
            <Stack isInline>
              {" "}
              <Img
                fixed={data[3].frontmatter.authorimg.childImageSharp.fixed}
                style={{ borderRadius: "50%" }}
              />
              <Flex flexDir="column" ml="0.5vw">
                <Text
                  fontSize="0.5rem"
                  color="#6873e5"
                  fontWeight="700"
                  lineHeight="1rem"
                >
                  {data[3].frontmatter.author}
                </Text>
                <Text
                  color="#aaa"
                  fontWeight="700"
                  fontSize="0.5rem"
                  lineHeight="1.3rem"
                >
                  {data[3].frontmatter.date}
                </Text>
              </Flex>
            </Stack>
          </Box>
        </Link>
      </PseudoBox>
      {/* 第5大栏目 */}

      <PseudoBox
        w={["100%", "44.6%", "44.6%", "47.6%"]}
        mx="auto"
        borderBottom="1px solid #eee"
        mb="4vw"
        pb="4vw"
        _hover={{ color: " #6873e5" }}
      >
        <Link to={data[4].fields.slug}>
          {" "}
          {/* 图片 */}
          <PseudoBox
            w="100%"
            maxW={["400px", "400px", "500px", "500px"]}
            mx="auto"
            _hover={{ color: " #6873e5" }}
            boxShadow={ colorMode === "light" ? "-1.5em 1em 4em #ccc, 0em 0 1em #ccc" : "-1.5em 1em 4em #000, 0em 0 1em #2D3748"}
            position="relative"
            _hover={
              colorMode === "light"
                ? {
                    boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
                    top: "-1px",
                    transition: "all 1000ms ease 0s",
                  }
                : {
                    boxShadow: "-1em 0.5em 10em #4A5568,  0em 0 2em #4A5568;",
                    top: "-1px",
                    transition: "all 1000ms ease 0s",
                  }
            }
          >
            <Img fluid={data[4].frontmatter.img.childImageSharp.fluid} />
          </PseudoBox>
          {/* 描述 */}
          <Box px={["5vw", 0, 0, 0]}>
            <Heading
              mb="12px"
              fontSize="1.1rem"
              mt={"1.2rem"}
              color={colorMode === "light" ? "black" : "white"}
            >
              {data[4].frontmatter.title}
            </Heading>
            <Text
              mb="1.5em"
              fontSize={["1.1rem", "1.1rem", "1.1rem", "1rem"]}
              lineHeight="1.5em"
              color="#999"
              letterSpacing="0.025vw"
              fontFamily="NotoSansSC-Medium !important"
            >
              {data[4].frontmatter.description.substring(0, 70)}...
            </Text>
            <Stack isInline mb="1vw">
              {" "}
              <Img
                fixed={data[4].frontmatter.authorimg.childImageSharp.fixed}
                style={{ borderRadius: "50%" }}
              />
              <Flex flexDir="column" ml="1rem">
                <Text
                  fontSize="0.5rem"
                  color="#6873e5"
                  fontWeight="700"
                  lineHeight="1rem"
                >
                  {data[4].frontmatter.author}
                </Text>
                <Text
                  color="#aaa"
                  fontWeight="700"
                  fontSize="0.5rem"
                  lineHeight="1.3rem"
                >
                  {data[4].frontmatter.date}
                </Text>
              </Flex>
            </Stack>
          </Box>
        </Link>
      </PseudoBox>

      {/* 第6大栏目 */}

      <PseudoBox
        w={["100%", "44.6%", "44.6%", "47.6%"]}
        mx="auto"
        borderBottom="1px solid #eee"
        mb="4vw"
        pb="4vw"
        _hover={{ color: " #6873e5" }}
      >
        <Link to={data[5].fields.slug}>
          {" "}
          {/* 图片 */}
          <PseudoBox
            w="100%"
            maxW={["400px", "400px", "500px", "500px"]}
            mx="auto"
            _hover={{ color: " #6873e5" }}
            boxShadow={ colorMode === "light" ? "-1.5em 1em 4em #ccc, 0em 0 1em #ccc" : "-1.5em 1em 4em #000, 0em 0 1em #2D3748"}
            position="relative"
            _hover={
              colorMode === "light"
                ? {
                    boxShadow: "-1em 0.5em 10em #ccc,  0em 0 2em #ccc;",
                    top: "-1px",
                    transition: "all 1000ms ease 0s",
                  }
                : {
                    boxShadow: "-1em 0.5em 10em #4A5568,  0em 0 2em #4A5568;",
                    top: "-1px",
                    transition: "all 1000ms ease 0s",
                  }
            }
          >
            <Img fluid={data[5].frontmatter.img.childImageSharp.fluid} />
          </PseudoBox>
          {/* 描述 */}
          <Box px={["5vw", 0, 0, 0]}>
            <Heading
              mb="12px"
              fontSize="1.1rem"
              mt={"1.2rem"}
              color={colorMode === "light" ? "black" : "white"}
            >
              {data[5].frontmatter.title}
            </Heading>
            <Text
              mb="1.5em"
              fontSize={["1.1rem", "1.1rem", "1.1rem", "1rem"]}
              lineHeight="1.5em"
              color="#999"
              letterSpacing="0.025vw"
              fontFamily="NotoSansSC-Medium !important"
            >
              {data[5].frontmatter.description.substring(0, 70)}...
            </Text>
            <Stack isInline mb="1vw">
              {" "}
              <Img
                fixed={data[5].frontmatter.authorimg.childImageSharp.fixed}
                style={{ borderRadius: "50%" }}
              />
              <Flex flexDir="column" ml="1rem">
                <Text
                  fontSize="0.5rem"
                  color="#6873e5"
                  fontWeight="700"
                  lineHeight="1rem"
                >
                  {data[5].frontmatter.author}
                </Text>
                <Text
                  color="#aaa"
                  fontWeight="700"
                  fontSize="0.5rem"
                  lineHeight="1.3rem"
                >
                  {data[5].frontmatter.date}
                </Text>
              </Flex>
            </Stack>
          </Box>
        </Link>
      </PseudoBox>
    </Flex>
  )
}

export default FirstRow
