import React from 'react'
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6'

function NewArrivals() {
    const newArrival= [
        { id: 1, 
            name: "New T-Shirt", 
            price: 1200, 
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrKzjc_QI6z9D3RsLrMQgja4xkM-9UgyxRLecQ5SyNe2GdrbNc4NPRWRcaDfzcmzZfEblXWeBD-0GB_GMyklX6tYk9NbbnSzGnFNQoWlRHqHsoGJe7GdV_Mg"
        },
        { id: 2, 
            name: "New T-Shirt", 
            price: 1200, 
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZ_6zK9YBIU1fkW6Sq4Bjfl7VaQkIyZpG9QLw10lMgD1dHT83ORqgC9XGBqyRlZysrNKiVvcTdIAnoqqL3g5E81bw2p9aOwxhUi1GQAWyn0VQbV1BD41REvg"
        },
        { id: 3, 
            name: "New T-Shirt", 
            price: 1200, 
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZ_6zK9YBIU1fkW6Sq4Bjfl7VaQkIyZpG9QLw10lMgD1dHT83ORqgC9XGBqyRlZysrNKiVvcTdIAnoqqL3g5E81bw2p9aOwxhUi1GQAWyn0VQbV1BD41REvg"
        },
        { id: 4, 
            name: "New T-Shirt", 
            price: 1200, 
            image:  "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrKzjc_QI6z9D3RsLrMQgja4xkM-9UgyxRLecQ5SyNe2GdrbNc4NPRWRcaDfzcmzZfEblXWeBD-0GB_GMyklX6tYk9NbbnSzGnFNQoWlRHqHsoGJe7GdV_Mg"
        },
    { id: 3, 
            name: "New T-Shirt", 
            price: 1200, 
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZ_6zK9YBIU1fkW6Sq4Bjfl7VaQkIyZpG9QLw10lMgD1dHT83ORqgC9XGBqyRlZysrNKiVvcTdIAnoqqL3g5E81bw2p9aOwxhUi1GQAWyn0VQbV1BD41REvg"
        },
        { id: 4, 
            name: "New T-Shirt", 
            price: 1200, 
            image:  "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrKzjc_QI6z9D3RsLrMQgja4xkM-9UgyxRLecQ5SyNe2GdrbNc4NPRWRcaDfzcmzZfEblXWeBD-0GB_GMyklX6tYk9NbbnSzGnFNQoWlRHqHsoGJe7GdV_Mg"
        },
    { id: 3, 
            name: "New T-Shirt", 
            price: 1200, 
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZ_6zK9YBIU1fkW6Sq4Bjfl7VaQkIyZpG9QLw10lMgD1dHT83ORqgC9XGBqyRlZysrNKiVvcTdIAnoqqL3g5E81bw2p9aOwxhUi1GQAWyn0VQbV1BD41REvg"
        },
        { id: 4, 
            name: "New T-Shirt", 
            price: 1200, 
            image:  "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSrKzjc_QI6z9D3RsLrMQgja4xkM-9UgyxRLecQ5SyNe2GdrbNc4NPRWRcaDfzcmzZfEblXWeBD-0GB_GMyklX6tYk9NbbnSzGnFNQoWlRHqHsoGJe7GdV_Mg"
        }]
  return (
<section>
    <div className=" mx-auto text-center  relative ">
        <h2 className='text-3xl font-bold '>Explore New Arrivals</h2>
        <p className="text-lg">Discover the latest styles straight off runway, freshly added to keep your wardrobe on the cutting edge of fashion.</p>
        // scroll button
        <div className="absolute right-0 bottom-2 flex ">
            <button className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300'>
                <FaCircleChevronLeft className='text-2xl text-gray-500 hover:text-green-500 transition duration-300' />
            </button>
            <button className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300'>
                <FaCircleChevronRight className='text-2xl text-gray-500 hover:text-green-500 transition duration-300' />
            </button>
        </div>
    </div>

  <div className="container mx-auto flex overflow-x-scroll   relative"> 
  {newArrival.map((product)=>(
    <div key={product.id} className="w-64 bg-white rounded-lg shadow-lg p-4 flex-shrink-0">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
   </div>
))
}
</div>
</section>
  );
};

export default NewArrivals