//GuessTheNumberGameを総括するコンポーネント

import { useState, useEffect } from 'react';
import { ShowTheAnswerButton } from "./show_the_answer_button";
import { Formofgame_1 } from './form_of_game_1';
import styles from "styles/guess_number_game.module.scss"

export const GuessNumberGame = () => {
    const [numberToGuess, setNumberToGuess] = useState(0);
    const [userGuess, setUserGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    // const guess = Number(userGuess);
    //     //予測される数の設定（マウント時に設定される）
    //     useEffect(() => {
    //         const randomNumber = Math.floor(Math.random() * 100) + 1;
    //         setNumberToGuess(randomNumber);
    //     }, []);
    
    
    //     useEffect(() => {
    //         if (userGuess === '') {
    //             setMessage('');
    //             return;
    //         }
    
    //         if (isNaN(Number(userGuess)) || typeof guess != "number") {
    //             setMessage('Invalid input! Please enter a number.');
    //             return;
    //         }
    
    //     }, [userGuess]);
    

        return(
            <div className={styles.gameContainer}>
                <h1>Guess the Number!</h1>
                <div className={styles.rules}>
                    <div className={styles.item}>
                        ルール：
                        <br/>
                        <p>０: 1から100の自然数からランダムに選ばれた数値を当てるゲームです。以下の操作から数字を当ててみて下さい。</p>
                        <p>１: 予想した数を半角数字でYour Guessに入力して、GUESSボタンで正解かどうかを見ます。10回間違えると終了です。</p>
                        <p>
                        ２: 当てる数に対して、次の質問が合計5回まで可能です。紫色の枠内にて、質問を行えます。
                        <br/>
                        質問１： 1~10までの整数を1つ選択し、それで割ったあまりがいくつか？
                        <br/>
                        質問２： 素数か否か？（この質問ができるのは1回のみ）
                        </p>
                        <p>３: Show The Answerで、答えを見られます。</p>
                        <p>４: ページ下にメモ欄があります。必要に応じてメモ用に使ってください。</p>
                        <p>５: ページを更新したり、移動するとゲームやメモがリセットされます。</p>
                    </div>
                </div>
                <p className={styles.response}>{message}</p>
                <Formofgame_1
                    setUserGuess={setUserGuess}
                    userGuess={userGuess}
                    attempts={attempts}
                    setMessage={setMessage}
                    numberToGuess={numberToGuess}
                    setAttempts={setAttempts}
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