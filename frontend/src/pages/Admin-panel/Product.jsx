// import React from 'react'   
// import { useState } from 'react'
// import axios from 'axios'

// const Admin = () => {
//     let [name, setName] = useState();
//     let [description, setDescription] = useState();
//     let [price, setPrice] = useState();
//     let [stock, setStock] = useState();
//     let [image, setImage] = useState();
//     let handleimage = (e) => {
//         setImage(e.target.files[0]);
//     }
//     let obj={
//         image:image
//     }
//     let submitData = async (e) => {
//         e.preventDefault(); 
//         axios.post('http://localhost:3000/admin', {
//             name,description,price,stock,image
//         })
//     }
//   return (
//    <>
//    <form method="post" action="/" encType='mulipart/form-data' onSubmit={submitData} className="flex flex-col gap-4 p-4">

//     <div className="flex flex-col gap-4">
//         NAme:
//         <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} className="border border-gray-300 p-2 rounded-md" />
//         description:
//         <input type="text" name="description" onChange={(e)=>{setDescription(e.target.value)}} className="border border-gray-300 p-2 rounded-md" />
//         price:  
//         <input type="number"  onChange={(e)=>{setPrice(e.target.value)}}  className="border border-gray-300 p-2 rounded-md" />
//         stock:  
//         <input type="number" name="" id=""  onChange={(e)=>{setStock(e.target.value)}}  className="border border-gray-300 p-2 rounded-md" />
//         image:
//         <input type="file" name="image" className="border border-gray-300 p-2 rounded-md" />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
//             Submit                      
// </button>
//     </div>

//    </form>
//    </>
//   )
// }

// export default Admin
import React from 'react'

function Product() {
  return (
    <div>Product</div>
  )
}

export default Product