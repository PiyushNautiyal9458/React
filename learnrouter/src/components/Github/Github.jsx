import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
function GitHub(){
  const data=useLoaderData()
  // const [data,setdata]=useState([])

  // useEffect(function(){
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((res)=> res.json())
  //   .then((data)=> setdata(data))
  // },[])
  return (
    <>
    github followers {data.followers}
    </>
  )
}

export default GitHub

export const infoload= async ()=>{
  const response=await(fetch('https://api.github.com/users/hiteshchoudhary'))
  return response.json()
}