 import mongoose from "mongoose";
 import bcrypt from "bcrypt"
 let userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    mobile_no:{type:Number,required:true},
   //  address:[{
   //    type:mongoose.Schema.Types.ObjectId,
   //    ref:"address"
   //  }],
   //  paymentInformation:[{
   //    type:mongoose.Schema.Types.ObjectId,
   //    ref:"payment_information"
   //  }],
 role: {
    type: String,
    default: "user",
  },
    cartData:{type:Object,default:{}}
 })


const userModel=mongoose.model('user',userSchema)
export default userModel