import styles from "styles/formOfGame2.module.scss"
import { Button } from "./button";
import { ChooseColor } from "./chooseColor";
import { MemoArea } from "./memoarea";

type Formofgame2PropsType = {
    randomColorSet: Array<string>
    attempts:number,
    setAttempts:React.Dispatch<React.SetStateAction<number>>
    setMessage:React.Dispatch<React.SetStateAction<string>>
    predictColorArray: Array<string>
    setPredictColorArray: React.Dispatch<React.SetStateAction<string[]>>
    AllpredictColorArray:string[][]
    setAllPredictColorArray:React.Dispatch<React.SetStateAction<string[][]>>
}

export const Formofgame2 = (props:Formofgame2PropsType) => {

    const {
        randomColorSet,
        predictColorArray,
        setPredictColorArray,
        attempts, 
        setAttempts, 
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
            
            //文字列はプリミティブなデータ型なので、predictColorArray === randomColorSetという比較は、期待したように動作しない。
            const isMatch = predictColorArray.every((color, index) => color === randomColorSet[index]);
                if (isMatch) {
                    const collectMessage = "Great!!"
                    setMessage(collectMessage)
                    const newMessage = "4hit, 0blow"
                    setAllPredictColorArray(prev => [...prev, [...predictColorArray, newMessage]])      
                    setAttempts(attempts)
                    setPredictColorArray([])
                } else {
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
            
        }

        //答えを見る(ShowTheAnswer)
        const showTheAnswer = () => {
            setAttempts(10) //強制終了
            setMessage("The Answer Is:  "+ randomColorSet)
        }

        //予想配列の末尾を消去
        const deletePredictArray = (predictColorArray:string[]) => {
            const newArray = [...predictColorArray]
            newArray.pop()
            setPredictColorArray(newArray)
        }

        //ページをリロードすることで再マウントする
            const reloadPage = () => {
              window.location.reload() // ページをリロードする
            }


    return(
        <form onSubmit={handleGuess} className={styles.formContainer}>
                <p className={styles.predictColor}
                >{predictColorArray.join(',')}</p>
                <div className={styles.allPredictColor}>
                    <div>
                        Results：
                        {AllpredictColorArray.map((predictColorArray, index) => (
                        <p key={index}>
                            {predictColorArray.join(', ')}
                        </p>
                        ))}
                    </div>
                    <div className={gameIsOver(attempts) ? styles.open : styles.close}>
                        <p>今回の答え：{randomColorSet.join(', ')}</p>
                    </div>
                </div>
                
            <ul className={styles.buttonContainer}>
                <li>
                <ChooseColor
                color={"Red"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColor
                color={"Blue"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColor
                color={"Yellow"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColor
                color={"Green"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColor
                color={"Black"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColor
                color={"White"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColor
                color={"Purple"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColor
                color={"Pink"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>
                <li>
                <ChooseColor
                color={"Brown"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />      
                </li>  
                <li>
                <ChooseColor
                color={"Aqua"}
                predictColorArray={predictColorArray}
                setPredictColorArray={setPredictColorArray}
                attempts={attempts}
                />
                </li>    
            </ul>
                
            <div className={styles.btnwrapper}>
                <Button 
                disabled={gameIsOver(attempts) || predictColorArray.length < 4}
                onClick={() => guessTheColor(predictColorArray)}
                content={"GUESS"}
                buttonIsForGuess={true}
                />
                <Button 
                onClick={() => deletePredictArray(predictColorArray)}
                content={"Delete"}
                buttonIsForGuess={true}
            />
            </div>
            <p className={styles.attempts}>{attempts}</p>
            <MemoArea/>
            <Button 
            onClick={showTheAnswer}
            content={"Show The Answer"}
            buttonIsForGuess={false}
            />
            <Button 
            onClick={reloadPage}
            content={"Reset This Game"}
            buttonIsForGuess={true}
            />
        </form>
    )
                        }