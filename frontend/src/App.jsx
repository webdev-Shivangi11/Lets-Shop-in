import React from 'react'
// import Navbar from './components/Navbar ' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './components/Login'
import Home from './pages/Home'
function App() {
  return (<>
{/* <div className="px-4 sm:-px-[5vw] md:px-[7vw] lg:px-[9vw]">
<Login/> */}
{/* </div> */}

<Home/>

  </>
  )
}

export default App
