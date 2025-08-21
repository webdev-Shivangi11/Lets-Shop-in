import React from 'react' 
import { useState } from 'react'
import logo from '../assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoChevronBack, IoSearch } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Collection from '../pages/Collection';

function Navbar() {
  const [menu,setMenu] = useState("Collection");
  
     const [visible, setVisible] = useState(false);
  return (
    <div className='bg-gray-950 inset-shadow-green-900 shadow-md duration-200'> 
      <div className='py-2'>
      <div className="container flex justify-between items-center cursor-pointer ">
                {/* logo and links sections */}
                <div className="flex justify-between items-center gap-5">
                <a href="#">
                  <img src={logo} className="h-30 object-cover" alt="Shopin" />
                  
                </a>
                <div className="navbar-links hidden  lg:block">
                    <ul className='flex justify-center items-center gap-6 text-2xl text-gray-500 dark:text-gray-300'>
                        <li onClick={()=>{setMenu("Collection")}}><Link to="/collection">Collection</Link>{menu==="Collection"?<hr className='text-green-400 transition-all  duration-1000 cursor-pointer'/>:<></>}</li>
                        <li onClick={()=>{setMenu("Women")}}><Link to="/women">Women</Link>{menu==="Women"?<hr className='text-green-400 transition-all  duration-1000 cursor-pointer'/>:<></>}</li>
                        <li onClick={()=>{setMenu("Men")}}><Link to="/men">Men</Link>{menu==="Men"?<hr className='text-green-400 transition-all  duration-1000 cursor-pointer'/>:<></>}</li>
                        <li onClick={()=>{setMenu("Beauty")}}><Link to="/beauty">Beauty</Link>{menu==="Beauty"?<hr className='text-green-400 transition-all  duration-1000 cursor-pointer'/>:<></>}</li>
                        {/* <li onClick={()=>{setMenu("Home")}}>Home{menu==="Home"?<hr className='text-green-400 transition-all  duration-1000 cursor-pointer'/>:<></>}</li> */}
                    </ul>
            </div>
            </div>
            {/* navbarrightsection */}
           <div className='flex justify-between items-center gap-6 px-4'>
             <div className='relative group '>
              {/* Search bar  section */}
              <input type="text" placeholder='Search' className='search-bar'/>
              {/* <FaSearch className='test-xl text-gray-500 dark:text-gray-400'/> */}
              <FaSearch className='test-2xl text-green-400 group-hover:text-gray-950 absolute  translate-x-1/2 top-1 translate-y-1/2 right-4 '/>
              {/* Search bar  section */}

            </div>
{/* order button section */}
<button>
    <FaCartShopping className='text-2xl relative text-gray-200'/>
  <p className="absolute right-[-5px] bottom-[5px] w-4 text-center leading-4 bg-gray-950 text-white aspect-square rounded-full text-[8px]">10</p>
</button>
<div className="group relative">
  <FaUser  className="w-5 cursor-pointer text-2xl text-gray-200" />
  <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-400 text-gray-300 rounded-lg shadow-lg cursor-pointer ">
      <p className="cursor-pointer hover:text-green-500  p-2 rounded-xl z-40">My Profile</p>
    <p className="cursor-pointer hover:text-green-500  hover:bg-gray-300 p-2 rounded-xl z-40">Order</p>
    <p className="cursor-pointer   hover:bg-green-500 p-2 rounded-xl z-40">Logout</p>
</div>
  </div>

</div>
{/* //menu section */}
<RiMenu3Fill onClick={()=>setVisible(true)} className='w-5 cursor-pointer  text-2xl text-gray-200 sm:hidden ' />
{/* sidebarmenu for small screen */}
<div className={`absolute top-0 right-1 bottom-0 overflow-hidden  bg-white transition-all z-40 ${visible? "w-full h-min":"w-0"} `}>
  <div className='flex flex-col text-gray-600'>
    <div  onClick={()=>setVisible(false)} className="flex gap-4 p-3 cursor items-center z-40 bg-gray-950" >
<IoChevronBack className='text-2xl text-green-400' />
<p className='text-green-400  text-[20px] '>back</p>
    </div>
    
    <div onClick={()=>setVisible(false)} className="py-2 pl-6 border  border-gray-500  hover:bg-gray-200 hover:text-green-500" > <Link to="/collection"> <Collection/></Link></div>
    <div onClick={()=>setVisible(false)} className="py-2 pl-6 border  border-gray-500  hover:bg-gray-200 hover:text-green-500" ><Link to="/women">Women</Link> </div>
    <div onClick={()=>setVisible(false)} className="py-2 pl-6 border  border-gray-500  hover:bg-gray-200 hover:text-green-500" > <Link to="/men">Men</Link> </div>
    <div onClick={()=>setVisible(false)} className="py-2 pl-6 border  border-gray-500  hover:bg-gray-200 hover:text-green-500" > <Link to="/beauty">Beauty</Link> </div>
    {/* <div onClick={()=>setVisible(false)} className="py-2 pl-6 border  border-gray-500  hover:bg-gray-200" > Home </div> */}

</div>

</div>
           </div>
        </div>
    </div>  
  </div>
  )
}

export default Navbar