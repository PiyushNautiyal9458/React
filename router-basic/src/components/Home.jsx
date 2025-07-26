import React from "react";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";
function Home(){
  const nvgt=useNavigate()
  function moveto(){
    nvgt("/about")
  }

  return(
    <>
    <h1>this is home page</h1>
    <button onClick={moveto}>
      move
    </button>
    <Outlet/>
    </>

  );
}

export default Home