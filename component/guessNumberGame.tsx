//GuessTheNumberGameを総括するコンポーネント

import { useState, useEffect } from 'react'
import { Formofgame1 } from './formOfGame1'
import styles from "styles/guessNumberGame.module.scss"

export const GuessNumberGame = () => {
    const [numberToGuess, setNumberToGuess] = useState(0)
    const [userGuess, setUserGuess] = useState('')
    const [message, setMessage] = useState('')
    const [attempts, setAttempts] = useState(0)
    const [questionCount, setQuestionCount] = useState(0)


    const guess = Number(userGuess);
        //予測される数の設定（マウント時に設定される）
        useEffect(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1
            setNumberToGuess(randomNumber)
        }, []);
    
    
        //当てる数字をランダムに決める。
        useEffect(() => {
            if (userGuess === '') {
                setMessage('')
                return;
            }
    
            if (isNaN(Number(userGuess)) || typeof guess != "number") {
                setMessage('Invalid input! Please enter a number.')
                return
            }
    
        }, [userGuess]);
    

        return(
            <div className={styles.gameContainer}>
                <h1>Guess The Number!</h1>
                <div className={styles.rules}>
                    <div className={styles.item}>
                        ルール：
                        <br/>
                        <p>０: 1から100の自然数からランダムに選ばれた数値を当てるゲームです。以下のルールのもとで数字を当ててみて下さい。</p>
                        <p>１: 予想した数を半角数字でYour Guessに入力して、GUESSボタンで正解かどうかを見ます。10回間違えると終了です。</p>
                        <p>
                        ２: 当てる数に対して、次の質問が合計5回まで可能です。紫色の枠内にて、質問を行えます。
                        <br/>
                        質問１： 2~10までの整数を1つ選択し、それで割ったあまりがいくつか？
                        <br/>
                        質問２： 素数か否か？（1回のみ）
                        <br/>
                        質問３： 素因数分解した時、異なる素因数はいくつあるか？（1回のみ）
                        <br/>
                        <span className={styles.que}>質問４： 入力した数値が答えより大きいか小さいか？</span>
                        <br/>
                        </p>
                        <p>
                            注）質問４の結果でHighが出た時は、答えが入力値より大きいことを意味します。<br/>また、すでに質問回数が4回の時は、質問４は使えません。
                        </p>
                        <p>３: Show The Answerで、答えを見られます。</p>
                        <p>４: ページ下にメモ欄があります。必要に応じてメモ用に使ってください。</p>
                        <p>５: ページを更新したり、ページ下のReset This Gameボタンで、ゲームがリセットされます。</p>
                    </div>
                </div>
                <Formofgame1
                    setUserGuess={setUserGuess}
                    userGuess={userGuess}
                    setAttempts={setAttempts}
                    attempts={attempts}
                    setMessage={setMessage}
                    message={message}
                    numberToGuess={numberToGuess}
                    questionCount={questionCount}
                    setQuestionCount={setQuestionCount}
                />
            </div>
        )

        }