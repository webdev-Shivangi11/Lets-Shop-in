import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './navbar';
import Hero from './Hero';
function Home() {
  return (

<>
 <Navbar/>
    <Hero/>
</>

   
//    <BrowserRouter>
// <Routes>
//   <Route path="/login" element={<Login />} />
//   <Route path="/signup" element={<Signup />} />
//   <Route path="/product/:product_id" element={<Product/>} />
//   <Route path="/cart" element={<Cart/>} />
//   <Route path="/place-order" element={<PlaceOrder/>} />

//   {/* <Route path="/home" element={<Home />} /> */}
//   </Routes>
//   </BrowserRouter>
  

  )
}

export default Home