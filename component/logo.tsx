import styles from "styles/logo.module.scss"
import Link from "next/link"

export const Logo = () => {
    return(
        <Link href="/" className={styles.logo}>
            GAMELAB
        </Link>
    )   
}