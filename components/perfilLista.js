import {Fragment} from "react"
import QRCode from "./qrcode.js"


const PerfilLista = (props) =>{
  const {lista} = props 

    return <Fragment>
        <ul>
      {
        lista.map((item) =>{

          return <li key={item.id}>
          <h1>{item.name}</h1>
          <QRCode text={item.id} />
          </li>
        })
      }
      </ul>
    </Fragment>
}

export default PerfilLista