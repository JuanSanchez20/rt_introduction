import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }

  return(
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

const winner_combo = [
  [0, 1, 2],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.O)

  const [winner, setWinner] = useState(null)
  
  const checkWinner = (boardToCheck) => {
    for (const combo of winner_combo) {
      const [a, b, c] = combo
      if (boardToCheck[a] && 
          boardToCheck[a] === boardToCheck[b] && 
          boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.O ? TURNS.X : TURNS.O
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(() => newWinner)
    }
    

  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.O)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
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
      <button onClick={resetGame}>Resetea el Juego</button>
        {
          winner !== null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false 
                    ? 'Empate' 
                    : `Ganador: ${winner}`
                  }
                </h2>
                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }
    </main>
  )
}

export default App