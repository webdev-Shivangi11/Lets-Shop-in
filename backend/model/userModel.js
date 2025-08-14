 import mongoose from "mongoose";
 import bcrypt from "bcrypt"
 let userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
 })
 userSchema.pre('save',async function(next){
if(!this.isModified('password')) return next()
    this.password=await bcrypt.hash(this.password,10),
next()
 })

userSchema.methods.matchPassword=async function(password){
return await bcrypt.compare(password,this.password)
}

const User=mongoose.model('user',userSchema)
export default User