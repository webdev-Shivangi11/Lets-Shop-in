import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Hero from './Hero';
import Product from './Product';
import NewArrivals from './NewArrivals';
import StarRating from './StarRating';
import ProductDetail from './ProductDetail';


function Home() {
  return (

<>
{/* <StarRating/> */}
 <Navbar/>

    <NewArrivals/> 
    {/* <ProductDetail/> */}
    {/* <div className="bg-gray-100 min-h-screen p-4">
    <Product product={product}/>
    </div> */}
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