 import userModel from "../model/userModel.js";
 import jwt from "jsonwebtoken"; 
 import validator from "validator"; 
 import bcrypt from "bcrypt";
 class auth{
    //route for user registration
    static signup=async(req,res)=>{
        try{
    console.log(req.body);

        let { name, email, password,mobile_no } = req.body;

             let userdata = await userModel.findOne({email});
        // Check if user already exists
        if(userdata){
            return res.json({ success:false,message: "User already exists"});
        } 
        // validating email and string password
        if(!validator.isEmail(email)){
            return res.json({ success:false,message: "Invalid email format"});     
        }
        if(password.length < 6){
            return res.json({ success:false,message: "Password must be at least 6 characters long"});
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword,
            mobile_no
        });
         const user=await newUser.save();
        // let token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"2h"})
        let token=jwt.sign({id:user._id},process.env.JWT_KEY,{expiresIn:"24h"})
        res.json({ success:true,token});
        // res.redirect('/login');
    }
catch(error){
        console.error(error);
        // res.json({success:false,message: "Internal server error"});
        res.status(500).json({ success:false, message:error.message });

    }
}
    //route for user login

static login=async(req,res)=>{
    
    let {email, name,password} = req.body;
    try{
        let userdata = await userModel.findOne({
               $or: [{ email }, { name }]

        });
        if(!userdata){
            return res.status(404).json({message: "User not found"});
        }   
        // let isMatch = await userdata.matchPassword(password);
        let isMatch = await bcrypt.compare(password, userdata.password) ;
    if(!isMatch){
        return res.status(400).json({message: "Password does not match"});
    }
    let token = jwt.sign({id:userdata._id},process.env.JWT_KEY,{expiresIn:"24h"});
    res.json({ success:true,message: "Login successful", token: token});
    // res.redirect('/home');


}catch(error){
        console.error(error);
        res.json({ success:false,message: error.message });
    }
   
   
 }
 static logout=async (req,res) => {
    try{
     res.json({ success: true, message: "Logout successful. Please clear your token on the client side." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }

 }
 //Route for admin login
  static adminLogin=async(req,res)=>{
    try{
       let { email,password }=req.body
  if(email===process.env.ADMIN_EMAIL && 
    password===process.env.ADMIN_PASSWORD
  ){
          let token=jwt.sign({email},process.env.JWT_KEY,{expiresIn:"24h"})
        res.status(200).json({ success:true,token});
  }return res.status(400).json({message:"INVALID CLADENTIALS"})
    }catch(error) {
        console.error(error);
        res.status(500).json({ success: false, messaage:`Admin error ${error}`});
    }
 }
 }
 export default auth