import React, {useState, useEffect, useRef} from 'react'
import './App.css';

function App() {
  const GAME_TIME = 5
  const [time, setTime] = useState(GAME_TIME)
  const [wordcount, setWordcount] = useState(0)
  const [isGameOn, setIsGameOn] = useState(false)
  const [userInput, setUserInput] = useState('')
  const textareaRef = useRef(null)
 
  useEffect(()=> {
    if(isGameOn && time > 0) {
      setTimeout(()=> {
        setTime(prevTime => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      endGame()
    }
    
  }, [time, isGameOn])

  function handleChange(e) {
    setUserInput(e.target.value)
  }

  function getWordCount() {
    const wordsArr = userInput.split(" ").filter(word => word !== "")
    return wordsArr.length
  }

  function startGame() {
      
    setIsGameOn(true)
    setTime(GAME_TIME)
    setUserInput("")
    setWordcount(0)
    textareaRef.current.disabled = false
    textareaRef.current.focus()
  }

  function endGame() {
    setWordcount(getWordCount())
    setIsGameOn(false)
  }

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <p className='game-text'>How fast can you type?</p>
      <textarea 
        ref={textareaRef}
        name="userInput"
        value={userInput}
        onChange={handleChange}
        disabled={!isGameOn}
      />
      <p className='game-text'>Time remaining: {time}</p>
      <button onClick={startGame} disabled={isGameOn}>Start</button>
      <p className='game-text'>Word count: {wordcount}</p>
    </div>
  );
}

export default App;
