import React, { use, useContext } from 'react'
import ChildC from './ChildC'
import { UserContext } from '../App'
function ChildB() {
  const ddta=useContext(UserContext)
  return (
    <>
    <h1>{ddta.name}</h1>
    <div>ChildB</div>
    <ChildC/>
    </>
  )
}

export default ChildB