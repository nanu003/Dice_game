import GamePlay from './components/GamePlay'
import StartGame from './components/StartGame'
import { useState } from 'react';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameStart = () => {
    setIsGameStarted((prev) => !prev);  
  };

  return (
    <div className="App">
      {
        isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameStart} />
      }
    </div>
  )
}

export default App