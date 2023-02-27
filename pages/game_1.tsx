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
    const [attempts, setAttempts] = useState(0);
    const [questiontime, setQuestionTime] = useState(0)
    const [divisionNumber, setDivisionNumber] = useState(0);
    const [AnswertoQuestion, setAnswertoQuestion] = useState("")
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

        const guess = Number(userGuess);

        if (isNaN(guess) || typeof guess != "number") {
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


