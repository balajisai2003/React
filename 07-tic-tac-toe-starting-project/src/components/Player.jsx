import { useState } from "react";


export default function Player({initialName, symbol, isActive}) {


    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);


    function handleEditButton(){
        setIsEditing((Editing)=>!Editing);
    }

    function handleNameChange(event){
        setPlayerName(event.target.value);
    }

    let content = <span className="player-name">{playerName}</span>;

    if(isEditing){
        content = <input type="text" required value={playerName} onChange={handleNameChange}/>;
    }
    return(
        <li class={isActive?"active":undefined}>
            <span className="player">
                {content}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditButton}>{isEditing?"Save":"Edit"}</button>
        </li>
    );
}