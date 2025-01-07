import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner } from './logic/checkWinnerFrom'
import './App.css'
import { WinnerModal } from './components/WinnerModal'

function App() {
  const [board, setBoard] = useState(() => {
    const saveBoard = window.localStorage.getItem('board')
    if (saveBoard) return JSON.parse(saveBoard)
    return saveBoard ? JSON.parse(saveBoard) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const saveTurn = window.localStorage.getItem('turn')
    return saveTurn ? saveTurn : TURNS.O
  })

  const [winner, setWinner] = useState(null)

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.O ? TURNS.X : TURNS.O
    setTurn(newTurn)
    // Guardar la partida en una constante.
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(() => newWinner)
    }else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  useEffect(() => {
    console.log('useEffect')
  }, [])

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.O)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetea el Juego</button>
      <section className='game'>
        {
          board.map((cell, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App