import { useEffect, useState, Fragment } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import SinglePage from "../../components/singlePage"

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
        return <p className="loading">Loading...</p>
    }

    return <Fragment>
    <Head>
        <title>{singleProfile.name}</title>
    </Head>
        <SinglePage lista={singleProfile} />
    </Fragment>
}

export default SinglePerfil