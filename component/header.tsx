import styles from "styles/header.module.scss"
import { Container } from "./container"
import { Logo } from "./logo"
import { Nav } from "./nav"

export const Header = () => {

    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.headcontainer}>
                    <Logo/>
                    <Nav/>
                </div>
            </Container>
        </div>
    )
}