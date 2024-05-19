import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect("mongodb+srv://jamesmbere:JamesMbere2024@cluster0.iwsmcnw.mongodb.net/food-delivery").then(()=>console.log("DB Connected"))
}