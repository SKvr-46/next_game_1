

export type PropsType = {
    setNumberToGuess:React.Dispatch<React.SetStateAction<number>>
    numberToGuess:number
    setUserGuess:React.Dispatch<React.SetStateAction<string>>
    userGuess:string
    setMessage:React.Dispatch<React.SetStateAction<string>>
    message:string
    setAttempts:React.Dispatch<React.SetStateAction<number>>
    attempts:number
    setQuestionTime:React.Dispatch<React.SetStateAction<number>>
    questiontime:number
}

// const {    
//     setUserGuess,
//     userGuess,
//     setAttempts,
//     attempts,
//     setMessage,
//     message,
//     setNumberToGuess,
//     numberToGuess,
//     setDivisionNumber,
//     divisionNumber,
//     setAnswertoQuestion,
//     AnswertoQuestion,
//     setQuestionTime,
//     questiontime,
//     setAnswersToQuestion,
//     answersToQuestion
// } = props
