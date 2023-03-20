import styles from "styles/primeFactorDecompositionHint.module.scss"
import { useState } from "react"


type primeFactorDecompositionHintPropsType = {
    setQuestionCount:React.Dispatch<React.SetStateAction<number>>
    numberToGuess:number
    questionCount:number
}


export const PrimeFactorDecompositionHint = (props:primeFactorDecompositionHintPropsType) => {

    const {
        setQuestionCount,
        questionCount,
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
            setQuestionCount(questionCount + 1)
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
                        disabled={questionCount >= 5 || decompositionButtonClicked}
                        >
                            素因数を数える
                        </button>
                    </label>
                    <p>{answerToDecompositionQuestion}</p>
                </div>
            </div>
        )
        
}
