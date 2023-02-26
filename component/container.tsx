import styles from "styles/container.module.scss"

type  ContainerpPropsType = {
    children: React.ReactNode
}

export const Container = (props:ContainerpPropsType) => {
    const {children} = props
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}