import React from 'react'

function Hero() {
  return (
  <div className="relative w-full h-screen overflow-hidden">
  <video autoPlay muted loop className="absolute w-auto min-w-full min-h-full max-w-none z-0">
    <source src="/videos/shopit_header.mp4" type="video/mp4" />
 
  </video>

  <div className="absolute inset-0   flex items-center justify-left z-10">

    <div className="text-white text-7xl font-[Parisienne] font-bold bg-black bg-opacity-50 p-4 rounded">
     Luxury,
    </div>
    <div className="text-white text-7xl font-[Parisienne] font-bold bg-black bg-opacity-50 p-4 rounded">
    Redefined for You.
    </div>
  </div>
</div>

  )
}

export default Hero