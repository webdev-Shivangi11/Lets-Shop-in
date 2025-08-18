 import userModel from "../model/userModel.js";
 import jwt from "jsonwebtoken"; 
 import validator from "validator"; 
 import bcrypt from "bcrypt";
 class auth{
    //route for user registration
    static signup=async(req,res)=>{
        try{
        const { name, email, password } = req.body;

             let userdata = await userModel.find({email});
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
            password:hashedPassword
        });
         const user=await newUser.save();
        let token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"2h"})
        res.json({ success:true,message: "User registered successfully"});
        res.redirect('/login');
    }
catch(error){
        console.error(error);
        res.json({message: "Internal server error"});
    }
}
    //route for user login

static login=async(req,res)=>{
    let {email, password} = req.body;
    try{
        let userdata = await User.findOne({email:email});
        if(!userdata){
            return res.status(404).json({message: "User not found"});
        }   
        let isMatch = await userdata.matchPassword(password);
    if(!isMatch){
        return res.status(400).json({message: "Password does not match"});
    }
    let token = jwt.sign({id:userdata._id},process.env.JWT_SECRET,{expiresIn:"2h"});
    res.json({ success:true,message: "Login successful", token: token});
    res.redirect('/home');

}catch(error){
        console.error(error);
        res.json({ success:false,message: error.message });
    }
   
   
 }
 //Route for admin login
  static adminLogin=async(req,res)=>{
 }
 }
 export default auth