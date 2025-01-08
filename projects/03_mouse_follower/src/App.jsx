import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('efecto', {enabled})

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log({clientX, clientY})
    }

    window.addEventListener('pointeermove', handleMove)
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        //transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <h1>3er Proyecto</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Seguir Puntero
      </button>
    </main>
  )
}

export default App
