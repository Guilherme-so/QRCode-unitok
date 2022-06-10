import { useRouter } from "next/router"
import styles from "./singlePage.module.css"
import Image from "next/image"

const SinglePage = ({ lista }) => {
    const { name, description, image, midia } = lista
    console.log(lista)

    const router = useRouter()

    const clickHandler = () => {
        router.push("/")
    }

    return <div className={styles.component}>
        <div className={styles.profile}>
            <div className={styles.heading}>
                <h3>{name} <br/>
                    <span className={styles.midia}>{midia}</span>
                </h3>
                <Image className={styles.image} src={`/${image}`} alt={name} height={100} width={100} />
            </div>
            <p>Description:  {description}</p>
            <button onClick={clickHandler}>Home Page</button>
        </div>
    </div>
}

export default SinglePage