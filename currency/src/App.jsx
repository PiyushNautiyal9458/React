import { useState } from 'react'
import './App.css'
import InputBox from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    const [amount,setamount]=useState(0)
    const [from,setfrom]=useState("usd")
    const [to,setto]=useState("inr")
    const [Convertedamount,setconvertedamount]=useState(0)

    const currencyinfo=useCurrencyInfo(from)

    const options=Object.keys(currencyinfo)

    const swap=()=>{
      setfrom(to)
      setto(from)
      setconvertedamount(amount)
      setamount(Convertedamount)
    }

    const Convert=()=>{
      setconvertedamount(amount * currencyinfo[to])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            Convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                CurrencyOption={options}
                                onCurrencychange={(currency)=>{
                                  setamount(amount)
                                }}
                                selectCurrency={from}
                                onAmountchange={(amount)=>{
                                  setamount(amount)
                                }}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={Convertedamount}
                                CurrencyOption={options}
                                onCurrencychange={(currency)=>{
                                  setto(currency)
                                }}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
