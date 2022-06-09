import {useRef, useEffect} from "react"
import QRcode from "qrcode"

const QRCode = ({text})=> {
    const canvasRef = useRef()
console.log(text)

    useEffect(()=> {
        QRcode.toCanvas(canvasRef.current, "/api/lista-de-perfis/"+text,((err)=>{
            console.log(err)
        }))
    },[text])

    return (
    <div>
    <canvas  ref={canvasRef} id="canvas"></canvas>
    </div>
    )
}

export default QRCode