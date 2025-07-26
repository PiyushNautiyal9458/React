import React from "react";
import { useParams } from "react-router";
function Param(){
  const {id}=useParams()
  return(
    <>
    ID:{id}
    </>
  )
}

export default Param