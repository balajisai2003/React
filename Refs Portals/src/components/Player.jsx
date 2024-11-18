import { useState, useRef } from "react";


export default function Player() {

  const [enteredPlayerName, setPlayerName] = useState("");
  const playerNameRef = useRef();




  function handleOnClick() {
    setPlayerName(playerNameRef.current.value);
    playerNameRef.current.value = "";
  }


  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName==="" ?"Unknown Entity": enteredPlayerName}</h2>
      <p>
        <input 
        ref={playerNameRef}
        type="text" 
        />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
