 import mongoose from "mongoose";
 let productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number,required:true},
    image:{type:String},
    category:{type:String,required:true},
    subCategory:{type:String,required:true},
    sizes:{type:Array,required:true},
    bestseller:{type:Boolean},
    date:{type:Date,required:true},
 })
 const productModel=mongoose.models.product || mongoose.model('product',productSchema)

 export default productModel