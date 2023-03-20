import { Container } from "@/component/container";
import { GuessColorGame } from "@/component/guessColorGame";
import { GetStaticProps } from 'next'
import { Meta } from "@/component/meta";


const Game_2 = () => {


    return(
        <Container>
            <Meta pageTitle={"GAME2"} pageDesc={"GAME2"}/>
            <GuessColorGame/>
        </Container>
        )
}

export default Game_2;

export const getStaticProps:GetStaticProps = async () => {
    return {       
        props : {}
    }
}