import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const SinglePerfil = () => {
    const [singleProfile, setSingleProfile] = useState()

    const router = useRouter()
    const listaId = router.query.listaId

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/lista-de-perfis/${listaId}`)
            const data = await response.json()
            console.log(data.singleLista)
            setSingleProfile(data.singleLista)
        }
        fetchData()
    }, [listaId])

    if (!singleProfile) {
        return <p>Loading...</p>
    }

    return <div>
        <h4>Nome: {singleProfile.name}</h4>
        <p>Nome: {singleProfile.description}</p>

    </div>
}

export default SinglePerfil