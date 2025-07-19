// import { useState } from 'react'
import './App.css'
import DownloadPDF from './DownloadPDF/DownloadPDF'
// import Modal from './Modal/Modal'

function App() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal open={open} onClose={() => setOpen(false)}/> */}
      <DownloadPDF/>
    </>
  )
}

export default App
