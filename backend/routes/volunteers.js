import express from 'express';
import Volunteer from '../models/Volunteer.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.json({ success: true, volunteersData: volunteers });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error fetching data" });
    }
});

export default router;
