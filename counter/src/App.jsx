import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const increaseValue = () => {
    // console.log(counter);
    /*
    setCounter fn returns a call back function which takes previousCounter value as parameter
    For example
    setCounter(prevCounter => prevCounter + 1)
    */
    if(counter < 10) {
      setCounter(counter+1)
    }
  }
  const decreaseValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>
        React Counter
      </h1>
      <h2>Counter Value : {counter}</h2>
      <br />
      <button onClick={increaseValue}>Increment Value </button>
      <button onClick={decreaseValue}>Decrement Value </button>
    </>
  )
}

export default App
