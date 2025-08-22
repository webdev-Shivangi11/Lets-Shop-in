import React from 'react'
import { useState } from 'react';
import { CiStar } from "react-icons/ci";


const TotlaNumberOfStars=5; 

const StarRating = (value,onchange,NumOfStars=TotlaNumberOfStars) => {
    const [hoveredIndex,setHoverIndex]=useState(null)
    const [clickedIndex,setClickedIndex]=useState(value)
    function handleClick(index){
        return ()=>{
            setClickedIndex(index+1)
            onchange(index+1)
        }
    }
    // function handleMouseEnter
  return (

    <div className='flex p-5'>
      {[...new Array(NumOfStars)].map((_,index)=>{
        let  className="";
        if(index<=clickedIndex){
            className="bg-red-600"
        }
        return (
            <button key={index} onClick={handleClick(index)}
            onMouseEnter={handleMouseEnter(index)}> 
            <CiStar className="text-3xl   "key={index}/>
            </button>     )
      })}
    </div>
  )
}

export default StarRating
