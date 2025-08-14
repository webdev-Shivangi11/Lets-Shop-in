import mongoose from "mongoose";
let orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',required:true
    },
    products:[
        {
product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product',required:true
},
 quantity:{type:Number,required:true}}],
 totalamount:{type:Number,required:true},
 orderDate:{
    type:Date,default:Date.now
 }
})

const Order=mongoose.model('order',orderSchema)