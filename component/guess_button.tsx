import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type guessTheNumberButtonPropsType = {
    userGuess:string
    numberToGuess:number
    setAttempts:React.Dispatch<React.SetStateAction<number>>
    setMessage:React.Dispatch<React.SetStateAction<string>>
    attempts:number
}

export const GuessButton = (props:guessTheNumberButtonPropsType) => {

    const {userGuess, numberToGuess, setMessage, attempts, setAttempts} = props
    const router = useRouter()

    const gameIsOver = (attempts:number) => {
        if(attempts >= 10 && Number(userGuess) !== numberToGuess) {
            return true
        } 
        else {
            return false
        }
    }

    const guessTheNumber = () => {
        if(isNaN(Number(userGuess)) || userGuess == "") {
            setMessage('Invalid input! Please enter a number.');
        } else {
            setAttempts(attempts + 1);
            if (Number(userGuess) === numberToGuess) {
                setMessage('Great!!!');
                router.push(`/`);
            } else if (Number(userGuess) !== numberToGuess) {
                setMessage('Try again.');
            }
        }
        
    }


    return(
        <button disabled={gameIsOver(attempts)} onClick={() => guessTheNumber()}>Guess</button>
    )
}

