import { Button } from "./button"
import { useRouter } from "next/router"
import styles from "styles/routeToGame.module.scss"

type HomePropsType = {
    pageUrl:string
    buttonTitle:string
    pageexplanation:string
}

export const RouteToGame = (props:HomePropsType) => {
    const {pageUrl, buttonTitle, pageexplanation} = props

    const router = useRouter()

    function handleClick() {
        router.push(pageUrl)
    }

    return(
            <div className={styles.container}>
                <p>{pageexplanation}</p>
                <Button
                onClick={() => handleClick()}
                content={buttonTitle}
                buttonIsForGuess={true}
                />
            </div>
    )
}
