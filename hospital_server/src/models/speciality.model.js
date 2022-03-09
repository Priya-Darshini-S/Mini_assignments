const mongoose = require("mongoose");

const specialitySchema = new mongoose.Schema(
    {
        speciality: { type: String, required: true, unique: true },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Speciality = mongoose.model("speciality", specialitySchema);
module.exports = Speciality;