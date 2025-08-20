import React from 'react' 
import { useState } from 'react'
import logo from '../assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoChevronBack, IoSearch } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const Menulinks = [
    { id:1,name: 'Home', link: '#' },
    { id:2,name: 'Electronics', link: '#' },
    { id:3,name: 'Cafe', link: '#' },
    { id:4,name: 'Fashion', link: '#' },
    { id:5,name: 'Beauty', link: '#' },
    { id:6,name: 'Accesesories', link: '#' },
  ];
     const [visible, setVisible] = useState(false);
  return (
    <div className='bg-gray-100 inset-shadow-green-900 shadow-md dark:bg-gray-900 duration-200'> 
      <div className='py-4'>
      <div className="container flex justify-between items-center ">
                {/* logo and links sections */}
                <div className="flex justify-between items-center gap-4">
                <a href="#">
                  <img src={logo} className="h-25 object-cover" alt="Shopin" />
                  
                </a>
                <div className="navbar-links hidden  lg:block">
                    <ul className='flex justify-center items-center gap-6 text-gray-700 dark:text-gray-300'>
                     {
                      Menulinks.map((data,index) => (
                        <li>
                          <a href={data.link} className='inline-block px-4 font-semibold text-gray-500  hover:text-black dark:hover:text-white duration-200 '></a>{data.name}</li>
                          
                          ))
                     }
                    </ul>
            </div>
            </div>
            {/* navbarrightsection */}
           <div className='flex justify-between items-center gap-6'>
             <div className='relative group '>
              {/* Search bar  section */}
              <input type="text" placeholder='Search' className='search-bar'/>
              {/* <FaSearch className='test-xl text-gray-500 dark:text-gray-400'/> */}
              <FaSearch className='test-2xl text-gray-500 dark:text-gray- dark:text-gray-400 group-hover:text-primary absolute  translate-x-1/2 top-1 translate-y-1/2 right-4 '/>
              {/* Search bar  section */}

            </div>
{/* order button section */}
<button>
    <FaCartShopping className='text-2xl relative text  dark:text-gray-400'/>
  <p className="absolute right-[-5px] bottom-[5px] w-4 text-center leading-4 bg-gray-950 text-white aspect-square rounded-full text-[8px]">10</p>
</button>
<div className="group relative">
  <FaUser className="w-5 cursor-pointer" />
  <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-lg">
      <p className="cursor-pointer hover:text-black hover:bg-gray-300 p-2 rounded-xl">My Profile</p>
    <p className="cursor-pointer hover:text-black  hover:bg-gray-300 p-2 rounded-xl">Order</p>
    <p className="cursor-pointer hover:text-black  hover:bg-gray-300 p-2 rounded-xl ">Logout</p>
</div>
  </div>

</div>
{/* //menu section */}
<RiMenu3Fill onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden ' />
{/* sidebarmenu for small screen */}
<div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? "w-full":"w-0"} `}>
  <div className='flex flex-col text-gray-600'>
    <div  onClick={()=>setVisible(false)} className="flex gap-4 p-3 cursor items-center" >
<IoChevronBack />
<p>back</p>
    </div>
    
    <div onClick={()=>setVisible(false)} className="py-2 pl-6 border  border-gray-500 hover:bg-gray-200" > Home </div>
    <div onClick={()=>setVisible(false)} className="py-2 pl-6 border  border-gray-500  hover:bg-gray-200" > Collection </div>
    <div onClick={()=>setVisible(false)} className="py-2 pl-6 border  border-gray-500  hover:bg-gray-200" > About </div>
    <div onClick={()=>setVisible(false)} className="py-2 pl-6 border  border-gray-500  hover:bg-gray-200" > Contact </div>

</div>

</div>
           </div>
        </div>
    </div>  
  </div>
  )
}

export default Navbar