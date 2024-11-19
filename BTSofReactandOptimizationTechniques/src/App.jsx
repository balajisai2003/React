import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import ConfigCounter from './components/Counter/ConfigCounter.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);



  function handleSetClick(enteredNumber) {
    setChosenCount(enteredNumber);
  }

  return (
    <>
      <Header />
      <main>
        
        <ConfigCounter onClick = {handleSetClick}/>
          
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
