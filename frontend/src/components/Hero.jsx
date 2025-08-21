import React from 'react'
import { Link } from 'react-router-dom'
import Collection from '../pages/Collection'
// import Navbar from './navbar'

function Hero() {
  return (
    
  <div className="relative w-full h-screen overflow-hidden">
  <video autoPlay muted loop className="absolute w-auto aspect-video size-full object-cover  min-w-full  min-h-full max-w-none z-0  opacity-90 "> 
    <source src="/videos/shopit_header.mp4" type="video/mp4" />
 
  </video>

  <div className="absolute inset-0  flex flex-col  items-center justify-center gap-7 z-10 text-wrap">
<div className='  text-center text-wrap text-white text-8xl font-[Parisienne] font-bold '>
    <div >
     Elevate Your Elegance, 
    </div>
    <div className="text-white text-7xl font-[Parisienne] font-bold bg-opacity-50 p-4 rounded">
      Define Your Style.
    </div>
</div>
    <div className="text-gray-500 text-5xl font-[Outfit] font-bold bg-black bg-opacity-50 p-3 rounded-3xl">
     Luxury,Redefined for You.
    </div>
  <button className=" bg-green-500 text-white text-2xl font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 ">
   <Link to="/collection"> Shop Now </Link> </button>
    
  </div>
</div>

  )
}

export default Hero