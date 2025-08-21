import productModel from '../model/productModel.js';
import validator from 'validator';
class productclass {
static read=async (req, res) => {
    try {
        const products = await productModel.find();
        res.json({ success: true, products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}
static createdata=async (req, res) => {
    // const image=req.file.filename;
    const { name, description,price,stock,image } = req.body;
    try {

        // // Validate product data
        // if (!name || !price || !description) {
        //     return res.status(400).json({ success: false, message: 'All fields are required' });
        // }
        // if (!validator.isNumeric(price.toString())) {
        //     return res.status(400).json({ success: false, message: 'Price must be a number' });
        // }

        const newProduct = new productModel({
            name:name,
            description:description,
            price:price,
            stock:stock,
            image:image
        });

        await newProduct.save();
        res.json({ success: true, product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}
}
export default productclass;