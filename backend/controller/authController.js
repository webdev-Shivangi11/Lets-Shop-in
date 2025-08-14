 import User from "../model/userModel.js";
 import jwt from "jsonwebtoken";
 class auth{
    static signup=async(req,res)=>{
    let {name, email, password} = req.body;
    try{

        let userdata = await User.find({email:email})
        if(userdata){
            return res.status(400).json({message: "User already exists"});
        }
        const newUser = new User({
            name:name,
            email:email,
            password:password
        });
        await newUser.save();
        lettoken=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:"2h"})
        res.status(200).json({message: "User registered successfully"});
        res.redirect('/login');
    }
catch(error){
        console.error(error);
        res.status(400).json({message: "Internal server error"});
    }
}
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
    res.json({message: "Login successful", token: token});
    res.redirect('/home');

}catch(error){
        console.error(error);
    }
   
 }
 }
 export default auth