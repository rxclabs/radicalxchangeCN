import React from "react"
import styled from "@emotion/styled"
import { useColorMode } from "@chakra-ui/core"

const Wrapper_light = styled.div`
  p {
    color: #555;
    font-size: 1.2rem;
    margin-top: 3.5vh;
    margin-bottom: 3.5vh;
    line-height: 4.25vh;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.25;
    font-weight: 700;
    font-family: NotoSansSC-Medium;
    color: #000;
    margin-top: 5vh;
  }
  blockquote > p {
    font-size: 1rem;
    color: #a8a9a6;
    margin-top: 4vh;
    margin-bottom: 4vh;
    line-height: 3.25vh;
  }

  ul {
    color: #555;
    margin-left: 1.5vw;
  }

  ol {
    color: #555;
    margin-left: 1.5vw;
  }

  li {
    line-height: 4.25vh;
    font-family: NotoSansSC-Regular;
    font-size: 1.2rem;
  }
`

const Wrapper_dark = styled.div`
  p {
    color: #fff;
    font-size: 1.2rem;
    margin-top: 3.5vh;
    margin-bottom: 3.5vh;
    line-height: 4.25vh;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.25;
    font-weight: 700;
    font-family: NotoSansSC-Medium;
    color: #fff;
    margin-top: 5vh;
  }
  blockquote > p {
    font-size: 1rem;
    color: #a8a9a6;
    margin-top: 4vh;
    margin-bottom: 4vh;
    line-height: 3.25vh;
  }

  ul {
    color: #fff;
    margin-left: 1.5vw;
  }

  ol {
    color: #fff;
    margin-left: 1.5vw;
  }

  li {
    line-height: 4.25vh;
    font-family: NotoSansSC-Regular;
    font-size: 1.2rem;
  }
`

const Content = ({ input }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (<>{console.log(colorMode)} { colorMode === 'light' ?  <Wrapper_light dangerouslySetInnerHTML={{ __html: input }} /> : <Wrapper_dark dangerouslySetInnerHTML={{ __html: input }} />}</>)
}

export default Content
