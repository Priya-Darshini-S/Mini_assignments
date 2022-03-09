const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema(
    {
        timings: { type: String, required: true } ,
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Availability = mongoose.model("availability", availabilitySchema);
module.exports = Availability;