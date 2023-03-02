import styles from "styles/form_of_game_2.module.scss"
import { Button } from "./button";
import { ChooseColorButton } from "./choose_color_button";
import { MemoArea } from "./memoarea";

type Formofgame_2PropsType = {
    randomColorSet: Array<string>
    attempts:number,
    setAttempts:React.Dispatch<React.SetStateAction<number>>
    message: string,
    setMessage:React.Dispatch<React.SetStateAction<string>>
    predictColorArray: string[]
    setPredictColorArray: React.Dispatch<React.SetStateAction<string[]>>
    AllpredictColorArray:string[][]
    setAllPredictColorArray:React.Dispatch<React.SetStateAction<string[][]>>
}

export const Formofgame_2 = (props:Formofgame_2PropsType) => {

    const {
        randomColorSet,
        predictColorArray,
        setPredictColorArray,
        attempts, 
        setAttempts, 
        message, 
        setMessage,
        AllpredictColorArray,
        setAllPredictColorArray
    } = props

        //フォームが送信されたときに実行されるイベントハンドラ
        const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
            //フォームの送信ボタンをクリックした場合に、ページがリロードされるのを防止する
            event.preventDefault()
            // setUserGuess('')
        };



        //GameOver
        const gameIsOver = (attempts:number) => {
            if(attempts >= 10 && predictColorArray !== randomColorSet) {
                setMessage("Game is over!")
                return true
            } 
            else {
                return false
            }
        }

        //メッセージ欄にhit,browを伝え、予測履歴を表示し、attemptsに１を加える。
        const guessTheColor = (predictColorArray:string[]) => {      
            let hit = 0
            let blow = 0
            const usedIndex = new Set(); // 重複を防ぐために使用済みのインデックスを格納するSet
            
            // 要素が合致する場合はhit、そうでない場合はbrowに数える
            for (let i = 0; i < predictColorArray.length; i++) {
                if (randomColorSet[i] === predictColorArray[i]) {
                    hit++
                    usedIndex.add(i)
                }
            }
            
            // hitとして数えられたインデックスは除外して、残りの要素を検索してbrowに数える
            for (let i = 0; i < predictColorArray.length; i++) {
                if (!usedIndex.has(i) && predictColorArray.indexOf(randomColorSet[i]) !== -1) {
                    blow++
                }
            }
            
            //この一手間は重要で、setMessage(`${hit}..`)ともかけるが、下のmap関数でワンテンポ遅れて表示される。
            //更新されたmessageがAllpredictColorArrayに反映されるまでには、レンダリングのサイクルが必要だから。
            const newMessage = `${hit}hit, ${blow}blow`
            setMessage(newMessage)
            setAllPredictColorArray(prev => [...prev, [...predictColorArray, newMessage]])      
            setAttempts(attempts + 1)
            setPredictColorArray([])
        }

        //答えを見る(ShowTheAnswer)
        const showTheAnswer = () => {
            setAttempts(10) //強制終了
            setMessage("The Answer Is:  "+ randomColorSet)
        }

        //ページをリロードすることで再マウントする
            const ReloadPage = () => {
              window.location.reload() // ページをリロードする
            }


    return(
        <form onSubmit={handleGuess} className={styles.formContainer}>
                <p className={styles.predictColor}
                >{predictColorArray.join(',')}</p>
                <div className={styles.allPredictColor}>
                    <div className={gameIsOver(attempts) ? styles.close : styles.opne}>
                        Results：
                        {AllpredictColorArray.map((predictColorArray, index) => (
                        <p key={index}>
                            {predictColorArray.join(', ')}
                        </p>
                        ))}
                    </div>
                    <div className={gameIsOver(attempts) ? styles.open : styles.close}>
                            今回の答え：{randomColorSet.join(', ')}
                    </div>
                </div>
            <ul className={styles.buttonContainer}>
                <li>
                <ChooseColorButton
                color={"Red"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColorButton
                color={"Blue"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColorButton
                color={"Yellow"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColorButton
                color={"Green"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColorButton
                color={"Black"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColorButton
                color={"White"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColorButton
                color={"Purple"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColorButton
                color={"Pink"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColorButton
                color={"Brown"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />      
                </li>  
                <li>
                <ChooseColorButton
                color={"Aqua"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>    
            </ul>
            <div>
                <Button 
                disabled={gameIsOver(attempts) || predictColorArray.length < 4}
                onClick={() => guessTheColor(predictColorArray)}
                content={"GUESS"}
                buttonIsForGuess={true}
                />
            </div>
            <p className={styles.attempts}>{attempts}</p>
            <MemoArea/>
            <Button 
            disabled={false}
            onClick={showTheAnswer}
            content={"Show The Answer"}
            buttonIsForGuess={false}
            />
            <Button 
            disabled={false}
            onClick={ReloadPage}
            content={"Reset This Game"}
            buttonIsForGuess={true}
            />
        </form>
    )
                        }