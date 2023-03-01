import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GuessNumberGame } from '@/component/guess_number_game';
import { Container } from '@/component/container';
import styles from "styles/game_1.module.scss"

const Game_1 = () => {


    return (
            <Container>
                <GuessNumberGame/>
            </Container>
    );
};

export default Game_1;


