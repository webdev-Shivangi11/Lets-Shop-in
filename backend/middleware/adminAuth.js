 import jwt from "jsonwebtoken"; 

const adminAuth=async(req,res,next)=>{
    try{
 let {token}=req.cookies
    if(!token){
        return res.status(400).josn({message:"Not authorized Login Again"})


    }
    let verifyToken=jwt.verify(token,process.env.JWT_SECRET)
    if(!verifyToken){
               return res.status(400).josn({message:"Not authorized Login Again,Invalid token"})
 
    }
    req.adminEmail=process.env.ADMIN_EMAIL
    next()
    }catch(error){
        console.log('isAdminAuth error');
        return res.status(500).json({message:`is admin auth error${error}`})
        
    }
   
}
export  default adminAuth;