import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Login from './components/Signup'
import Product from '../pages/Product'
import Product from '../pages/Cart'
import Product from '../pages/PlaceOrder'
function Home() {
  return (
   <BrowserRouter>
<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/product/:product_id" element={<Product/>} />
  <Route path="/cart" element={<Cart/>} />
  <Route path="/place-order" element={<PlaceOrder/>} />

  {/* <Route path="/home" element={<Home />} /> */}
  </Routes>
  </BrowserRouter>
  

  )
}

export default Home