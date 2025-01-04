import { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return(
    <div className={className} onClick={updateBoard}>
      {children}
    </div>
  )
}

const updateBoard = () =>{

}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.O)

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((cell, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                
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
    </main>
  )
}

App.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func,
  index: PropTypes.number
}

export default App