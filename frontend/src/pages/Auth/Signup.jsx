import React from 'react'

function Signup() {
  return (
    <div>Signup</div>
  )
}

export default Signup

// import { useState } from "react";
// import logo from "../assets/logo.png";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [mobile_no, setMobile_no] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await axios.post("http://localhost:3000/signup", {
//         name,
//         email,
//         password,
//         mobile_no,
//       });
//       console.log("Signup successful:", result.data);
//       navigate("/login");
//     } catch (error) {
//       console.error("Signup error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col lg:flex-row items-center justify-center px-6 py-10">
//       {/* Left Panel */}
//       <div className="w-full lg:w-1/2 min-h-screen  flex flex-col items-center justify-center p-12 bg-[url('/login_card.avif')] bg-no-repeat bg-cover bg-center text-white text-center rounded-lg shadow-xl">
//         <h1 className="text-5xl font-bold mb-4  bg-black">Welcome to Shopin 👋🏻</h1>
//         <p className="text-xl font-medium bg-black">
//           Please sign up to your account and start the adventure
//         </p>
//       </div>

//       {/* Right Panel */}
//       <div className="w-full max-w-md mt-10 lg:mt-0 bg-white p-10 rounded-xl shadow-2xl">
//         <div className="mb-4 text-center">
//           {/* <img src={logo} alt="Logo" className="mx-auto h-20 mb-4" /> */}
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign Up</h2>
//         </div>
//         <div className="google flex justify-center items-center bg-gray-300">
//           <button className="bg-grey-700 rounded-2xl  p-3 flex gap-2">
//             <img src="/google_icon.png"  alt="" />
//             Register with google</button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Name or Username
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//               required
//             />
//           </div>

//           {/* Mobile Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               id="mobile"
//               value={mobile_no}
//               onChange={(e) => setMobile_no(e.target.value)}
//               placeholder="Enter your mobile number"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
//           >
//             Signup
//           </button>

//           {/* Redirect Link */}
//           <div className="text-center mt-4">
//             <span className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link to="/login" className="text-green-600 font-medium hover:underline">
//                 Login
//               </Link>
//             </span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// // import { useState } from "react";
// // import logo from '../assets/logo.png';
// // import axios from "axios";
// // import { Link, useNavigate } from "react-router-dom";

// // const Signup = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [mobile_no, setMobile_no] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const result = await axios.post("http://localhost:3000/signup", {
// //         name,
// //         email,
// //         password,
// //         mobile_no
// //       });
// //       console.log("Signup successful:", result.data);
// //       navigate("/login"); // Redirect after successful signup
// //     } catch (error) {
// //       console.error("Signup error:", error);
// //     }
// //   };

// //   return (
// //     // bg-[url('/bg.webp')
// //     <div className=" min-h-screen  p-40 bg-gray-900">
// //       <div className="container mx-auto">
        
// // <div className=" flex flex-col w-full lg:w-1/2  h-2/3 bg-[url('/login_card.avif')]  items-center justify-center p-12 bg-no-repeat bg-cover bg-cente  ">
// //        <h1 className="text-3xl md:text-2xl 2xl:text-2xl font-medium mb-2">
// //             Welcome to Shopin 👋🏻
// //           </h1>
// //           <p className="text-base md:text-lg font-medium mb-4">
// //             Please sign-in to your account and start the adventure
// //           </p></div>
// //       </div>
// //       <div className="w-full max-w-md mx-auto p-10 border border-gray-300 rounded-lg shadow-lg bg-white">
// //         <div className="mb-8">
// //           <h1 className="text-2xl font-semibold text-foreground mb-2 text-center">Sign Up</h1>
// //         </div>

// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           <div className="space-y-2">
// //             <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide opacity-50">
// //               Name or Username
// //             </label>
// //             <input
// //               id="name"
// //               type="text"
// //               placeholder="Name or Username"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               className="w-full pl-4 pr-12 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
// //               required
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide opacity-50">
// //               Email
// //             </label>
// //             <input
// //               id="email"
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full pl-4 pr-12 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
// //               required
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide opacity-50">
// //               Password
// //             </label>
// //             <input
// //               id="password"
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
// //               required
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide opacity-50">
// //               Mobile Number
// //             </label>
// //             <input
// //               id="mobile"
// //               type="tel"
// //               placeholder="Mobile Number"
// //               value={mobile_no}
// //               onChange={(e) => setMobile_no(e.target.value)}
// //               className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
// //               required
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full py-3 text-base font-medium bg-gray-400 border border-gray-900 cursor-pointer"
// //           >
// //             Signup
// //           </button>

// //           <div className="text-center">
// //             <span className="text-sm text-green-600">
// //               <Link to="/login">Already have an account? Login</Link>
// //             </span>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;
