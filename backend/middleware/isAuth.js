 import jwt from "jsonwebtoken"; 

const adminAuth=async(req,res,next)=>{
    try{
 let {token}=req.cookies
    if(!token){
        return res.status(400).josn({message:"User does'nt have token "})
    }
    let verifyToken=jwt.verify(token,process.env.JWT_SECRET)
    if(!verifyToken){
               return res.status(400).josn({message:"user have Invalid token"})
 
    }
    req.UserId=verifyToken.userId
    next()
    }catch(error){
        console.log('isAuth error');
        return res.status(500).json({message:`is auth error${error}`})
        
    }
   
}
export  default adminAuth;