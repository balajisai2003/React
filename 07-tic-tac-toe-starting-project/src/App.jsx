import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/log"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"

const initialGameBoard=[
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function derivedActivePlayer (gameTurns){
  let activePlayer = "X";
  if(gameTurns.length>0 && gameTurns[0].player==="X"){
    activePlayer = "O";
  }
  return activePlayer;
}


function App() {
  
  const [gameTurns, setGameTurns] = useState([])

  let activePlayer = derivedActivePlayer(gameTurns);

  
  let gameBoard = initialGameBoard;
    for (const turn of gameTurns){
        gameBoard[turn.square.row][turn.square.col] = turn.player;
    }

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns((prevTruns)=>{

      let curPlayer = derivedActivePlayer(prevTruns);

      const updatedTurns = [
        {
          square:{row:rowIndex,col:colIndex},
          player:curPlayer
        },
        ...prevTruns
      ];
      return updatedTurns;

    })
  }

let winner = null;

  for (const combinations of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].col];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].col];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].col];

    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      winner = firstSquareSymbol;
      break;
    }
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==="X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==="O"} />
        </ol>
        <h2>{winner ? `Player ${winner} wins!` : "Tic Tac Toe"}</h2>
        <GameBoard 
        onSelectSquare={handleSelectSquare} 
        gameBoard={gameBoard}
        />
        
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
