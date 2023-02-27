import { useRouter } from "next/router"
import Link from "next/link"

const Home = () => {
  const router = useRouter()
  
  return(
    <div>
      <Link href="game_1">Guess The Number</Link>
    </div>
  )
}


export default Home