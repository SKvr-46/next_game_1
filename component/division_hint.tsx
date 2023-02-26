import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from "styles/division_hint.module.scss"

type DivisionHintPropsType = {
    setMessage:React.Dispatch<React.SetStateAction<string>>
    setDivisionNumber:React.Dispatch<React.SetStateAction<number>>
    setAnswertoQuestion:React.Dispatch<React.SetStateAction<string>>
    setQuestionTime:React.Dispatch<React.SetStateAction<number>>
    divisionNumber:number
    numberToGuess:number
    questiontime:number
    setAnswersToQuestion:React.Dispatch<React.SetStateAction<Array<string>>>
    answersToQuestion:Array<string>
}

export const Division_Hint = (props:DivisionHintPropsType) => {

    const {setMessage, 
            setDivisionNumber,
            setQuestionTime,
            questiontime,
            numberToGuess, 
            divisionNumber,
            setAnswersToQuestion,
            answersToQuestion,
        } = props


    const AnswertoQuestion = (divisionN:number) => {
        if(isNaN(divisionN) || typeof divisionN != "number" || divisionN == 0) {
            setMessage('Invalid input! Please enter a number.');
            return;
        }
        else if (divisionN > 10 || divisionN <= 0 || Number.isInteger(divisionN) == false) {
            setMessage('1~10までの整数を入力して下さい');
            return;
        }
        else {
            setQuestionTime(questiontime + 1)
            const divisionAnswer = numberToGuess % divisionN
            setDivisionNumber(divisionNumber)
            // setAnswertoQuestion(String(divisionNumber) + "で割ったあまリ：" + String(divisionAnswer))
            // setAnswersToQuestion(prevAnswers => [AnswertoQuestion, ...prevAnswers]) =>これだと、Formofgame＿1の初期値が入ってしまう。
            //配列内の”AnswertoQuestion”に、コンポーネントにpropsw渡すformofgame_1で定義した初期値が入ってしまう。
            setAnswersToQuestion(prevAnswers => [String(divisionNumber) + "で割ったあまリ：" + String(divisionAnswer), ...prevAnswers])
            setMessage('');
        }
    }

    

    //divisionNumberもpropsなのに正常は理由は、確かにdivisionNumberはpropsで０が初期値だが、
    //0が入っているその後、AnswertoQuestion_1の呼び出しにより、適切な順番でdivisionNumberがセットされる。
    //しかし、answersToQuestionはそうではない。AnswertoQuestion_1の呼び出しより先に、mapされてしまう。だから
    //ワンテンポ遅い。
    

    //質問は5回までに制御
    const toggleHintIsOpen = (questiontime:number) => {
        if(questiontime >= 5) {
            return false
        } 
        else {
            return true
        }
    }


    return(
        <div className={styles.division_hintwrapper}>
            <div>
                <label>
                    1~10までの整数を入れて下さい：
                    <input  onChange={(event) => setDivisionNumber(Number(event.target.value))}/>
                </label>
                <button 
                onClick={() => AnswertoQuestion(divisionNumber)}
                disabled={!toggleHintIsOpen(questiontime)}
                >
                    計算する
                </button>
            </div>
            {answersToQuestion.map((answer, index) => (
            <p key={index} className={styles.answer}>
            {answer}
            </p>
            ))}
        </div>
    )
    }
