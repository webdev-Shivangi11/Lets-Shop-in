import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connect.js" 
import product from "./route/productRoute.js"
import { join } from "path"

// import router lfrom "./route/authRoute.js"
import router from "./route/authRoute.js"
import cors from "cors"
//app config
const app=express()
const port=process.env.PORT||'3000'
dotenv.config()
const database_url=process.env. DATABASE_URL
//middlewares
app.use(cors())
app.use(express.json())
//for image upload
app.use(express.static(join(process.cwd(),'upload') ))
app.use(express.urlencoded({extended:true}))

// api endpoints
app.use('/',router)
app.use('/',product)


// connect to database
connectDB(database_url)
// start the server
app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`);
    
})

