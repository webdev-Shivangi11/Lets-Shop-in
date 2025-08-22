import React from 'react'

const ProductDetail = () => {

   const productdet={
   id:"1",
name:"tshirt",
description:"sample product2",
price:12000,
image:"/public/women_tshirt.avif",
category:"men",
numOfReviews:22,
reviews:3

   }
  return (
    <div className='p-6'>
        <div className="max-w-6xl mx-auto bg-gray-600 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row">
                {/* left thumnail */}
                <div className="hidden md:flex flex-col space-y4 mr-6">
                    <img src="/public/women_tshirt.avif" alt=""  
                    className='w-20 h-20 object-cover rounded-lg cursor-poniter border'/>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default ProductDetail
