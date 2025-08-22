import React from 'react'
import { Link } from 'react-router-dom';
// import { FaStar} from 'react-icons/fa'; 
// import ReactStars from 'react-rating-stars-component';



  const options={
    edit:false,
    color:"red",
    activeColor:"green",
    size:window.innerWidth <600? 20 :25,
    value:2.5,
    // rating:2.5,
    isHalf:true
    
  }
  const Product=({product})=>{
    return (
      <Link className="border border-gray-800 bg-gray-500" to={product._id}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <div><ReactStars{...options} />
        <span>(255 reviews)</span>
        </div>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>In Stock: {product.stock}</p>
        <p>Category: {product.category}</p>   
        {/* Add more product details as needed */}
      </Link>
    )
  }
  
 


export default Product