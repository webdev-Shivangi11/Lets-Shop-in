
import jwt from "jsonwebtoken";
export const genToken1=async(email)=>{
    try{
        let token =await jwt.sign({email},process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )
        return token

    }catch(error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}
