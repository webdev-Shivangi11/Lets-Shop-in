import productModel from '../model/productModel.js';
class productclass {
    //creating product -admin
    static createProduct=async (req, res,next) => {
try{
     const product=await productModel.create(req.body);
        res.status(201).json({
            success: true, 
            product 
        })
}
catch(error){
    console.error(error);   
    res.status(500).json({ success: false, message: error.message });    
}
    }      
    //getting  all products
    static getallProduct=async (req, res) => {
        try {
            const products = await productModel.find();
            res.json({ success: true, products });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: error.message });
        }
    }
      //update product -admin
    static updateProduct=async (req, res,next) => {
        let product =await productModel.findById(req.params);
        if (!product) {
            return res.status(404).json(
                { success: false, 
                    message: 'Product not found' 
                });
            }
                product = await productModel.findByIdAndUpdate(req.params.id,req.body, {
                    new: true,
                    runValidators : true, 
                    useFindAndModify: false
                });

        res.status(200).json({
            success: true,   
            product
        });    
 
    }
    //delete product -admin
    static deleteProduct=async (req, res) => {
        const product = await productModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                 success: false,
                 message: 'Product not found' });
        }   
        await product.deleteOne();
        res.status(200).json({  
            success: true,
            message: 'Product deleted successfully'
        });
    } 

    // const image=req.file.filename;
    // const { name, description,price,stock,image } = req.body;
    // try {

    //     // // Validate product data
    //     // if (!name || !price || !description) {
    //     //     return res.status(400).json({ success: false, message: 'All fields are required' });
    //     // }
    //     // if (!validator.isNumeric(price.toString())) {
    //     //     return res.status(400).json({ success: false, message: 'Price must be a number' });
    //     // }

        // const newProduct = new productModel({
        //     name:name,
        //     description:description,
        //     price:price,
        //     stock:stock,
        //     image:image
        // });

        // await newProduct.save();
        // res.json({ success: true, product: newProduct });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ success: false, message: error.message });
    // }


}
export default productclass;