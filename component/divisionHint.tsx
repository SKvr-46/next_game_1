//整数で割ったあまりを算出するコンポーネント
import { useState, useEffect } from 'react'
import styles from "styles/divisionHint.module.scss"

type DivisionHintPropsType = {
    setMessage:React.Dispatch<React.SetStateAction<string>>
    setQuestionCount:React.Dispatch<React.SetStateAction<number>>
    numberToGuess:number
    questionCount:number
}

export const DivisionHint = (props:DivisionHintPropsType) => {

    const {setMessage, 
            setQuestionCount,
            questionCount,
            numberToGuess, 
        } = props

        const [divisionNumber, setDivisionNumber] = useState(0)
        const [answersToDivisionQuestion, setAnswersToDivisionQuestion] = useState<Array<string>>([])


    const answerToQuestion = (divisionN:number) => {
        if(isNaN(divisionN) || typeof divisionN != "number" || divisionN == 0) {
            setMessage('Invalid input! Please enter a number.')
            return
        }
        else if (divisionN > 10 || divisionN <= 1 || Number.isInteger(divisionN) == false) {
            setMessage('2~10までの整数を入力して下さい')
            return
        }
        else {
            setQuestionCount(questionCount + 1)
            const divisionAnswer = numberToGuess % divisionN
            setDivisionNumber(divisionNumber)
            // setAnswertoQuestion(String(divisionNumber) + "で割ったあまリ：" + String(divisionAnswer))
            // setAnswersToQuestion(prevAnswers => [AnswertoQuestion, ...prevAnswers]) =>これだと、Formofgame＿1の初期値が入ってしまう。
            //配列内の”AnswertoQuestion”に、コンポーネントにpropsw渡すformofgame_1で定義した初期値が入ってしまう。
            setAnswersToDivisionQuestion(prevAnswers => [String(divisionNumber) + "で割ったあまリ：" + String(divisionAnswer), ...prevAnswers])
            setMessage('')
        }
    }

    

    //divisionNumberもpropsなのに正常は理由は、確かにdivisionNumberはpropsで０が初期値だが、
    //0が入っているその後、AnswertoQuestion_1の呼び出しにより、適切な順番でdivisionNumberがセットされる。
    //しかし、answersToQuestionはそうではない。AnswertoQuestion_1の呼び出しより先に、mapされてしまう。だから
    //ワンテンポ遅い。
    



    return(
        <div className={styles.division_hintwrapper}>
            <div>
                <label>
                    2~10のどれかで割る：
                    <input  onChange={(event) => setDivisionNumber(Number(event.target.value))}/>
                </label>
                <button 
                onClick={() => answerToQuestion(divisionNumber)}
                disabled={questionCount >= 5}
                >
                    計算する
                </button>
            </div>
            {answersToDivisionQuestion.map((answer, index) => (
            <p key={index} className={styles.answer}>
            {answer}
            </p>
            ))}
        </div>
    )
    }
