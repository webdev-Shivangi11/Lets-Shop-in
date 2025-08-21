 import mongoose from "mongoose";
 let productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number,required:[true,'Stock is required'],default:1},
    image:{type:String},
    category:{type:String,required:true},
    numOfReviews:{type:Number,required:true,default:0},
    // sizes:{type:Array,required:true},
   //  bestseller:{type:Boolean},
   reviews:{
     name:{type:String},
     rating:{type:Number,default:0},
     comment:{type:String,default:""},
    },
    createdAt:{type:Date,default:Date.now}
 })
 const productModel=mongoose.models.product || mongoose.model('product',productSchema)

 export default productModel