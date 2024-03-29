import { Fragment } from "react"
import { QRCodeSVG } from "qrcode.react"
import styles from "./perfilLista.module.css"

const PerfilLista = (props) => {
  const { lista } = props

  return <Fragment>
    <ul className={styles.lista}>
      {
        lista.map((item) => {
          return <li key={item.id} className={styles.listaItem}>
            <h2>{item.name}</h2>
            <QRCodeSVG className={styles.qrcode} value={`https://qrc-ode-unitok.vercel.app/lista/${item.id}`} />
          </li>
        })
      }
    </ul>
  </Fragment>
}

export default PerfilLista