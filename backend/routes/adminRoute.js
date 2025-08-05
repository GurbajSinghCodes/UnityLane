import express from 'express'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.post("/", async (req, res) => {
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
    const JWT_SECRET = process.env.JWT_SECRET

    const { username, password } = req.body;
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, message: "Credentials Verified", token });
    }
    else {
        res.status(401).json({ success: false, message: "Invalid Credentials" })
    }
})
export default router
