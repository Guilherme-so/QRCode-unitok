import { Fragment } from "react"
import { useRouter } from "next/router"
import { QRCodeSVG } from "qrcode.react"
import styles from "./perfilLista.module.css"

const PerfilLista = (props) => {
  const { lista } = props

  return <Fragment>
    <ul className={styles.lista}>
      {
        lista.map((item) => {

          return <li key={item.id}  className={styles.listaItem}>
            <h2>{item.name}</h2>
            <QRCodeSVG className={styles.qrcode} value={`https://qrc-ode-unitok-o09xwa8bb-guilherme013s.vercel.app/lista/${item.id}`} />
          </li>
        })
      }
    </ul>
  </Fragment>
}

export default PerfilLista