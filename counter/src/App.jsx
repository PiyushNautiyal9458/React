import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter,setcounter]=useState(15)


  function addval(){
    if(counter<20)
    setcounter(counter+1)
  }

  function remval(){
    if(counter>=1)
    setcounter(counter-1)
  }

  return (
    <>
      
      <h1>counter {counter}</h1>
      <button onClick={addval}>add {counter}</button>
      <br />
      <button onClick={remval}>remove {counter}</button>
    </>
  )
}

export default App
