import styles from "styles/memoarea.module.scss"

export const MemoArea = () => {

    return(
        <div className={styles.textArea}>
            <textarea placeholder="メモ欄" rows={10} cols={50} ></textarea>
        </div>
    )
}