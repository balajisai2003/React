export default function GameOver({winner, handleRestartGame}){
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            <h3>{winner ?`Player ${winner} wins!`: "DRAW" }</h3>
            <button onClick={handleRestartGame}>Play Again</button>
        </div>
    )
}