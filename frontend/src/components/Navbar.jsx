import React from 'react' 

import logo from '../assets/logo.png'

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
      <div className="container">
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
        </div>
    </div>  
  </div>
  )
}

export default Navbar