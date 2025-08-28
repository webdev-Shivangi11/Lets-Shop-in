import React from 'react'
// import Navbar from './components/Navbar ' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './pages/Login'
import Hero from './components/Hero'
import ShopCategory from './pages/ShopCategory'
import Home from './components/Home' 
import Signup from './pages/Signup'
import Product from './components/Product'
function App() {
  return (<>
{/* <div className="px-4 sm:-px-[5vw] md:px-[7vw] lg:px-[9vw]">
<Login/> */}
{/* </div> */}
<BrowserRouter>
{/* <Navbar/> */}
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Collections' element={<ShopCategory/>}/>
<Route path='/Womens' element={<ShopCategory/>}/>
<Route path='/Mens' element={<ShopCategory/>}/>
<Route path='/Beauty' element={<ShopCategory/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
{/* <Route path='/admin' element={<Admin/>}/> */}
<Route path='/product' element={<Product/>}/>

</Routes>

</BrowserRouter>

{/* <Navbar/>
<Hero/> */}
  </>
  )
}

export default App
