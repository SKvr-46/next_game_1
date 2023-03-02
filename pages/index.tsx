import { GetStaticProps } from 'next'
import { PartOfHome } from "@/component/part_of_home"
import { Container } from "@/component/container"
import { Meta } from '@/component/meta'
import styles from "styles/index.module.scss"

const Home = () => {

  const explain_1 = (
    "1から100の整数がランダムに選ばれるので、プレイヤーが10回までのチャンスでその数字を当てるゲームです。\
    プレイヤーは3種類のヒントと数学的な思考力を駆使して、運の要素を低減しつつ正解を目指します。\
    ヒントは合計5回まで使用可能です。\
    数学が得意な方はぜひチャレンジしてみて下さい！"
  )
  
  const explain_2 = (
    "10種類の色からランダムに4つ選ばれるので、プレイヤーはその4つの色を順番通りに10回までのチャンスで当てるゲームです。\
    プレイヤーは予想ごとに返される『hit』と『blow』というヒントを駆使して、運の要素を低減しつつ正解を目指します。\
    論理的思考力に自信のある方はぜひチャレンジしてみて下さい！"
  )

  return(
    <Container>
      <Meta pageTitle={"HOME"} pageDesc={"GAMELAB"}/>
      <div className={styles.homewrapper}>
        <PartOfHome pageUrl={"/game_1"} buttonTitle={"Go To Game1"} pageexplanation={explain_1}/>
        <PartOfHome pageUrl={"/game_2"} buttonTitle={"Go To Game2"} pageexplanation={explain_2}/>
      </div>
    </Container>
  )
}


export default Home

export const getStaticProps:GetStaticProps = async () => {
  return {       
      props : {}
  }
}