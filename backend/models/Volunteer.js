import mongoose from 'mongoose'

const volunteerSchema = new mongoose.Schema({
    fullname: String,
    country: String,
    state: String,
    city: String,
    phone: { type: String, unique: true },
    email: { type: String, unique: true }
}, { timestamps: true });
const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer