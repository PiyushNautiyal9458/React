import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

const element=React.createElement(
  'a',
  {href:'https://www.google.com',target:"_blank"},
  "click me to update"
)

function myapp(){
  return(
    <h1>sffhklfafbaf</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <>
  {element}
  {myapp()}
  </>
)
