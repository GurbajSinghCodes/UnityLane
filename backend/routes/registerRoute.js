import mongoose from 'mongoose'
import express from 'express'
import Volunteer from '../models/Volunteer.js'
const router = express.Router()
router.post("/register", async (req, res) => {
    try {
        const newVolunteer = new Volunteer(req.body);
        await newVolunteer.save();
        res.status(201).json({ success: true, message: "Volunteer registered successfully" });
    } catch (error) {
        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyPattern)[0];

            let message = "Duplicate entry";
            if (duplicateField === "phone") {
                message = "The phone number is already registered";
            } else if (duplicateField === "email") {
                message = "The email is already registered";
            }

            res.status(400).json({ success: false, message });
        }
    }
})
export default router