import { Meta } from '@/component/meta';
import { GuessNumberGame } from '@/component/guessNumberGame';
import { Container } from '@/component/container';
import { GetStaticProps } from 'next'

const Game_1 = () => {


    return (
            <Container>
                <Meta pageTitle={"GAME1"} pageDesc={"GAME1"}/>
                <GuessNumberGame/>
            </Container>
    );
};

export default Game_1;


export const getStaticProps:GetStaticProps = async () => {
    return {       
        props : {}
    }
}