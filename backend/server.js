import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connect.js" 
import product from "./route/productRoute.js"
import { join } from "path" ;
import multer from "multer";
import path from "path";  


// import router lfrom "./route/authRoute.js"
import router from "./route/authRoute.js"
import orderRouter   from "./route/orderRoute.js"
import userRoutes from "./route/userRoute.js";
import cors from "cors"
import cookieParser from "cookie-parser";
//app config
const app=express()
const port=process.env.PORT||'3000'
dotenv.config()
const database_url=process.env. DATABASE_URL
//middlewares
app.use(cors(
    {
  origin: 'http://localhost:5173',
  credentials: true
}
))
app.use (cookieParser());
app.use(express.json())
//for image upload
app.use(express.static(join(process.cwd(),'upload') ))
app.use(express.urlencoded({extended:true}))

// api endpoints
app.use('/auth',router)
app.use('/',product)
app.use('/',orderRouter)
app.use('/',userRoutes)


// connect to database
connectDB(database_url)

//image  storage engine
const storage = multer.diskStorage({
    destination:  "/upload/images",
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now() }${path.extname(file.originalname)}`);
    }
    })
    const upload = multer({ storage: storage });
    //creating upload endpoint for 
    app.use("/images", express.static("upload/images"));
app.post ("/upload", upload.single("product"), (req, res) => {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    res.status(200).json({ 
        success: true,
        image_url:` http://localhost:${port}/images/${ req.file.filename}` 
    });
});


// start the server
app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`);
    
})

