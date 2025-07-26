import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";
import Home from './components/Home';
import About from './components/About';
import Other from './components/other';
import Navbar from './components/Navbar';
import Para from './components/Para';
import Pament from './components/Pament';
function App() {
  
  const router=createBrowserRouter(
    [{
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>,
      children:[{
        path:"pament",
        element:<Pament/>
      }]
    }
    
    ,{
       path:"/about",
      element:<div>
        <Navbar/>
        <About/>
      </div>
    },{
       path:"/other",
      element:<div>
        <Navbar/>
        <Other/>
      </div>
    },
    {
      path:"/:id",
      element:<div>
        <Navbar/>
        <Para/>
      </div>

    } ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
