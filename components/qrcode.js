import { useRef, useEffect } from "react"
import QRcode from "qrcode"
import { useRouter } from "next/router"

const QRCode = ({ text }) => {
    console.log(text)

    const canvasRef = useRef()
    // const router = useRouter()

    // const qrRoute = () => {
    //  const mypath = router.push(`/lista/${text}`)
    //  console.log(mypath)
    // }

    useEffect(() => {
        QRcode.toCanvas(canvasRef.current,`/lista/${text}`, ((err) => {
            console.log(err)
        }))
    }, [text])

    return (
        <div>
            <canvas ref={canvasRef} id="canvas"></canvas>
        </div>
    )
}

export default QRCode