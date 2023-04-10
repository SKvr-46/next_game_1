import { useState } from "react"
import styles from "styles/highOrLowHint.module.scss"

type HighOrLowHinttPropsType = {
    setMessage:React.Dispatch<React.SetStateAction<string>>
    setQuestionCount:React.Dispatch<React.SetStateAction<number>>
    numberToGuess:number
    questionCount:number
}

export const HighOrLowHint = (props: HighOrLowHinttPropsType) => {
    const { setMessage, setQuestionCount, numberToGuess, questionCount } = props
    const [highOrLowNumber, setHighOrLowNumber] = useState<Number>()
    const [answerToHighOrLowHint, setAnswerToHighOrLowHint] = useState<string>()
    const [highOrLowHintClicked, setHighOrLowHintClicked] = useState<boolean>(false)

    const handleHighOrLow = (highOrLowNumber:number) => {
        if(highOrLowNumber > numberToGuess){
            setAnswerToHighOrLowHint("Low")
            setQuestionCount(prev => prev + 2) //2回分使う
            setHighOrLowHintClicked(true)
        }
        else if(highOrLowNumber < numberToGuess){
            setAnswerToHighOrLowHint("High")
            setQuestionCount(prev => prev + 2) //2回分使う
            setHighOrLowHintClicked(true)
        }
        else if (!highOrLowNumber || typeof highOrLowNumber !== "number"){
            setAnswerToHighOrLowHint("")
            setMessage("Invalid input! Please enter a number.")
        }
        else {
            setAnswerToHighOrLowHint("Correct")
            setQuestionCount(prev => prev + 2) //2回分使う
            setHighOrLowHintClicked(true)
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <label>High or Low を知る：
                <input
                    onChange={(event) => setHighOrLowNumber(Number(event.target.value))}
                    />
                </label>
                <button 
                onClick={() => handleHighOrLow(Number(highOrLowNumber))}
                disabled={questionCount >= 4 || highOrLowHintClicked}
                >
                結果を出す
                </button>
                </div>
                <p className={styles.answer}>{answerToHighOrLowHint}</p>
        </div>
    )

}