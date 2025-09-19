 import userModel from "../model/userModel.js";
 import jwt from "jsonwebtoken"; 
 import bcrypt from "bcrypt";
 import dotenv from "dotenv";
dotenv.config();

  export class auth{
    //route for user registration
    static signup=async(req,res)=>{
        let { userName, email, password } = req.body;
        try{
            let userdata = await userModel.findOne({email});
            console.log(req.body);
        // Check if user already exists
        if(userdata){
            return res.json({ success:false,message: "User already exists"});
        } 
        
        if(password.length < 6){
            return res.json({ success:false,message: "Password must be at least 6 characters long"});
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            userName,
            email,
            password:hashedPassword,
       
        });
         await newUser.save();
       
        res.status(200).json({ success:true, message:"Signup successful" });
    }
catch(error){
        console.error(error);
        res.status(500).json({ success:false, message:"Some error occured" });

    }
}
    //route for user login

static login=async(req,res)=>{
    
    let {email,password} = req.body;
    try{
        let userdata = await userModel.findOne({ email });
    
        if(!userdata){
            return res.status(404).json({success:false,message: "User not found"});
        }   
        // let isMatch = await userdata.matchPassword(password);
        let isMatchPassword = await bcrypt.compare(password, userdata.password) ;
    if(!isMatchPassword){
        return res.status(401).json({message: "Password does not match"});
    }
    let token = jwt.sign({
        id:userdata._id,
        role:userdata.role,
        email:userdata.email,
        userName:userdata.userName

    },process.env.JWT_KEY,{expiresIn:"60m"});
    res.cookie("token",token,{httpOnly:true,secure:false,
        // sameSite:"Lax",
    })
    //   console.log("Incoming cookies:", req.cookies);
      res.status(200).json({ success:true,message: "Login successful", 
            token: token,
        user:{
            email:userdata.email,
            role:userdata.role,
            id:userdata._id,
            userName:userdata.userName
        }
    });
    //  console.log(res.cookie);
}catch(error){
        console.error(error);
        res.json({ success:false,message: error.message })
    }
   
   
 }
 static logout=async (req,res) => {
    try{
     res.clearCookie("token").json({ success: true, message: "Logout successful. " });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }

 }
 //Creating an auth middleware

 }
//  export const authMiddleware = async (req, res, next) => {
//   const cookieToken = req.cookies.token;
//   const headerToken = req.headers.authorization?.split(" ")[1];
//   const token = cookieToken || headerToken;

//   console.log("Token from:", cookieToken ? "cookie" : headerToken ? "header" : "none");

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Unauthorized access. Token missing.",
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_KEY);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     if (error.name === "JsonWebTokenError") {
//       return res.status(401).json({ success: false, message: "Invalid token signature" });
//     }
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ success: false, message: "Token expired" });
//     }
//     console.error("JWT verification error:", error);
//     return res.status(500).json({ success: false, message: "Authentication failed" });
//   }
// };
  export const authMiddleware=async(req,res,next)=>{
     const token=req.cookies.token
     console.log("Token from:", req.cookies.token ? "cookie" : "header");
     
     if(!token){
         return res.status(401).json({
             success:false,
             message:"Unauthorized user bla bal"
        })
    }
        try{
            let decoded=jwt.verify(token,process.env.JWT_KEY)
             req.user=decoded;
             next();
        }catch(error){
        res.status(401).json({success:false,message:"Invalid or expired token"})
        console.log(error);
    
    }

}
// export default {auth,authMiddleware}; 