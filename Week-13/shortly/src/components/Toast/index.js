import { useEffect } from "react"
import "./index.css"

const ToastNotification = ({ body = '', time = 5000,onClose,show }) => {
    useEffect(() => {
        const id=setTimeout(() => {
            onClose()
        }, time);
        return ()=>{
            clearTimeout(id)
        }
    }, [show,onClose,time])
    
    
    return (
        show? <div class="toast visible" id={"toast" + Math.floor((Math.random() * 1000) + 1)}>
            <section className="close-toast" onClick={()=>onClose()}>x</section>
            <div class="toast-body">
                {body}
            </div>
        </div>:null
    )
}

export default ToastNotification