//  import express from "express"
import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connect.js"
// import router lfrom "./route/authRoute.js"
import router from "./route/authRoute.js"
import cors from "cors"
const app=express()
dotenv.config()
const port=process.env.PORT||'3000'
const database_url=process.env. DATABASE_URL
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB(database_url)
app.use('/',router)
app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`);
    
})

