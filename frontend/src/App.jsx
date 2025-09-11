import React from 'react'
// import Navbar from './components/Navbar ' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './pages/Auth/Login'
import Hero from './components/Hero'
import ShopCategory from './pages/ShopCategory'
import Home from './components/Home' 
import Signup from './pages/Auth/Signup'
import Product from './components/Product'
import AdminLogin from './Admin-panel/AdminLogin'
function App() {
  return (<>

<div className="flex flex-col outline-hidden bg-white">

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Collections' element={<ShopCategory/>}/>
<Route path='/Womens' element={<ShopCategory/>}/>
<Route path='/Mens' element={<ShopCategory/>}/>
<Route path='/Beauty' element={<ShopCategory/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/adminlogin' element={<AdminLogin/>}/>
<Route path='/product' element={<Product/>}/>

</Routes>
</div>



{/* <Navbar/>
<Hero/> */}
  </>
  )
}

export default App
