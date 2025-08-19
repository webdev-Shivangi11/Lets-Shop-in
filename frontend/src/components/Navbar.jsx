import React from 'react' 

import logo from '../assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Navbar() {
  const Menulinks = [
    { id:1,name: 'Home', link: '#' },
    { id:2,name: 'Electronics', link: '#' },
    { id:3,name: 'Cafe', link: '#' },
    { id:4,name: 'Fashion', link: '#' },
    { id:5,name: 'Beauty', link: '#' },
    { id:6,name: 'Accesesories', link: '#' },
  ];
     
  return (
    <div className='bg-gray-100 inset-shadow-green-900 shadow-md dark:bg-gray-900 duration-200'> 
      <div className='py-4'>
      <div className="container flex justify-between items-center ">
                {/* logo and links sections */}
                <div className="flex justify-between items-center gap-4">
                <a href="#">
                  <img src={logo} className="h-25  object-cover" alt="Shopin" />
                  
                </a>
                <div className="navbar-links hidden lg:block">
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
           <div className='flex justify-between items-center gap-4'>
             <div className='relative group hidden sm:block'>
              {/* Search bar  section */}
              <input type="text" placeholder='Search' className='search-bar'/>
              {/* <FaSearch className='test-xl text-gray-500 dark:text-gray-400'/> */}
              <IoSearch className='test-xl text-gray-500 dark:text-gray- dark:text-gray-400 group-hover:text-primary absolute top-1/2 translate-y-1/2 right-3'/>
              {/* Search bar  section */}

            </div>
{/* order button section */}
<button>
  <FaCartShopping className='text-xl text bg-gray-600 dark:text-gray-400'/>
</button>
<div className="group relative">
  <FaUser className="w-5 cursor-pointer" />
  <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg shadow-lg">
      <p className="cursor-pointer hover:text-black">My Profile</p>
    <p className="cursor-pointer hover:text-black">Order</p>
    <p className="cursor-pointer hover:text-black">Logout</p>
</div>
  </div>

</div>

           </div>
        </div>
    </div>  
  </div>
  )
}

export default Navbar