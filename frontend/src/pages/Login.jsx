  import { useState } from "react";
  import logo from '../assets/logo.png';
  import axios from "axios";
  import { Navigate } from "react-router-dom";

  const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Login attempt:", { email, password });
  // };
    const handleSubmit = async (e) => {
    e.preventDefault();
    
      const result = await axios.post("http://localhost:3000/login", {
        email,
        password,
      }  
      
    ).then((res)=>{
      console.log("Login attempt:", result);
        
        // Navigate("/home");
      })
    
    }

  return (
   <div className="flex fill-blue-400 md-flex-row justify-center items-center h-screen bg-[url('/bg.webp')] bg-cover bg-center">
  
    <div className="right"> 
      <div className="w-full max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">Log in</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-muted-foreground uppercase tracking-wide opacity-50 cursor-not-allowed"
          >
            EMAIL OR USERNAME
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder=" Enter Your Email "
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

      
   

        <input type="submit" value="Login" className="w-full py-3 text-base font-medium   bg-gray-400 border border-gray-900 hover:bg-gray-800 hover:text-gray-200"
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
          <span className="text-sm text-muted-foreground opacity-50">Or sign up</span>
        </div>
      </form>
    </div></div>
   </div>
  );
};
export default Login;