import React, {useState, useEffect, useRef} from 'react'
import './App.css';

function App() {

  const [time, setTime] = useState(5)
  const [wordcount, setWordCount] = useState(0)
  const [isGameOn, setIsGameOn] = useState(false)
 
  useEffect(()=> {
    if(isGameOn && time > 0) {
      setTimeout(()=> {
        setTime(prevTime => prevTime - 1)
      }, 1000)
    }
    
  }, [time, isGameOn])

  function startGame() {
    setIsGameOn(true)
  }

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <p className='game-text'>How fast can you type?</p>
      <textarea />
      <p className='game-text'>Time remaining: {time}</p>
      <button onClick={startGame}>Start</button>
      <p className='game-text'>Word count: {wordcount}</p>
    </div>
  );
}

export default App;
