import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/log"
import { useState } from "react"

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==="X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==="O"} />
        </ol>
        <GameBoard 
        onSelectSquare={handleSelectSquare} 
        turns = {gameTurns}
        />
        
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
