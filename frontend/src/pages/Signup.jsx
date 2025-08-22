  import { useState } from "react";
  import logo from '../assets/logo.png';
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
  
  const Signup= () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let result=await axios.post("http://localhost:5000/api/signup", {
  //     name,
  //     email,password})
  //   console.log("Login attempt:", { email, password, keepLoggedIn });
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await axios.post("http://localhost:3000/signup", {
      name,
      email,
      password,
    }).then((res)=>{
      Navigate("/login");
    })
    // console.log("Signup successful:", result.data);
  

  } catch (error) {
    console.error("Signup error:", error);  
  }
  return (
   <div className="flex  md-flex-row justify-center items-center h-screen bg-[url('/bg.webp')] ">
  
 <div className="w-full max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-lg bg-white ">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">Sign Up</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="space-y-2">
          <label
            
            className="text-sm font-medium text-muted-foreground uppercase tracking-wide opacity-50 cursor-not-allowed"
          >
           NAME OR  USERNAME
          </label>
          <div className="relative">
            <input
              id="name"
              type="name"
              placeholder="Name or Username"
              // value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
              required
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent opacity-50 pointer-events-none" />
          </div>
        </div>
        <div className="space-y-2">
          <label
          
            className="text-sm font-medium text-muted-foreground uppercase tracking-wide opacity-50 cursor-not-allowed"
          >
            EMAIL 
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
              
              required
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent opacity-50 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-muted-foreground uppercase tracking-wide opacity-50 cursor-not-allowed"
          >
            PASSWORD
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
            
            required
          />
        </div>

      
        <button
          type="submit"
          className="w-full py-3 text-base font-medium cursor-not-allowed opacity-50  bg-gray-400 border border-gray-900"
        >
          Signup 
        </button>

<input type="submit" value="Signup" className="w-full py-3 text-base font-medium cursor-pointer  bg-gray-400 border border-gray-900"
        />  
        {/* <div className="text-center">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline pointer-events-none opacity-50"
          >
            Forgot your password?
          </a>
        </div> */}

        <div className="text-center">
          <span className="text-sm text-muted-foreground opacity-50">
            <Link to="/login" >Or sign up</Link>
          </span>
        </div>
      </form>
    </div></div>
  
  );
};
  }
export default Signup;