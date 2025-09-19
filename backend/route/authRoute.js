import express from "express"
import  {auth,authMiddleware} from "../controller/authController.js";
const router=express.Router()


// router.get('/',(req,res)=>{
//     res.send("Welcome to Shopin API")
// })
router.post('/signup',auth.signup)
router.post('/login',auth.login)
router.post('/logout',auth.logout)
// router.post('/adminlogin',auth.adminLogin)
router.get("/check-auth",authMiddleware,
    (req,res)=>{
        const user=req.user;
        res.status(200).json({
            success:true,
            message:"Authenticated User!",
            user
        })

    }
)
export default router