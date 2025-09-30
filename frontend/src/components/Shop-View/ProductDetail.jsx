import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
// import { useToast } from "../ui/use-toast";
import { setProductDetails } from "../../store/shop/shopProductSlice";
import { Label } from "../ui/label";
// import StarRatingComponent from "../common/star-rating";
import { useEffect, useState } from "react";
// import { addReview, getReviews } from "@/store/shop/review-slice";

function ProductDetailsDialog({ open, setOpen, productDetails }) {
  // const [reviewMsg, setReviewMsg] = useState("");
  // const [rating, setRating] = useState(0);
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  // const { cartItems } = useSelector((state) => state.shopCart);
  // const { reviews } = useSelector((state) => state.shopReview);

  // const { toast } = useToast();

  // function handleRatingChange(getRating) {
  //   console.log(getRating, "getRating");

  //   setRating(getRating);
  // // }

  // function handleAddToCart(getCurrentProductId, getTotalStock) {
  //   let getCartItems = cartItems.items || [];

  //   if (getCartItems.length) {
  //     const indexOfCurrentItem = getCartItems.findIndex(
  //       (item) => item.productId === getCurrentProductId
  //     );
  //     if (indexOfCurrentItem > -1) {
  //       const getQuantity = getCartItems[indexOfCurrentItem].quantity;
  //       if (getQuantity + 1 > getTotalStock) {
  //         // toast({
  //         //   title: `Only ${getQuantity} quantity can be added for this item`,
  //         //   variant: "destructive",
  //         // });

  //         return;
  //       }
  //     }
  //   }
  //   dispatch(
  //     addToCart({
  //       userId: user?.id,
  //       productId: getCurrentProductId,
  //       quantity: 1,
  //     })
  //   ).then((data) => {
  //     if (data?.payload?.success) {
  //       dispatch(fetchCartItems(user?.id));
  //       // toast({
  //       //   title: "Product is added to cart",
  //       // });
  //     }
  //   });
  // }

  function handleDialogClose() {
    setOpen(false);
    dispatch(setProductDetails());
    setRating(0);
    setReviewMsg("");
  }

  // function handleAddReview() {
  //   dispatch(
  //     addReview({
  //       productId: productDetails?._id,
  //       userId: user?.id,
  //       userName: user?.userName,
  //       // reviewMessage: reviewMsg,
  //       // reviewValue: rating,
  //     })
  //   ).then((data) => {
  //     if (data.payload.success) {
  //       setRating(0);
  //       setReviewMsg("");
  //       dispatch(getReviews(productDetails?._id));
  //       // toast({
  //       //   title: "Review added successfully!",
  //       // });
  //     }
  //   });
  // }

  // useEffect(() => {
  //   if (productDetails !== null) dispatch(getReviews(productDetails?._id));
  // }, [productDetails]);

  // console.log(reviews, "reviews");

  // const averageReview =
  //   reviews && reviews.length > 0
  //     ? reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) /
  //       reviews.length
  //     : 0;

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="grid grid-cols-2 gap-8 sm:p-12 max-w-[100vw] sm:max-w-[80vw] lg:max-w-[70vw] bg-gray-300">
        <div className="relative overflow-hidden rounded-lg ">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className="aspect-square w-full rounded-lg rounded-tr-[60px] rounded-bl-[60px]  object-cover"
          />
        </div>
        <div className="">
          <div>
            <h1 className="text-3xl font-extrabold font-sans ">{productDetails?.title}</h1>
            <p className="text-muted-foreground text-2xl mb-5 mt-4 sm:text-sm">
              {productDetails?.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p
              className={`text-3xl font-bold text-primary ${
                productDetails?.salePrice > 0 ? "line-through" : ""
              }`}
            >
               ₹{productDetails?.price}
            </p>
            {productDetails?.salePrice > 0 ? (
              <p className="text-2xl font-bold text-muted-foreground">
                 ₹{productDetails?.salePrice}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              {/* <StarRatingComponent rating={averageReview} /> */}
            </div>
            <span className="text-muted-foreground">
              {/* ({averageReview.toFixed(2)}) */}
            </span>
          </div>
          <div className="mt-5 mb-5">
            {productDetails?.totalStock === 0 ? (
              <Button className="w-full opacity-60 cursor-not-allowed">
                Out of Stock
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={() =>
                  handleAddToCart(
                    productDetails?._id,
                    productDetails?.totalStock
                  )
                }
              >
                Add to Cart
              </Button>
            )}
          </div>
          <Separator />
          <div className="max-h-[300px] overflow-auto">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            {/* <div className="grid gap-6">
              {reviews && reviews.length > 0 ? (
                reviews.map((reviewItem) => (
                  <div className="flex gap-4">
                    <Avatar className="w-10 h-10 border">
                      <AvatarFallback>
                        {reviewItem?.userName[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold">{reviewItem?.userName}</h3>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <StarRatingComponent rating={reviewItem?.reviewValue} />
                      </div>
                      <p className="text-muted-foreground">
                        {reviewItem.reviewMessage}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <h1>No Reviews</h1>
              )}
            </div> */}
            {/* <div className="mt-10 flex-col flex gap-2">
              <Label>Write a review</Label>
              <div className="flex gap-1">
                <StarRatingComponent
                  rating={rating}
                  handleRatingChange={handleRatingChange}
                />
              </div>
              <Input
                name="reviewMsg"
                value={reviewMsg}
                onChange={(event) => setReviewMsg(event.target.value)}
                placeholder="Write a review..."
              />
              <Button
                onClick={handleAddReview}
                // disabled={reviewMsg.trim() === ""}
              >
                Submit
              </Button>
            </div> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialog;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaBox,
//   FaClock,
//   FaShoppingCart,
//   FaStar,
//   FaStore,
// } from "react-icons/fa";
// import StarRating from "../StarRating"
// import { BsArrowLeft } from "react-icons/bs"; 


// const ProductDetail = () => {
//   const navigate = useNavigate();

//   // 🔹 Static product JSON (no API fetch)
//   const [product] = useState({
//     _id: "1",
//     name: "Stylish T-Shirt",
//     description: "High-quality cotton t-shirt with a modern fit.",
//     price: 1200,
//     brand: "Urban Wear",
//     image: "/women_tshirt.avif", // place image inside /public
//     stock: 8,
//     numReviews: 34,
//     rating: 4.5,
//     createdAt: "2025-08-25",
//   });

//   const [qty, setQty] = useState(8);

//   // Save to localStorage (no Redux)
//   const addToCartHandler = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const itemExists = cart.find((item) => item._id === product._id);

//     if (itemExists) {
//       itemExists.qty += qty;
//     } else {
//       cart.push({ ...product, qty });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     navigate("/cart");
//   };

//   return (
//     <div className="bg-[#0F172A] min-h-screen p-20 ">
//       <Link to="/" className="text-white flex items-center gap-2 mb-4">
//         <BsArrowLeft size={20} /> Back
//       </Link>

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Left side: Image */}
//         <div className="w-full md:w-1/3 ">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full rounded-lg rounded-tr-[250px] rounded-bl-[250px]    object-cover"
//           />
//         </div>

//         {/* Right side: Details */}
//         <div className="flex-1 text-white p-5 ">
//           <h2 className="text-3xl font-[Edu NSW ACT] ">{product.name}</h2>
//           <p className="my-4 text-gray-400">{product.description}</p>

//           <p className="text-xl font-bold text-green-500 mb-4">
//             ₹ {product.price}
//           </p>

//           <div className="flex gap-6 my-4 p-4 ">
//             <div className="flex flex-col gap-4">
//               <h1 className="flex items-center">
//                 <FaStore className="mr-2 text-2xl" /> Brand: {product.brand}
//               </h1>
//               <h1 className="flex items-center">
//                 <FaClock className="mr-2 text-2xl" /> Added:{" "}
//                 {new Date(product.createdAt).toDateString()}
//               </h1>
//               <h1 className="flex items-center">
//                 <FaStar className="mr-2 text-2xl" /> Reviews: {product.numReviews}
//               </h1>
//             </div>

//             <div className="flex flex-col gap-4">
//               <h1 className="flex items-center">
//                 <FaStar className="mr-2 text-2xl" /> Ratings: {product.rating}
//               </h1>
//               <h1 className="flex items-center">
//                 <FaShoppingCart className="mr-2 text-2xl" /> Quantity: {qty}
//               </h1>
//               <h1 className="flex items-center">
//                 <FaBox className="mr-2 text-2xl" /> In Stock: {product.countInStock}
//               </h1>
//             </div>
//           </div>

//           {product.countInStock > 0 && (
//             <select
//               value={qty}
//               onChange={(e) => setQty(Number(e.target.value))}
//               className="rounded-sm outline-none p-1 border text-black bg-white"
//             >
//               {[...Array(product.countInStock).keys()].map((x) => (
//                 <option key={x + 1} value={x + 1}>
//                   {x + 1}
//                 </option>
//               ))}
//             </select>
//           )}

//           <button
//             onClick={addToCartHandler}
//             disabled={product.stock === 0}
//             className="bg-green-700 hover:bg-pink-600 text-white px-6 py-2 rounded mt-6  mx-5"
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//       <StarRating />
//     </div>
//   );
// };

// export default ProductDetail;


