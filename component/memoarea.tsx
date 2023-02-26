import styles from "styles/memoarea.module.scss"

export const MemoArea = () => {

    return(
        <div className={styles.textarea}>
            <textarea name="Memo" rows={10} cols={50} >メモ欄</textarea>
        </div>
    )
}