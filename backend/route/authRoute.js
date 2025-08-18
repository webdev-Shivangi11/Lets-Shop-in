import express from "express"
import auth from "../controller/userController.js";
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("Welcome to Shopin API")
})
router.post('/signup',auth.signup)
router.post('/login',auth.login)
router.post('/admin',auth.adminLogin)
export default router