import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount } from './redux/Createslice'

function App() {
  const [num,setnum]=useState(0)
  const counter=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  function addto(){
    dispatch(increment(counter))
  }
  function subto(){
    dispatch(decrement(counter))
  }
  function addnum(){
    dispatch(incrementByAmount(num))
  }
  

  return (
    <>
      <h1> hello </h1>
      <h1>{counter}</h1>
      <button onClick={addto}>add</button>
      <button onClick={subto}>sub</button>
      <input
      type="number"
      placeholder='enter any number'
      value={num}
      onChange={(e)=>setnum(e.target.value)}
      >
        </input>
        <button onClick={addnum}>add num</button>
      
    </>
  )
}

export default App
