import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connect.js"

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
app.use(express.urlencoded({extended:true}))

// api endpoints
app.use('/',router)


// connect to database
connectDB(database_url)
// start the server
app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`);
    
})

