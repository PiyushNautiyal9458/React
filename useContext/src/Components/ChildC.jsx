import React, { useContext } from 'react'
import { UserContext } from '../App'
import { ThemeContext } from '../App'
function ChildC() {

  const myvalue=useContext(UserContext)
  const {theme,settheme}=useContext(ThemeContext)

  function change(){
    if(theme==='light'){
      settheme('black')
    }
    else{
      settheme('light')
    }
  }

  return (
    <>
    <button onClick={change}>
      click me
    </button>
    <div>{theme}</div>
    </>
  )
}

export default ChildC