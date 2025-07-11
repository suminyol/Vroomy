import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.config.js"
import userRouter from "./routes/user.routes.js"
import ownerRouter from "./routes/owner.routes.js"


const app=express()

// Connect Database
await connectDB()

// Middleware
app.use(cors())
app.use(express.json());


// routes

app.get('/',(req,res)=> res.send(`Server is running at ${PORT}`))

app.use('/api/user',userRouter)
app.use('/api/owner',ownerRouter)

const PORT=process.env.PORT||3000

app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`));