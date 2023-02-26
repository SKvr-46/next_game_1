//YourGuessより下のフォームコンポーネント

import { useState } from "react";
import { useRouter } from "next/router";
import { Division_Hint } from "./division_hint";
import { PrimeNumber_Hint } from "./primenumber_hint";
import styles from "styles/form_of_game_1.module.scss"
import { GuessButton } from './guess_button';

type Formofgame_1PropsType = {
    setUserGuess:React.Dispatch<React.SetStateAction<string>>
    userGuess:string
    attempts:number
    setAttempts:React.Dispatch<React.SetStateAction<number>>
    setMessage:React.Dispatch<React.SetStateAction<string>>
    numberToGuess:number
}


export const Formofgame_1 = (props:Formofgame_1PropsType) => {
        const { setUserGuess,userGuess, attempts,setMessage, setAttempts,numberToGuess} = props
        const [questiontime, setQuestionTime] = useState(0)
        const [divisionNumber, setDivisionNumber] = useState(0);
        const [AnswertoQuestion, setAnswertoQuestion] = useState("")
        const [answersToQuestion, setAnswersToQuestion] =useState<Array<string>>([])


        //フォームが送信されたときに実行されるイベントハンドラ
        const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
            //フォームの送信ボタンをクリックした場合に、ページがリロードされるのを防止する
            event.preventDefault();
            // setUserGuess('');
        };

        //questiontime制御
        

        const gameIsOver = (attempts:number) => {
            if(attempts >= 10 && Number(userGuess) !== numberToGuess) {
                return true
            } 
            else {
                return false
            }
        }

    return(
        <form onSubmit={handleGuess} className={styles.formContainer}>
            <div className={styles.responses}>
                <label>
                Your Guess:
                <input type="text" onChange={(event) => setUserGuess(event.target.value)} />
                </label>
                <br />
                <div className={styles.guessbutton}>
                    <GuessButton 
                        userGuess={userGuess}
                        numberToGuess={numberToGuess}
                        setAttempts={setAttempts}
                        setMessage={setMessage}
                        attempts={attempts}
                    />
                </div>
                <br />
                <p className={styles.attempts}>{attempts} </p>
                <p className={styles.questiontime}>{questiontime}</p>
            </div>
            <div className={gameIsOver(attempts) ? styles.close : styles.open}>
                <Division_Hint
                    setMessage={setMessage}
                    setDivisionNumber={setDivisionNumber}
                    setAnswertoQuestion={setAnswertoQuestion}
                    setQuestionTime={setQuestionTime}
                    divisionNumber={divisionNumber}
                    numberToGuess={numberToGuess}
                    questiontime={questiontime}
                    setAnswersToQuestion={setAnswersToQuestion}
                    answersToQuestion={answersToQuestion}
                />
                <PrimeNumber_Hint
                    setMessage={setMessage}
                    setDivisionNumber={setDivisionNumber}
                    setAnswertoQuestion={setAnswertoQuestion}
                    setQuestionTime={setQuestionTime}
                    setAnswersToQuestion={setAnswersToQuestion}
                    numberToGuess={numberToGuess}
                    questiontime={questiontime}
                    AnswertoQuestion={AnswertoQuestion}
                />
            </div>
            <div className={gameIsOver(attempts) ? styles.open : styles.close}>
                今回の答え：{numberToGuess}
            </div>
        </form>
    )
}