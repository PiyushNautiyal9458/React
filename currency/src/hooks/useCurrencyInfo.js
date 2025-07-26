import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
  const [data,setdata]=useState({})

  useEffect(function(){
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
       setdata(res[currency])
    })
    console.log(data)
  },[currency])
  console.log(data)
  return data

}

export default useCurrencyInfo