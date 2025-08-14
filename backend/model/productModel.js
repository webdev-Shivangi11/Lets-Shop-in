 import mongoose from "mongoose";
 let productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number,required:true},
    image:{type:String}
 })
 const Product=mongoose.model('product',productSchema)

 export default Product