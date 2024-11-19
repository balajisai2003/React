import { useState } from 'react';
import { log } from '../../log.js';



export default function ConfigCounter(){

    log('<ConfigCounter /> rendered', 1);

  const [enteredNumber, setEnteredNumber] = useState(0);


  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  return <input type="number" onChange={handleChange} value={enteredNumber} />
 
}