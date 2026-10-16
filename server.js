import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import empRoute from "./route/empRoute.js"



dotenv.config()

const app = express()


connectDB()

//middleware
app.use(express.json())

app.use("/api",empRoute)


app.listen(4000,()=> {
    console.log("server is running on port 4000");
    
})