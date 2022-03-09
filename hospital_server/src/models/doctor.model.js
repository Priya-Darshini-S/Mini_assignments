const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true},
        last_name: { type: String, required: true },
        speciality: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "speciality",
            required: true
        }],
        availability: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "availability",
            required: true
        }],
        cost: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "cost",
            required: true
        }
        
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Doctor = mongoose.model("doctor", doctorSchema);
module.exports = Doctor;