import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// ui
import {
  Heading,
  Box,
  Text,
  Divider,
  Link,
  useColorMode,
} from "@chakra-ui/core"
import ConceptBody from "../components/conceptBody"

const Concept = () => {
  // 夜间模式状态
  const { colorMode, toggleColorMode } = useColorMode()
  let list = [
    [
      {
        title: "激进市场的第二章",
        link: "http://radicalmarkets.com/chapters/radical-democracy/",
      },
      {
        title: "激进的地方民主手册",
        link:
          "https://www.radicalxchange.org/files/The_Handbook_for_Radical_Local_Democracy.pdf",
      },
      {
        title: "二次付款：入门",
        link: "https://vitalik.ca/general/2019/12/07/quadratic.html",
      },
      {
        title: "维基百科",
        link: "https://en.wikipedia.org/wiki/Quadratic_voting",
      },
    ],
    [
      {
        title: "激进的地方民主手册",
        link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3243656",
      },
      {
        title: "自由主义激进主义：慈善配对基金的灵活设计",
        link: "https://vitalik.ca/general/2019/12/07/quadratic.html",
      },
      {
        title: "二次付款：入门",
        link: "https://vitalik.ca/general/2019/12/07/quadratic.html",
      },
    ],
    [
      {
        title: "激进市场的第一章",
        link: "http://radicalmarkets.com/chapters/property-is-monopoly/",
      },
    ],
    [
      {
        title: "激进的地方民主手册",
        link:
          "https://www.radicalxchange.org/The_Handbook_for_Radical_Local_Democracy.pdf",
      },
    ],
    [
      {
        title: "数据自由法",
        link: "https://www.radicalxchange.org/files/DFA.pdf",
      },
      {
        title: "激进市场的第5章",
        link: "http://radicalmarkets.com/chapters/data-as-labor/",
      },
      {
        title: "谁拥有未来？",
        link:
          "https://www.simonandschuster.com/books/Who-Owns-the-Future/Jaron-Lanier/9781451654974",
      },
    ],
    [
      {
        title: "部门间社会数据",
        link: "https://blog.radicalxchange.org/blog/posts/2019-10-24-uh78r5/",
      },
      {
        title: "https://blog.radicalxchange.org/blog/posts/2019-06-06-d4utdx/",
        link: "",
      },
      {
        title: "激励去中心化社会身份的案例。第二部分",
        link:
          "https://medium.com/@lucas.geiger/motivating-the-case-for-decentralized-social-identity-part-two-4ea75f3c7c42",
      },
      {
        title: "激励去中心化社会身份的理由：第三部分",
        link: "https://blog.radicalxchange.org/blog/posts/2019-06-08-51kyu5/",
      },
    ],
    [
      {
        title: "博格尔对指数基金发出警告",
        link:
          "https://www.wsj.com/articles/bogle-sounds-a-warning-on-index-funds-1543504551",
      },
      {
        title: "激进市场的第四章",
        link: "http://radicalmarkets.com/chapters/dismembering-the-octopus/",
      },
      {
        title: "普通股股份面临监管审查",
        link:
          "https://amp.ft.com/content/59325462-fe57-11e8-aebf-99e208d3e521?",
      },
    ],
  ]

  return (
    <Layout>
      <SEO title="理念" />
      <Box
        w="100%"
        maxW={1080}
        mx="auto"
        px="30px"
        pt={["20px", "20px", "50px", "40px"]}
        mt="2vw"
        mb="30vh"
      >
        <Heading fontSize="2.5rem" fontFamily="NotoSansSC-Regular">
          理念与思潮
        </Heading>
        <Text
          color="#969696"
          mt="1.2vw"
          fontWeight={500}
          fontSize="1.2rem"
          fontFamily="NotoSansSC-Regular"
        >
          颠覆传统观念，提出独特见解。
        </Text>
        <Divider w="100%" maxW={1018} borderColor="#ddd" mt="1vw" mx="auto" />
        <Text mt="10vh">
          激发RadicalxChange运动的思想源于{" "}
          <Link
            href="https://press.princeton.edu/books/hardcover/9780691177502/radical-markets"
            textDecor="underline"
            color={colorMode === "light" ? "#3d1472" : "#9665D4"}
            fontWeight={600}
          >
            Radical Markets
          </Link>
          一书，但绝不限于此。相反，它们基于新的研究，社区的反馈以及我们从在现实世界中尝试这些想法中学到的知识而成长和发展。
          为了给您一个感觉，下面我们列出了一些当今驱动RadicalxChange的最重要概念。尽管您不必分享我们对所有或任何一种参与的热情-的确，我们鼓励您提出批评-意识到它们是一个好主意。但是请记住，该列表会随着时间而变化。因此，请经常回来，并让我们知道您的想法。
        </Text>

        <ConceptBody
          title="二次投票"
          body={`民主，无论是在一个国家，一个社区还是在一个地方的俱乐部中，都是要让每个人都有发言权。但是当前的投票方法错过了许多人们的真实想法。二次投票是一种新的投票方式，使个人不仅可以表达自己的选择，还可以表达自己对投票的强烈意愿。它几乎可以应用于组需要做出决定或优先考虑选项的任何情况。实际上，在科罗拉多州这样的地方已经是。\n \n  为了加快二次投票的速度，建议采取以下措施:`}
          list={list[0]}
        />

        <ConceptBody
          title="二次金融"
          body={`私有财产是资本主义制度的核心，具有许多优势，尤其是在刺激投资方面。但是私有制常常使利润排在社区之前。社会主义者认为，所有财产都是一种共同的利益，因此，应始终将其置于最有生产力的共同目的。但是，社会主义者很难确定最有生产力的目的是什么，并激励人们去追求它。在RadicalxChange，我们认为可以同时利用两种方法来实现最佳性能。一种方法是通过COST。根据COST，每个人都根据其认为的价值对其财产纳税，但也必须准备将其出售给愿意出价的人。起初听起来很激进，COST是一种很好的方式，可以重新审视拥有某物的含义并评估某物的真正价值。我们建议看看。\n \n 有关COST的更多信息，我们建议：`}
          list={list[1]}
        />

        <ConceptBody
          title="共同所有权自评税（COST）"
          body={`私有财产是资本主义制度的核心，具有许多优势，尤其是在刺激投资方面。但是私有制常常使利润排在社区之前。社会主义者认为，所有财产都是一种共同的利益，因此，应始终将其置于最有生产力的共同目的。但是，社会主义者很难确定最有生产力的目的是什么，并激励人们去追求它。在RadicalxChange，我们认为可以同时利用两种方法来实现最佳性能。一种方法是通过COST。根据COST，每个人都根据其认为的价值对其财产纳税，但也必须准备将其出售给愿意出价的人。起初听起来很激进，COST是一种很好的方式，可以重新审视拥有某物的含义并评估某物的真正价值。我们建议看看。\n \n 有关COST的更多信息，我们建议：`}
          list={list[2]}
        />

        <ConceptBody
          title="通过拍卖出售的自我评估许可证（SALSA）"
          body={`在有限的公共空间中使用或操作的权利也需要社区的监管。同样，在这里，传统的授予权利的方法（例如出租车奖章或街头自动售货牌照）也需要更新。根据SALSA，使用与COST相同的系统拍卖许可证；许可证持有人根据他们认为许可证的价值来纳税。要注意的是：他们必须准备将许可证出售给愿意支付其自我评估价格的任何人。结果是更真实地表达了事物的价值，消除了许可证中的黑市以及停止了扣押。\n \n 有关SALSA的更多信息，请参见：`}
          list={list[3]}
        />

        <ConceptBody
          title="数据尊严"
          body={`数据可能已成为世界上最有价值的商品，但我们每天都免费将其免费赠送给获得大部分回报的大公司和其他公司。我们认为是时候重新考虑了。对于我们来说，在日常生活中生成数据是一种劳动。它不仅应该得到补偿，而且我们应该能够集体讨价还价以获取合理的数据工资。因此，我们主张采用全新的数据政策，既要反映这种新环境，又要在数据经济的需求与数据生产者的利益之间取得更好的平衡。\n \n 有关数据尊严的更多信息，请参见：`}
          list={list[4]}
        />

        <ConceptBody
          title="部门间社会数据"
          body={`在高度数字化的世界中，数据不仅在信息方面而且在身份方面都具有价值。但是，如今，Internet上的身份主要掌握在科技公司和其他公司的手中。这个问题是众所周知的，并且已经激发了对分散式或用户控制的数字身份的大量研究。在RadicalxChange，我们欢迎这项工作，但也希望进一步进行。我们相信，无论是在现实世界还是虚拟世界中，个人的身份都是由一个人的社会，业务和其他关系的交集构成的。这种跨部门社会数据可能是开发新知识和信任网络的关键，这些知识和信任网络不依赖政府或科技公司，而是随着我们的生活而有机地增长和发展。\n \n 有关ISD的更多信息，开始的好地方包括：`}
          list={list[5]}
        />

        <ConceptBody
          title="激进的反托拉斯"
          body={`我们大多数人都可以同意垄断对社会不利。 这就是为什么我们有反托拉斯法。 但是，现代垄断通常是隐藏的，甚至对垄断者本身也是如此。 研究表明，美国的最大机构投资者是最大的股东，因此也是美国公司的所有者，经常在不了解自己在做什么的情况下从事有害的垄断行为。 我们认为现在是一些激进的新反托拉斯思想的好时机：不要在市场上束腰，而要利用市场力量作为抵制垄断扭曲的天然缓冲。\n \n 有关基本反托拉斯的更多信息，请参见：`}
          list={list[6]}
        />
      </Box>
    </Layout>
  )
}

export default Concept
