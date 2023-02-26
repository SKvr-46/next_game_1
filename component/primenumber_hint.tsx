import { useState } from "react";
import styles from "styles/primenumber_hint.module.scss"

type PrimeNumberHintPropsType = {
    setMessage:React.Dispatch<React.SetStateAction<string>>
    setDivisionNumber:React.Dispatch<React.SetStateAction<number>>
    setAnswertoQuestion:React.Dispatch<React.SetStateAction<string>>
    setQuestionTime:React.Dispatch<React.SetStateAction<number>>
    setAnswersToQuestion:React.Dispatch<React.SetStateAction<Array<string>>>
    numberToGuess:number
    questiontime:number
    AnswertoQuestion:string
}

export const PrimeNumber_Hint = (props:PrimeNumberHintPropsType) => {
    const {setMessage, 
        setQuestionTime,
        questiontime,
        numberToGuess, 
        setAnswertoQuestion,
        AnswertoQuestion
    } = props

    const [buttonClicked, setButtonClicked] = useState(false);


    const  isPrime = (num:number)  => {
        // numが1以下の場合は素数でないとする
            if (num <= 1) {
                return false;
            }
        
            // 2は素数であるため、2であればtrueを返す
            if (num === 2) {
                return true;
            }
        
            // numが偶数であれば素数でないとする
            if (num % 2 === 0) {
                return false;
            }
        
            // numを2からnum-1までの数で割っていき、割り切れる数があれば素数でないとする
            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) {
                    return false;
                }
            }
        
            // numが素数である場合はtrueを返す
            return true;
        }


const AnswertoHint = (numberToGuess:number) => {
        setQuestionTime(questiontime + 1)
        setMessage('');
        if (isPrime(numberToGuess) ) {
            setAnswertoQuestion("素数です")
        } else {
            setAnswertoQuestion("素数ではありません")
        }
        setButtonClicked(true);
}

//divisionNumberもpropsなのに正常は理由は、確かにdivisionNumberはpropsで０が初期値だが、
//0が入っているその後、AnswertoQuestion_1の呼び出しにより、適切な順番でdivisionNumberがセットされる。
//しかし、answersToQuestionはそうではない。AnswertoQuestion_1の呼び出しより先に、mapされてしまう。だから
//ワンテンポ遅い。

return(
    <div className={styles.primenumber_hintwrapper}>
        <label>
            素数か判定する：
            <button  disabled={buttonClicked} onClick={() => AnswertoHint(numberToGuess)}>判定する</button>
        </label>
        <p>{AnswertoQuestion}</p>
    </div>
)
}