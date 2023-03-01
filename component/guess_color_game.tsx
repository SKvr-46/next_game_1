import { useState, useEffect } from "react";
import { Formofgame_2 } from "./form_of_game_2";
import styles from "styles/guess_color_game.module.scss"

export const GuessColorGame = () => {
    const colorSet = [
    "Blue",
    "Red",
    "Yellow",
    "Green",
    "Black",
    "White",
    "Purple",
    "Pink",
    "Brown",
    "Aqua",
    ]
    const [attempts, setAttempts] = useState(0);
    const [randomColorSet, setRandomColorSet] = useState<string[]>([])
    const [message, setMessage] = useState("")
    const [predictColorArray, setPredictColorArray] = useState<string[]>([])
    const [AllpredictColorArray, setAllPredictColorArray] = useState<string[][]>([])

    useEffect(() => {
        let tempRandomColorSet: string[] = [];
        while (tempRandomColorSet.length < 4) {
            const randomIndex = Math.floor(Math.random() * colorSet.length)
            const randomColor = colorSet[randomIndex]
            tempRandomColorSet.push(randomColor)
        }
        setRandomColorSet(tempRandomColorSet)
    }, []);



    return (
        <div className={styles.gameContainer}>
            <h1>Guess the 4 Colors!</h1>
            <div className={styles.rules}>
                    <div className={styles.item}>
                        ルール：
                        <br/>
                        <p>０: 下の選択肢にある10の色からランダムに4つ選ばれるので、順番通りにそれを当てるゲームです。</p>
                        <p>１: 対応する色のボタンを順番に押していき、GUESSボタンで結果を見ます。10回間違えると終了です。</p>
                        <p>
                        ２: 1度の予想に対して、"hit"と"blow"によって答えへのヒントを得ます。説明は以下の通りです。
                        <br/>
                        hit： 予想した色のうち、正解が存在する。
                        <br/>
                        blow： 予想した色のうち、その色が正解に含まれるが、位置が違うものが存在する。
                        <br/>
                        </p>
                        <p>例：[Red, Blue, Green, Blue] が答えだとする。
                        <br/>
                        プレイヤーが、[Red, Yellow, Blue, Aqua]と予想したら、Redは位置と色が合っていて、そのほかに
                        合っている色はないので、1hit. 
                        <br/>
                        Blueは、3番目に選んでいるから、答えと合ってはいないが、答えの中にBlueがあるので、1blow.したがってプレイヤーは
                        ヒントとして、1hit 1blowを得る。他にも、
                        <br/>
                        [Blue, Brown, Blue, White]と選ぶと、0hit, 2blow。
                        <br/>
                        [Black, Blue, White,Aqua]と選ぶと、1hit, 0blow。

                        </p>
                        <p>３: Show The Answerで、答えを見られます。</p>
                        <p>４: ページ下にメモ欄があります。必要に応じてメモ用に使ってください。</p>
                        <p>５: ページを更新したり、ページ下のReset This Gameボタンで、ゲームがリセットされます。</p>
                    </div>
                </div>
            <p className={styles.response}>{message}</p>
            <Formofgame_2 
            randomColorSet={randomColorSet}
            predictColorArray={predictColorArray}
            setPredictColorArray={setPredictColorArray}
            attempts={attempts}
            setAttempts={setAttempts}
            message={message}
            setMessage={setMessage}
            AllpredictColorArray={AllpredictColorArray}
            setAllPredictColorArray={setAllPredictColorArray}
            />
        </div>
    );
};