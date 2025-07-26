import React from "react";
import { Link, NavLink } from "react-router";
import './navbar.css'
function Navbar(){
  return(
    <>
    <div>
    <ul>
      <li><NavLink to="/" className={({isActive})=>isActive?"active-link":""}>home</NavLink></li>
      <li><NavLink to="/about" className={({isActive})=>isActive?"active-link":""}>about</NavLink></li>
      <li><NavLink to="/other" className={({isActive})=>isActive?"active-link":""}>other</NavLink></li>
    </ul>
    </div>
    </>

  );
}

export default Navbar