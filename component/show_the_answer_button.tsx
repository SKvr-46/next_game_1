import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GuessNumberGame } from './guess_number_game'; 

type ShowTheAnswerButtonPropsType = {
    numberToGuess:number
    userGuess:string
    attempts:number
    setAttempts:React.Dispatch<React.SetStateAction<number>>
    setMessage:React.Dispatch<React.SetStateAction<string>>
    setNumberToGuess:React.Dispatch<React.SetStateAction<number>>
}

//このボタンを押すと、挑戦回数が0に、メッセージに答えがでて、ゲームの目的である数値が変更される。
export const ShowTheAnswerButton = (props:ShowTheAnswerButtonPropsType) => {
    const {numberToGuess,userGuess,attempts,setAttempts,setMessage, setNumberToGuess} = props
    const router = useRouter();

    const gameIsOver = (attempts:number) => {
        if(attempts >= 10 && Number(userGuess) !== numberToGuess) {
            return true
        } 
        else {
            return false
        }
    }

    const showTheAnswer = () => {
        setAttempts(0)
        setMessage("The Answer Is:  "+ numberToGuess)
        setNumberToGuess(Math.floor(Math.random() * 1000) + 1)
    }

    return(
        <button disabled={gameIsOver(attempts)} onClick={showTheAnswer}>Show The Answer</button>
    )
}

