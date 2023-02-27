import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GuessNumberGame } from '@/component/guess_number_game';
import { MemoArea } from '@/component/memoarea';
import { Container } from '@/component/container';
import styles from "styles/game_1.module.scss"

const Game_1 = () => {
    const [numberToGuess, setNumberToGuess] = useState(0);
    const [userGuess, setUserGuess] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();


    //予測される数の設定（マウント時に設定される）
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        setNumberToGuess(randomNumber);
    }, []);


    useEffect(() => {
        if (userGuess === '') {
            setMessage('');
            return;
        }


        if (isNaN(Number(userGuess))) {
            setMessage('Invalid input! Please enter a number.');
            return;
        }
    }, [userGuess]);


    return (
            <Container>
                <GuessNumberGame/>
                <MemoArea/>
            </Container>
    );
};

export default Game_1;


