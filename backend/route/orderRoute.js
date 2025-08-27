import express from "express"
import auth from "../controller/userController.js";
import orderClass from "../controller/orderController.js";
const router=express.Router()

router.post('/',orderClass.createOrder)
router.get('/',orderClass.getAllOrder)
router.get(':id/',orderClass.getOrderById)
router.get(':id/',orderClass.updateOrder)
router.put(':id/',orderClass.updateOrder)
router.delete(':id/',orderClass.deleteOrder)

export default router