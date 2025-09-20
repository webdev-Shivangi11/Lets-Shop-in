import express from "express";
import { addProduct, deleteProduct, getAllProducts, handleImageUpload, updateProduct} from "../../controller/admin/productsController.js"
import { upload } from "../../config/cloudinary.js";


const router = express.Router();
router.post("/upload-image",upload.single("my_file"), handleImageUpload);
router.post("/add-product", addProduct);
router.put("/update-product/:id", updateProduct);
router.delete("/delete-product/:id",deleteProduct);
router.get("/get-product",getAllProducts); 
export default router;