//YourGuessより下のフォームコンポーネント

import { Division_Hint } from "./division_hint"
import { PrimeNumber_Hint } from "./primenumber_hint"
import styles from "styles/form_of_game_1.module.scss"
import { Button } from "./button"
import { Prime_factor_decomposition } from "./prime_factor_decomposition_hint"
import { MemoArea } from "./memoarea"


type Formofgame_1PropsType = {
    numberToGuess:number
    setUserGuess:React.Dispatch<React.SetStateAction<string>>
    userGuess:string
    setMessage:React.Dispatch<React.SetStateAction<string>>
    message:string
    setAttempts:React.Dispatch<React.SetStateAction<number>>
    attempts:number
    setQuestionCount:React.Dispatch<React.SetStateAction<number>>
    questionCount:number
}

export const Formofgame_1 = (props:Formofgame_1PropsType) => {

        const {    
            setUserGuess,
            userGuess,
            setAttempts,
            attempts,
            setMessage,
            message,
            numberToGuess,
            setQuestionCount,
            questionCount,
        } = props

        //フォームが送信されたときに実行されるイベントハンドラ
        const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
            //フォームの送信ボタンをクリックした場合に、ページがリロードされるのを防止する
            event.preventDefault()
            // setUserGuess('')
        };

        //ページをリロードすることで再マウントする
        const reloadPage = () => {
            window.location.reload() // ページをリロードする
        }


        //GameOver
        const gameIsOver = (attempts:number) => {
            if(attempts >= 10 && Number(userGuess) !== numberToGuess) {
                return true
            } 
            else {
                return false
            }
        }

        //予測（GuessTheNumber）
        const guessTheNumber = () => {
            if(isNaN(Number(userGuess)) || userGuess == "") {
                setMessage('Invalid input! Please enter a number.')
            } else {
                setAttempts(attempts + 1)
                if (Number(userGuess) === numberToGuess) {
                    setMessage('Great!!!')
                    // router.push(`/`);
                } else if (Number(userGuess) !== numberToGuess) {
                    setMessage('Try again.')
                }
            }
            
        }

        //答えを見る(ShowTheAnswer)
        const showTheAnswer = () => {
            setAttempts(10)
            setMessage("The Answer Is:  "+ numberToGuess)
        }



    return(
        <form onSubmit={handleGuess} className={styles.formContainer}>
            <p className={styles.response}>{message}</p>
            <div className={styles.responses}>
                <label>
                Your Guess:
                <input type="text" onChange={(event) => setUserGuess(event.target.value)} />
                </label>
                <br />
                <div className={styles.guessbutton}>
                    <Button 
                    disabled={gameIsOver(attempts)}
                    onClick={guessTheNumber}
                    content={"GUESS"}
                    buttonIsForGuess={true}
                    />
                </div>
                <br />
                <p className={styles.attempts}>{attempts} </p>
                <p className={styles.questiontime}>{questionCount}</p>
            </div>
            <div className={gameIsOver(attempts) ? styles.close : styles.open}>
                <Division_Hint
                    setMessage={setMessage}
                    setQuestionCount={setQuestionCount}
                    numberToGuess={numberToGuess}
                    questionCount={questionCount}
                />
                <PrimeNumber_Hint
                    setMessage={setMessage}
                    setQuestionCount={setQuestionCount}
                    numberToGuess={numberToGuess}
                    questionCount={questionCount}
                />
                <Prime_factor_decomposition
                    setQuestionCount={setQuestionCount}
                    numberToGuess={numberToGuess}
                    questionCount={questionCount}

                />
            </div>
                <div className={gameIsOver(attempts) ? styles.open : styles.close}>
                    今回の答え：{numberToGuess}
                </div>
                <MemoArea/>
                <Button 
                    disabled={gameIsOver(attempts)}
                    onClick={showTheAnswer}
                    content={"Show The Answer"}
                    buttonIsForGuess={false}
                    />
                <Button 
                onClick={reloadPage}
                content={"Reset This Game"}
                buttonIsForGuess={true}
                />
        </form>
    )
}