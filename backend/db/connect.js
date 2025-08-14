 import mongoose from "mongoose";

 const connectDB=async(url)=>{
try{
let database={
    dbName:"ducat"
}
await mongoose.connect(url,database)
console.log("connected");

}
    catch(err){
console.log(err)
    }
}
export default connectDB
