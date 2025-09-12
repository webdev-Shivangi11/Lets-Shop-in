 import mongoose from "mongoose";
 let userSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
  
 
 role: {
    type: String,
    default: "user",
  },
    cartData:{type:Object,default:{}}
 })


const userModel=mongoose.model('user',userSchema)
export default userModel