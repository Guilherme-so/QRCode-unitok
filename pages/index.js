import { useEffect,useState } from "react"

import PerfilLista from "../components/perfilLista"

export default function Home() {
  const [renderLista, setRenderLista] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/lista-de-perfis")
      const data = await response.json()
      setRenderLista(data.lista)
    }
    fetchData()
  }, [])

  return (
    <div >
      <h1>Lista de Perfis.</h1>
      <PerfilLista lista={renderLista} />
    </div>
  )
}
