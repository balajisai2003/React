import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/log"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"

const PLAYERS = {
  X: "Player 1",
  O: "Player 2"
}

const INITIAL_GAMEBOARD=[
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

function deriveWinner(gameBoard,players){
  let winner ;

  for (const combinations of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].col];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].col];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].col];

    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      winner = players[firstSquareSymbol];
      break;
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAMEBOARD.map(row=>[...row])];
    for (const turn of gameTurns){
        gameBoard[turn.square.row][turn.square.col] = turn.player;
    }
    return gameBoard;
}

export default function App() {
  
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = derivedActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard,players);
  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRestartGame(){
    setGameTurns([]);
  }

  function handleNameChange(symbol, newName){
    setPlayers(prevPlayers =>{
     return {
      ...prevPlayers,
      [symbol]:newName
     }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer==="X"} onNameChange={handleNameChange}/>
          <Player initialName={PLAYERS.Y} symbol="O" isActive={activePlayer==="O"} onNameChange={handleNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handleRestartGame={handleRestartGame} />}
        <GameBoard 
        onSelectSquare={handleSelectSquare} 
        gameBoard={gameBoard}
        />
        
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}


