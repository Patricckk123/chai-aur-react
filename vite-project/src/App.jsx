import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     let [counter,setCounter]=useState(15) 
  // let counter=5;

  const handleClick = () => {

    if (counter>0){
    counter=counter+1;
    setCounter(counter)
    }
    // else{
    //   counter=counter-1;
    // setCounter(counter)

    // }
  }
  return (
    <>
      <h1> Counter Value {counter}</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
