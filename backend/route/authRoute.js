import express from "express"
import auth from "../controller/authController.js";
const router=express.Router()

// router.get('/',(req,res)=>{
//     res.send("Welcome to Shopin API")
// })
router.post('/signup',auth.signup)
router.post('/login',auth.login)
router.post('/logout',auth.logout)
router.post('/adminlogin',auth.adminLogin)
export default router