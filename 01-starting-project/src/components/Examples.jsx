import { useState } from "react"
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";

 export default function Exapmles(){

    const [seletedTopic, setSelectedTopic] = useState();

    return(
        <>
        <section id="examples">
          <h2>Exapmles</h2>
          <menu>
            <TabButton isSelected={seletedTopic === "components"} onSelect={()=>setSelectedTopic("components")} >Components</TabButton>
            <TabButton isSelected={seletedTopic === "jsx"} onSelect={()=>setSelectedTopic("jsx")} >JSX</TabButton>
            <TabButton isSelected={seletedTopic === "props"} onSelect={()=>setSelectedTopic("props")} >Props</TabButton>
            <TabButton isSelected={seletedTopic === "state"} onSelect={()=>setSelectedTopic("state")} >State</TabButton>
          </menu>
        </section>
        {!seletedTopic?<p>Please select a topic</p>:<div id="tab-content">
            <h3>{EXAMPLES[seletedTopic].title}</h3>
            <p>{EXAMPLES[seletedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[seletedTopic].code}
              </code>
            </pre>
          </div>}
        </>
    );
}