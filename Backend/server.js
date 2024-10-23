import express from 'express'
import cors from 'cors'
import { connectdb } from './config/db.js'
import foodRouter from './routes/FoodRoute.js'
import userRouter from './routes/UserRoute.js'
import 'dotenv/config'
import cartRouter from './routes/CartRoute.js'
//app config
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())



//database connection
connectdb();
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.listen(port,()=>console.log("App Listening on port 4000"))