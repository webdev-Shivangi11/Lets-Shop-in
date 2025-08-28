 import mongoose from "mongoose";


  const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);
 let productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    brand: {
      type: String,
      required: true,
    },
    description:{type:String,required:true},

    price:{type:Number,required:true},
    stock:{type:Number,required:[true,'Stock is required'],default:1},
   //  image:{type:String},
   image:Buffer,
    category:{type:String,required:true},
    numOfReviews:{type:Number,required:true,default:0},
    // sizes:{type:Array,required:true},
   //  bestseller:{type:Boolean},
     reviews: [reviewSchema],
  
     rating:{type:Number,default:0},
     comment:{type:String,default:""},


 },{timestamps:true})



 const productModel=mongoose.models.product || mongoose.model('product',productSchema)

 export default productModel