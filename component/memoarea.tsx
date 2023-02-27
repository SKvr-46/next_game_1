import styles from "styles/memoarea.module.scss"

export const MemoArea = () => {

    return(
        <div className={styles.textArea}>
            <textarea name="Memo" rows={10} cols={50} placeholder="メモ欄"/>
        </div>
    )
}