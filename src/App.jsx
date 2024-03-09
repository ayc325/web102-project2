import './App.css';

import { useState } from 'react';
import Definition from './components/Definition';
import Term from './components/Term';
import Cards from './components/Cards';

const App = () => {
  const maxCount = 16; // Maximum allowed count
  const [count, setCount] = useState(1);
  const [multiplier, setMultiplier] = useState(1);

  const increaseCount = () => {
    const newCount = count + multiplier;
    setCount(Math.min(newCount, maxCount));
  };

  const generateRandomCount = () => {
    const randomCount = Math.floor(Math.random() * maxCount) + 1;
    setCount(randomCount);
  };

  const decreaseCount = () => setCount(Math.max(count - multiplier, 1));

  //const currentMineral = mineralTerms[count];

  return (
    <div className="App">
      <h1>Minerals: Non-Silicate Study Guide</h1>
      <h2>Test your knowledge on how well you can identify a non-silicate mineral</h2>
      <p>Number of Cards: 16</p>

      <Cards count = {count} />

      <button onClick={generateRandomCount}>Random</button>
      <button onClick={decreaseCount}>Previous</button>
      <button onClick={increaseCount}>Next</button>
      <p>{count}/16</p>
    </div>
  )
}

export default App;