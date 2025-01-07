import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('useEffect')
  })
  return (
    <>
      <h1>3er Proyecto</h1>
      <button>{enabled ? 'Desactivar' : 'Activar'} Seguir Puntero</button>
    </>
  )
}

export default App
