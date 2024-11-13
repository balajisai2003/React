export default function Log({turns}){
    return <ol id="log">
        {turns.map(turn=>
            <li key={turn.square.rowIndex+" "+turn.square.colIndex}>
                {turn.player} played at row {turn.square.row+1}, col {turn.square.col+1}
            </li>
        )}
        </ol>
} 