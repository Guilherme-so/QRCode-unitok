import { Fragment } from "react"
import QRCode from "./qrcode.js"
import { useRouter } from "next/router"


const PerfilLista = (props) => {
  const { lista } = props

  const router = useRouter()

  return <Fragment>
    <ul>
      {
        lista.map((item) => {

          return <li key={item.id}>
            <h1>{item.name}</h1>
            <QRCode text={item.id} />
            <button onClick={() => router.push(`/lista/${item.id}`)}>Navegate</button>
          </li>
        })
      }
    </ul>
  </Fragment>
}

export default PerfilLista