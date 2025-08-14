import express from "express"
import auth from "../controller/authController.js";
const router=express.Router()

router.post('/reg',auth.signup)
router.post('/login',auth.login)
export default router