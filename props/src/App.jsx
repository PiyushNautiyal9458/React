import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  let obj={
    username:"piyush"
  }

  let narr=[1,2,3]
  return (
    <>
    <h1 className='bg-amber-200 text-black p-1'>hello bhai log</h1>
    <Card password="12345" btntext="piyush nautiyal"/>
    <Card password="12" btntext="computer science"/>
    <Card password="sfbfkjs"/>
    </>
  )
}

export default App
