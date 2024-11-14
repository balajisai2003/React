
// import { useState } from "react";



export default function GameBoard({onSelectSquare, gameBoard}) {

    
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