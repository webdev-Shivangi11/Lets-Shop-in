


import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRatings = ({ value, text, color }) => {
  // Ensure value is a number between 0 and 5
  const safeValue = Math.min(Math.max(Number(value) || 0, 0), 5);

  // Calculate star counts
  const fullStars = Math.floor(safeValue);
  const halfStars = safeValue - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = Math.max(0, 5 - fullStars - halfStars); // Prevent negative length

  // Tailwind-safe color class
  const colorClass = `text-${color}`;

  return (
    <div
      className="flex items-center bg-amber-50 p-4"
      aria-label={`Rating: ${safeValue} out of 5`}
    >
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className={`${colorClass} ml-1`} />
      ))}

      {halfStars === 1 && (
        <FaStarHalfAlt className={`${colorClass} ml-1`} />
      )}

      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className={`${colorClass} ml-1`} />
      ))}

      {text && (
        <span
          className={`rating-text ml-[2rem] ${colorClass}`}
          title={`${safeValue} out of 5`}
        >
          {text}
        </span>
      )}
    </div>
  );
};

// Default color (must be Tailwind-safe like 'yellow-500', 'red-400', etc.)
StarRatings.defaultProps = {
  color: "yellow-500",
};

export default StarRatings;
// import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// const StarRatings = ({ value, text, color }) => {
//   // const fullStars = Math.floor(value);
//   // const halfStars = value - fullStars > 0.5 ? 1 : 0;
//   // const emptyStar = 5 - fullStars - halfStars;
//    const safeValue = Math.min(Math.max(Number(value), 0), 5);
//   const fullStars = Math.floor(safeValue);
//   const halfStars = safeValue - fullStars >= 0.5 ? 1 : 0;
//   const emptyStars = 5 - fullStars - halfStars;
//   return (
//     <div className="flex items-center ">
//       {[...Array(fullStars)].map((_, index) => (
//         <FaStar key={index} className={`text-${color} ml-1`} />
//       ))}

//       {halfStars === 1 && <FaStarHalfAlt className={`text-${color} ml-1`} />}
//       {[...Array(emptyStars)].map((_, index) => (
//         <FaRegStar key={index} className={`text-${color} ml-1`} />
//       ))}

//       <span className={`rating-text ml-[2rem] text-${color}`}>
//         {text && text}
//       </span>
//     </div>
//   );
// };

// StarRatings.defaultProps = {
//   color: "yellow-500",
// };

// export default StarRatings;

// // import React from 'react'
// // import { useState } from 'react';
// // import { CiStar } from "react-icons/ci";


// // const TotlaNumberOfStars=5; 

// // const StarRating = (value,onchange,NumOfStars=TotlaNumberOfStars) => {
// //     const [hoveredIndex,setHoverIndex]=useState(null)
// //     const [clickedIndex,setClickedIndex]=useState(value)
// //     function handleClick(index){
// //         return ()=>{
// //             setClickedIndex(index+1)
// //             onchange(index+1)
// //         }
// //     }
// //     // function handleMouseEnter
// //   return (

// //     <div className='flex p-5'>
// //       {[...new Array(NumOfStars)].map((_,index)=>{
// //         let  className="";
// //         if(index<=clickedIndex){
// //             className="bg-red-600"
// //         }
// //         return (
// //             <button key={index} onClick={handleClick(index)}
// //             onMouseEnter={handleMouseEnter(index)}> 
// //             <CiStar className="text-3xl   "key={index}/>
// //             </button>     )
// //       })}
// //     </div>
// //   )
// // }

// // export default StarRating
