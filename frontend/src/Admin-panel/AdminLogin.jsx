  import { useContext, useState } from "react";
  import logo from '../assets/logo.png';
  import axios from "axios";
  import {  useNavigate  } from "react-router-dom";
  import { toast } from "react-toastify";
  import { AuthDataContext } from "./context/AuthContext";
  
  const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();
   let {serverUrl}=useContext(AuthDataContext)
  
    const handleSubmit = async (e) => {
    e.preventDefault();
     if (email.trim() === "" || password.trim() === "") {
      toast.error("Please fill all the fields");
       return;
    }
    try{

      const result = await axios.post(serverUrl+"/adminlogin" ,{
        email,
        password},
      {withCredentials:true}

       ); 
      console.log("Admin Login  successful:", result.data);
      navigate("/");
        toast.success("User Successfully LoggedIn");
    }catch (error) {
       toast.error("An error occurred during login.");
      console.log(" admin login error:", error);
    }
        
      }
    
  return (
   <div className="flex fill-blue-400 md-flex-row justify-center items-center h-screen bg-[url('/bg.webp')] bg-cover bg-center">
  
    <div className="right"> 
      <div className="w-full max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2"> Admin Log in</h1>
      </div>
 <div className="google flex justify-center items-center bg-gray-300">
          <button className="bg-grey-700 rounded-2xl  p-3">
            <img src="/google.icon.png" alt="" />
            Register with google</button>
        </div  >
  
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

      {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
          >
            Login
          </button>

      </form>
    </div></div>
   </div>
  );
};
export default AdminLogin;