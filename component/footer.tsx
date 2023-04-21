import styles from "styles/footer.module.scss"
import {Container} from "component/container"

export const Footer = () => {


    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.flexcontainer}>
                    <a href="https://github.com/SKvr-46">Github: https://github.com/SKvr-46</a>
                    <address>koeich4@gmail.com</address>
                </div>
            </Container>
        </div>
    )
}