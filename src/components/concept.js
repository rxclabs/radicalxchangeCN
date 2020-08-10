import React from "react"

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
        title: "地区民主手册",
        link: "https://www.radicalxchange.org/files/The_Handbook_for_Radical_Local_Democracy.pdf",
      },
      {
        title: "自由激进主义：慈善配比基金的灵活设计",
        link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3243656",
      },
      {
        title: "二次方支付之入门篇",
        link: "https://vitalik.ca/general/2019/12/07/quadratic.html",
      },
    ],
    [
      {
        title: "丰足与稀缺",
        link:
          "https://blog.radicalxchange.org/blog/posts/between-scarcity-and-abundance/",
      },
      {
        title: "激进市场的第一章",
        link: "http://radicalmarkets.com/chapters/property-is-monopoly/",
      },
      {
        title: "地区民主手册",
        link:
          "https://www.radicalxchange.org/files/The_Handbook_for_Radical_Local_Democracy.pdf",
      },
      {
        title: "千禧代、Zoomers以及SALSA",
        link:
          "https://blog.radicalxchange.org/blog/posts/millennials-zoomers-and-salsa-just-radical-enough/",
      },
      {
        title: "财产狂想曲",
        link:
          "https://medium.com/blockchannel/reimagining-property-fbce9d3832a4",
      },
    ],
    [
      {
        title: "数据自由法案",
        link: "https://www.radicalxchange.org/files/DFA.pdf",
      },
      {
        title: "激进市场第五章",
        link: "http://radicalmarkets.com/chapters/data-as-labor/",
      },
      {
        title: "谁该拥有未来？",
        link:
          "https://www.simonandschuster.com/books/Who-Owns-the-Future/Jaron-Lanier/9781451654974",
      }
    ],
    [
      {
        title: "交联社交数据",
        link: "https://blog.radicalxchange.org/blog/posts/2019-10-24-uh78r5/",
      },
      {
        title: "去中心化社交身份案例激励：Part 1",
        link: "https://blog.radicalxchange.org/blog/posts/2019-06-06-d4utdx/",
      },
      {
        title: "去中心化社交身份案例激励：Part 2",
        link:
          "https://medium.com/@lucas.geiger/motivating-the-case-for-decentralized-social-identity-part-two-4ea75f3c7c42",
      }
      ,
      {
        title: "去中心化社交身份案例激励：Part 3",
        link:
          "https://blog.radicalxchange.org/blog/posts/2019-06-08-51kyu5/",
      }
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
    <Box
      w="100%"
      maxW={1080}
      mx="auto"
      px="30px"
      pt={["20px", "20px", "50px", "40px"]}
      mt="2vw"
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
        RadicalxChange
        (以下简称RxC），中文翻译为激进变革或基进变革，是一个全球范围内的思潮与倡议。其思想来源于Glen
        Weyl合著的{" "}
        <Link
          href="https://press.princeton.edu/books/hardcover/9780691177502/radical-markets"
          textDecor="underline"
          color={colorMode === "light" ? "#3d1472" : "#9665D4"}
          fontWeight={600}
        >
          《 激进市场》(Radical Markets)
        </Link>
        一书，但探索范围远不止于书中涉及的理论。相反，RxC不断往纵深处发展，基于时下最新的研究探讨公平、税收、金融、社会、科技、区块链、健康等领域，并形成了一个跨地域的活跃社区。RxC希望通过科技和设计，缔造一个更美好的将来。
        为了给您一个直观而简要的理解，我们列出了一些驱动RxC的最重要概念和思想。你不必要理解它们的全部，选取你感兴趣的方面，对照现状进行一些有益的思考。
      </Text>

      <ConceptBody
        title="二次方投票 Quadratic Voting"
        body={`民主，是社会主义核心价值观最重要内容之一。无论是在任一国家、地区或社会，或即使是具体到一个俱乐部，投票的目的都是要让每个人都有发言权。但是很不幸，目前的投票机制存在根本性的设计问题。当需要投票决定事关整个集体利益的事务时，当前的投票方法掩盖了人们的真实想法。二次方投票为此而诞生，这是一种全新的投票方式，使个人不仅可以表达自己的选择，还可以表达自己对投票的意愿程度。它可以被应用在几乎所有需要投票决策的地方和场合，以此实现得到一个优选方案的目的。实际上，科罗拉多州已经这么做了。\n \n  为了更好理解二次方投票，建议阅读以下材料（目前为英文版）：`}
        list={list[0]}
      />

      <ConceptBody
        title="二次方金融 QuadraticFinance"
        body={`资助公共产品，尤其是共享的基础设施或者开源软件，是民主社区面临的一个关键挑战。即使不考虑别的因素，单单就“搭便车”的现象就已经够令决策者挠头的了。其中一个很好的解决方案是配比基金法。配比基金通常的做法是：当个人捐献一定数量资金的时候，政府或慈善机构会捐出相匹配数量的资金。 过去，执行这种方法依靠的是一个中心化的角色来完成的，通常导致实际情况并不能反映社区的真实需求。二次方金融的出现，为解决这个问题提供了绝好的参考。二次方金融，通过对项目的捐献者数量来衡量其重要性程度，进而对其做出基金配比，而不是像传统一样，锚定其捐献数量的大小。跟二次方投票类似，二次方金融的精妙之处是获取社区的真实想法并将其付诸实践。要观察这方面的实践，Gitcoin奖赏 (Gitcoin Grants) 第3轮 和 第4轮是极佳的案例。\n \n 当然，读者有兴趣的话，这里有更详细的材料可以进行阅读：`}
        list={list[1]}
      />

      <ConceptBody
        title="拍卖式自售 SALSA"
        body={`私有财产是资本主义制度的核心，它具有许多优势，尤其在刺激投资方面。它通常的弊端是社区利益与拥有权之间难以调和。而另一方面，一些社会主义者相信所有财产都应该属于公共所有以尽其用，但是却面临接下来的挑战，难以确定具体最有效率的方法，以及如何激励人们来找到这些方法。在RadicalxChange，我们认为SALSA可能是上述困境的良方妙药。在SALSA中，每个人根据其认为的价格对其财产进行缴税 – 但同时必须愿意在任意时刻下将其出售给愿意以该价格购买的任何人。虽然起初听起来很激进，但SALSA是管理有限资源的一种更加连贯和可持续的方式。其意义包括更有效地利用资源，更好地分享公共财产，公平的财产税收，以及涉及更深层次的经济平等问题。\n \n 一头雾水？下面是一些有益的阅读：`}
        list={list[2]}
      />

      <ConceptBody
        title="数据尊严 Data Dignity"
        body={`数据已经成为世界上可能最有价值的商品，但我们每天都给大公司和无关方无偿奉上，他们撮取了绝大部分的收益，私饱中囊。 是时候作出改变了。对于我们来说，在日常生活中生成数据是一种劳动，它不仅应该得到回报，而且应该能够被集体协商以获取一个合理的数据工资。因此，我们主张采用全新的数据政策，既要反映这种新形势，又要在数据经济的需求与数据生产者的利益之间取得更好的平衡。\n \n 更多的相关阅读：`}
        list={list[3]}
      />

      <ConceptBody
        title="跨界社交数据 Intersectional Social Data"
        body={`在高度数字化的世界中，无论是数据的信息本身还是数据身份，都具有独特的价值。可悲的是，当今的互联网，原本属于个体的身份很大程度上被科技巨头及其无关方肆意滥用。这是个普遍存在且令人公愤的问题，因此产生并激发了对去中心化方案和用户完全控制应用的相关研究。RadicalxChange拥抱并期望推动这项工作的向前发展。我们坚信，无论是在现实世界还是虚拟世界，个人身份是社交，商业和其它关系的交集。这种交联社交数据，很可能成为未来新知识和信任网络的新基石，不再依赖政府或科技巨头，并且伴随着我们的一生，直至生命终结。可以想象，数据就是我们个体在这个世界上存在过的痕迹，生命证明(Proof-of-Live)且唯一。`}
        list={list[4]}
      />

      <ConceptBody
        title="激进的反托拉斯 Radical Antitrust"
        body={`之所以有反托拉斯法的存在，是因为大多数人都能同意垄断对社会有害的。 但是，当今的垄断常常不易被发现，甚至垄断者本身也觉察不出来。 研究表明，美国公司的最大股东通常是大型机构投资者，因此他们是这些公司的实际所有者。这些机构通常在无意识地做出对社会有害的垄断行为。是时候改变现状了，我们找到了一些全新的反托拉斯理念，充分借助市场的内在力量，来抵御垄断所造成的扭曲。\n \n关于更多的进击的反托拉斯，请阅读以下材料：`}
        list={list[5]}
      />
    </Box>
  )
}

export default Concept
