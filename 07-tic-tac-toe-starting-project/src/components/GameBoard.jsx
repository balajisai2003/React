
// import { useState } from "react";

const initialGameBoard=[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectSquare, turns}) {

    let gameBoard = initialGameBoard;
    for (const turn of turns){
        gameBoard[turn.square.row][turn.square.col] = turn.player;
    }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
     
    //     const updatedGameBoard = [...gameBoard.map(innerArray=>[...innerArray])];
    //     updatedGameBoard[rowIndex][colIndex] = curActivePlayer;
    //     setGameBoard(updatedGameBoard);
        
    //     onSelectSquare();
    // }

  return (
    <ol id="game-board">

        {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=>
                    <li key={colIndex}>
                        <button onClick={()=>{onSelectSquare(rowIndex,colIndex)}} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>)}
            </ol>
        </li>)}

    </ol>
  );
}