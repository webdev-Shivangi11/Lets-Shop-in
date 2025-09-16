import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connect.js" 
import product from "./route/productRoute.js"
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
dotenv.config();

const port=process.env.PORT
const database_url=process.env.DATABASE_URL
//middlewares
app.use (cookieParser());
app.use(cors(
    {
  origin: 'http://localhost:5173',
  allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
      credentials: true,

}
))
app.use(express.json());
//for image upload
// app.use(express.static(join(process.cwd(),'upload') ))
app.use(express.urlencoded({extended:true}))

// api endpoints
app.use('/auth',router)
app.use('/',product)
app.use('/',orderRouter)
app.use('/',userRoutes)


// connect to database
connectDB(database_url)

//image  storage engine

  


// start the server
app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`);
    
})

