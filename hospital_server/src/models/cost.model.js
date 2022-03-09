const mongoose = require("mongoose");

const costSchema = new mongoose.Schema(
    {
        cost: { type: Number, required: true, unique: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Cost = mongoose.model("cost", costSchema);
module.exports = Cost;