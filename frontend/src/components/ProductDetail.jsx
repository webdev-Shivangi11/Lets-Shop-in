import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";
import StarRating from "./StarRating"
import { BsArrowLeft } from "react-icons/bs"; 


const ProductDetail = () => {
  const navigate = useNavigate();

  // 🔹 Static product JSON (no API fetch)
  const [product] = useState({
    _id: "1",
    name: "Stylish T-Shirt",
    description: "High-quality cotton t-shirt with a modern fit.",
    price: 1200,
    brand: "Urban Wear",
    image: "/women_tshirt.avif", // place image inside /public
    stock: 8,
    numReviews: 34,
    rating: 4.5,
    createdAt: "2025-08-25",
  });

  const [qty, setQty] = useState(8);

  // Save to localStorage (no Redux)
  const addToCartHandler = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = cart.find((item) => item._id === product._id);

    if (itemExists) {
      itemExists.qty += qty;
    } else {
      cart.push({ ...product, qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="bg-[#0F172A] min-h-screen p-20 ">
      <Link to="/" className="text-white flex items-center gap-2 mb-4">
        <BsArrowLeft size={20} /> Back
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side: Image */}
        <div className="w-full md:w-1/3 ">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg rounded-tr-[250px] rounded-bl-[250px]    object-cover"
          />
        </div>

        {/* Right side: Details */}
        <div className="flex-1 text-white p-5 ">
          <h2 className="text-3xl font-[Edu NSW ACT] ">{product.name}</h2>
          <p className="my-4 text-gray-400">{product.description}</p>

          <p className="text-xl font-bold text-green-500 mb-4">
            ₹ {product.price}
          </p>

          <div className="flex gap-6 my-4 p-4 ">
            <div className="flex flex-col gap-4">
              <h1 className="flex items-center">
                <FaStore className="mr-2 text-2xl" /> Brand: {product.brand}
              </h1>
              <h1 className="flex items-center">
                <FaClock className="mr-2 text-2xl" /> Added:{" "}
                {new Date(product.createdAt).toDateString()}
              </h1>
              <h1 className="flex items-center">
                <FaStar className="mr-2 text-2xl" /> Reviews: {product.numReviews}
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="flex items-center">
                <FaStar className="mr-2 text-2xl" /> Ratings: {product.rating}
              </h1>
              <h1 className="flex items-center">
                <FaShoppingCart className="mr-2 text-2xl" /> Quantity: {qty}
              </h1>
              <h1 className="flex items-center">
                <FaBox className="mr-2 text-2xl" /> In Stock: {product.countInStock}
              </h1>
            </div>
          </div>

          {product.countInStock > 0 && (
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="rounded-sm outline-none p-1 border text-black bg-white"
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={addToCartHandler}
            disabled={product.stock === 0}
            className="bg-green-700 hover:bg-pink-600 text-white px-6 py-2 rounded mt-6  mx-5"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <StarRating />
    </div>
  );
};

export default ProductDetail;


