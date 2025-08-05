import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import registerRouter from './routes/registerRoute.js'
import adminRouter from './routes/adminRoute.js'
import adminDataRoute from './routes/volunteers.js'
dotenv.config();
const app = express();
const frontend = process.env.FRONTEND
app.use(cors({
    origin: frontend,
    credentials: true
}));

app.use(express.json());

app.use("/api", registerRouter)
app.use("/api/admin", adminRouter)
app.use("/api/admin/data", adminDataRoute)
app.get("/", (req, res) => {
    res.send("Hello")
})
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("App listening at ", PORT)
})