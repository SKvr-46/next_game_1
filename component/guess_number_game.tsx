//GuessTheNumberGameを総括するコンポーネント

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GuessButton } from './guess_button';
import { ShowTheAnswerButton } from "./show_the_answer_button";
import { Formofgame_1 } from './form_of_game_1';
import styles from "styles/guess_number_game.module.scss"

export const GuessNumberGame = () => {
    const [numberToGuess, setNumberToGuess] = useState(0);
    const [userGuess, setUserGuess] = useState("");
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    const guess = Number(userGuess);
        //予測される数の設定（マウント時に設定される）
        useEffect(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            setNumberToGuess(randomNumber);
        }, []);
    
    
        useEffect(() => {
            if (userGuess === '') {
                setMessage('');
                return;
            }
    
            if (isNaN(Number(userGuess)) || typeof guess != "number") {
                setMessage('Invalid input! Please enter a number.');
                return;
            }
    
        }, [userGuess]);
    

        return(
            <div className={styles.gameContainer}>
                <h1>Guess the Number!</h1>
                <p>
                    ルール：
                    <br/>
                    1:挑戦回数は10回まで。
                    <br/>
                    2:質問は5回まで。
                    <br/>
                    3:ページを更新したり移動すると当てる数字が変わってしまいます。
                </p>
                <p>レスポンス：{message}</p>
                <Formofgame_1
                    setUserGuess={setUserGuess}
                    userGuess={userGuess}
                    attempts={attempts}
                    setMessage={setMessage}
                    numberToGuess={numberToGuess}
                />
                <GuessButton 
                    userGuess={userGuess}
                    numberToGuess={numberToGuess}
                    setAttempts={setAttempts}
                    setMessage={setMessage}
                    attempts={attempts}
                />
                <ShowTheAnswerButton 
                numberToGuess={numberToGuess}
                userGuess={userGuess}
                attempts={attempts}
                setAttempts={setAttempts}
                setMessage={setMessage}
                setNumberToGuess={setNumberToGuess}
                />
            </div>
        )

        }