import Order from "../model/orderModel.js";
import orderModel from "../model/orderModel.js"
class orderClass{
static createOrder=async()=>{
try{

} catch(err){
console.log(err);

}
    
}
static getAllOrder=async(req,res)=>{
try{
let totalorder=await Order.find()
.populate("user","name email")
.populate("products.product","name price")
res.status(200).json(totalorder)
}
catch(err){
    console.log(err);
    
}
}
static getOrderById=async(req,res)=>{
let {id}=req.params
try{

}
catch(err){
    console.log(err);
    
}
}
static updateOrder=async()=>{

}
static createOrder=async()=>{

}
static createOrder=async()=>{

}
}
export default  orderClass;
