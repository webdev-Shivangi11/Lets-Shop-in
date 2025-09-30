
import express from "express";
import {getFilteredProducts,getProductDetails} from "../../controller/shop/ShopProductController.js"
const router = express.Router();

router.get("/get", getFilteredProducts);
// router.get("/get/:id", getProductDetails);

export default router;