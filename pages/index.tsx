import { useRouter } from "next/router"
import { PartOfHome } from "@/component/part_of_home"
import Link from "next/link"
import { Container } from "@/component/container"

const Home = () => {
  const router = useRouter()

  const explain_1 = (
    "1から100の整数がランダムに選ばれ、その数字をプレイヤーが10回までのチャンスで当てるゲームです。\
    プレイヤーは1回のチャンスで数字を予想し、\
    コンピュータが用意したものに一致するか教えてもらえます。\
    プレイヤーは3種類のヒントを駆使して、正解を当てるようにします。\
    このヒントをもとに、プレイヤーはある程度、運の要素なく予想を立てることができます。\
    10回までのチャンスで正解を当てることが目的であり、ヒントを駆使して最適な予想を行い、正解を目指します。\
    数学が得意な方はぜひチャレンジしてみて下さい！"
  )
  
  const explain_2 = (
    "10種類の色がランダムに4つ選ばれ、その4つの色を順番通りにプレイヤーが10回までのチャンスで当てるゲームです。\
    プレイヤーは1回のチャンスで色と順番を予想し、\
    コンピュータが用意したものに一致するか教えてもらえます。\
    プレイヤーはhitとblowというヒントを駆使して、正解を当てるようにします。\
    このヒントをもとに、プレイヤーはある程度、運の要素なく予想を立てることができます。\
    10回までのチャンスで正解を当てることが目的であり、ヒントを駆使して最適な予想を行い、正解を目指します。\
    論理的思考力に自信のある方はぜひチャレンジしてみて下さい！"
  )

  return(
    <Container>
      <PartOfHome pageUrl={"/game_1"} buttonTitle={"Go To Game1"} pageexplanation={explain_1}/>
      <PartOfHome pageUrl={"/game_2"} buttonTitle={"Go To Game2"} pageexplanation={explain_2}/>
    </Container>
  )
}


export default Home