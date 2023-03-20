//Game2で使う色のボタンコンポーネント
import styles from "styles/chooseColor.module.scss"

type ChooseColorPropsType = {
    color:string
    //プレイヤーの予想した色
    predictColorArray:string[]
    setPredictColorArray: React.Dispatch<React.SetStateAction<string[]>>
    attempts:number
}

export const ChooseColor = (props:ChooseColorPropsType) => {

    const {color, predictColorArray,setPredictColorArray, attempts} = props

    const blackOrWhite = (color:string) => (
        ["Red","Black", "Blue", "Purple","Brown"].includes(color) ? "white" : "black"
        )

    //ボタンの色を変えるためのスタイル
    const buttonStyle = {
        backgroundColor: color,
        color: blackOrWhite(color)
    }
    return(
        <button
        onClick={() => setPredictColorArray([...predictColorArray, color])}
        
        disabled={predictColorArray.length >= 4 || attempts >= 10}
        className={styles.btn}
        style={buttonStyle}
        >
            {color}
        </button>
    )
}