import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './Components/ChildA'

//Create Context
const UserContext=createContext()
const ThemeContext=createContext()
//wrap all the child inside a provider (har ek child ko ya component to jo ham 
//chahte hai ki kabhi bhi consumer bnn skta hai)
//pass the value
//consumer ke andr jakke consume krlo
function App() {
  const [data,setdata]=useState({name:"piyush"})
  const [theme,settheme]=useState('light')
  return (
    <>

  <div id="body" style={{ backgroundColor: theme==='light'?'black':'white' }}>
    <UserContext.Provider value={data}>
      <ThemeContext.Provider value={{theme,settheme}}>
        <ChildA/>
      </ThemeContext.Provider>
    </UserContext.Provider>
    </div>
    </>
  )
}

export default App
export {UserContext,ThemeContext}