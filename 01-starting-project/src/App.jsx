import { useState } from "react";


import {CORE_CONCEPTS} from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
const [seletedTopic, setSelectedTopic] = useState();


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>

          {CORE_CONCEPTS.map((item) => <CoreConcept key = {item.title}{...item} />)}

        </ul>
        </section>
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
        
      </main>
    </div>
  );
}

export default App;
