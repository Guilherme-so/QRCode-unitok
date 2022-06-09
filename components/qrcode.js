import { Fragment } from "react"
import { useRouter } from "next/router"

import { QRCodeSVG } from "qrcode.react"

const QRCode = ({ text }) => {
    console.log(text)
    const router = useRouter()

    // const mypath = router.push(`/lista/${text}`)

    return <Fragment>
        <QRCodeSVG value={`/lista/${text}`} />
    </Fragment>
}

export default QRCode