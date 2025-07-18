import { useEffect } from "react";

export default function Modal({open, onClose}) {
    useEffect(() =>{
        const handleKey = (e) =>{
            if(e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", handleKey);
        return () => document.addEventListener("keydown", handleKey);
    },[onClose])

    if(!open) return null;
    return (  
        <div className="modal-wrapper" 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        >
            <div className="inner-modal">
                <h1> Accessibility within Modal</h1>
                <button onClick={onClose}> Cancel </button>
                <button autoFocus> Focus Button with KeyBoard uses</button>
            </div>
            <style jsx>{`
            .modal-wrapper{
                    position:fixed;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0,0,0,0.4);
                }
                .inner-modal{
                    background: #fff;
                    padding: 2rem;
                    border: 2px solid #ccc;
                }
                button{
                margin: 0 1rem;
                }
            `}
                
            </style>
        </div>
    )
}
