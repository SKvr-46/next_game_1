//サイト全体で使うボタンコンポーネント
import styles from "styles/button.module.scss"


interface ButtonPropsType {
    onClick: () => void
    disabled?: boolean
    content:string
    buttonIsForGuess: boolean
}

//挑戦回数を0にリセット、メッセージに答えがでて、ゲームの目的である数値が変更される。
export const Button = (props:ButtonPropsType) => {
    const {disabled, onClick, content, buttonIsForGuess} = props

    return(
        <button
        disabled={disabled}
        onClick={onClick}
        className={buttonIsForGuess ? styles.btnforguess : styles.btnforshow}
        >
            {content}
        </button>
    )
}
