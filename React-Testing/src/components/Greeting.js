import { useState } from "react";
import Output from "./Output";


const Greeting =()=>{

    const [chnagedText, setChangedText] = useState(false);

    const changeTextHandler = ()=>{
        setChangedText(true);
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!chnagedText &&<Output>its good to see you</Output>}
            {chnagedText && <Output>Changed</Output>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
}

export default Greeting;