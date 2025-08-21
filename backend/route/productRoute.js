import express from 'express';
import multer from 'multer';
import productclass from '../controller/productController.js';
const router = express.Router();
router.get("/product", productclass.getallProduct);
// router.post("/all", productclass.create);

//using multer for file upload
// let storage=multer.diskStorage({
//     destination:(req,res,cb)=>{
//         cb(null,"upload")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })
// let uploaddata=multer({storage})
// router.post("/",uploaddata.single("file"),productclass.createdata)

router.post("/product/new",productclass.createProduct);
router.put("/product/:id",productclass.updateProduct);
router.delete("/product/:id",productclass.deleteProduct);


export default router;