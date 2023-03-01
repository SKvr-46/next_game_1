import styles from "styles/button.module.scss"
import { PropsType } from '@/lib/api';


interface ButtonPropsType {
    onClick: () => void
    disabled?: boolean
    content:string
    buttonIsForGuess: boolean
}

//このボタンを押すと、挑戦回数が0に、メッセージに答えがでて、ゲームの目的である数値が変更される。
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
