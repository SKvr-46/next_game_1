import styles from "styles/prime_factor_decomposition_hint.module.scss"
import { useState } from "react"


type prime_factor_decompositionPropsType = {
    setMessage:React.Dispatch<React.SetStateAction<string>>
    setQuestionTime:React.Dispatch<React.SetStateAction<number>>
    numberToGuess:number
    questiontime:number
}


export const Prime_factor_decomposition = (props:prime_factor_decompositionPropsType) => {

    const {
        setMessage, 
        setQuestionTime,
        questiontime,
        numberToGuess, 
    } = props


    const [decompositionButtonClicked, setDecompositionButtonClicked] = useState(false);
    const [answerToDecompositionQuestion, setAnswerToDecompositionQuestion] = useState("")



        function primeFactors(num:number) {
            var factors = []
                for (var i = 2; i <= num; i++) {
                    while (num % i === 0) {
                        factors.push(i)
                        num /= i
                    }
                }
                return factors
            }
        
        function countDistinctFactors(num:number) {
            var factors = primeFactors(num)
            var distinctFactors = [1,num]; //空スタートだと、1とnum自身が入らない。
            setQuestionTime(questiontime + 1)
            setDecompositionButtonClicked(true)
            for (var i = 0; i < factors.length; i++) {
                if (distinctFactors.indexOf(factors[i]) === -1) { //重複除去
                    distinctFactors.push(factors[i])
                }
            }
            return setAnswerToDecompositionQuestion(String(distinctFactors.length))
        }



        return(
            <div className={styles.decomposition_hintwrapper}>
                <div>
                    <label>
                        素因数の数を数える：
                        <button 
                        onClick={() => countDistinctFactors(numberToGuess)}
                        disabled={questiontime >= 5 || decompositionButtonClicked}
                        >
                            素因数を数える
                        </button>
                    </label>
                    <p>{answerToDecompositionQuestion}</p>
                </div>
            </div>
        )
        
}
