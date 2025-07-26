import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Header from './components/Header/Header.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contactus from './components/Contactus.jsx';
import Param from './components/Param.jsx';
import Github, { infoload } from './components/Github/Github.jsx'
const router=createBrowserRouter([
  {
    path:"",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contactus",
        element:<Contactus/>
      },
      {
        path:"piyush/:id",
        element:<Param/>
      },
      {
         path: "github",
         loader: infoload,
         element: <Github />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
