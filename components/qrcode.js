import { Fragment } from "react"
import { useRouter } from "next/router"

import { QRCodeSVG } from "qrcode.react"

const QRCode = ({ text }) => {
    return <Fragment>
        <QRCodeSVG value={`/lista/${text}`} />
    </Fragment>
}

export default QRCode