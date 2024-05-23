import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"



//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors({

    origin:["http://localhost:4000",
    "https://mnrx-mern-food-delivery-frontend-app.onrender.com",
    "https://mnrx-mern-food-delivery-admin-app.onrender.com"]

}))
app.use(express.urlencoded({extended:false}))
//db connection
connectDB()

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{console.log(`Server Started on http://localhost:${port}`)})
