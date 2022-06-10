import { useEffect, useState,Fragment} from "react"
import Head from "next/head"
import PerfilLista from "../components/perfilLista"
import styles from "../styles/home.module.css"

export default function Home() {
  const [renderLista, setRenderLista] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch("/api/lista-de-perfis")
        const data = await response.json()
        setRenderLista(data.lista)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  if(loading) {
    return <p className="loading">Loading...</p>
  }

  return (
  <Fragment>
  <Head>
      <title>Lista De Perfis.</title>
    </Head>

    <div className={styles.home}>
      <h1>Lista de Perfis.</h1>
      <PerfilLista lista={renderLista} />
    </div>
  </Fragment>
  )
}
