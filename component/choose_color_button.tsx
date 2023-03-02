//Game2で使う色のボタンコンポーネント
import styles from "styles/choose_color_button.module.scss"

type ChooseColorButtonPropsType = {
    color:string
    predictColorArray:string[]
    setPredictColorArray: React.Dispatch<React.SetStateAction<string[]>>
    attempts:number
}

export const ChooseColorButton = (props:ChooseColorButtonPropsType) => {

    const {color, predictColorArray,setPredictColorArray, attempts} = props

    const blackOrWhite = (color:string) => (
        ["Red","Black", "Blue", "Purple","Brown"].includes(color) ? "white" : "black"
        )


    const buttonStyle = {
        backgroundColor: color,
        color: blackOrWhite(color)
    }

    //4つ以上は押せず、間違えた回数が10回以上では押せない。
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