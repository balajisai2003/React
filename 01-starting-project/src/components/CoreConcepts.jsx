import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";


export default function CoreConcepts(){

  
    return (
      <Section title="Core Concepts" id="core-concepts">
        <ul>

          {CORE_CONCEPTS.map((item) => <CoreConcept key = {item.title}{...item} />)}

        </ul>
      </Section>  
    );
}