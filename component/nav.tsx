import styles from "styles/nav.module.scss"
import Link from "next/link"
import { useState } from "react"


export const Nav = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const toggleMenu = () => {
        setmenuIsOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setmenuIsOpen(false)
    }

    return(
        <div className={menuIsOpen ? styles.open : styles.close}>
            <button onClick={toggleMenu} className={styles.btn}>
                <span className={styles.bar}></span>
            </button>
            <ul className={styles.list}>
                <li>
                <Link href="/" onClick={closeMenu}>
                    Home
                </Link>
                </li>
                <li>
                <Link href="/game_1" onClick={closeMenu}>
                    game1
                </Link>
                </li>
                <li>
                <Link href="/game_2" onClick={closeMenu}>
                    game2
                </Link>
                </li>
            </ul>
        </div>
    )
}