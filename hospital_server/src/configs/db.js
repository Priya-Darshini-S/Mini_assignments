const moongoose = require("mongoose");

module.exports = () => {
    return moongoose.connect("mongodb+srv://priyas:priyas@cluster0.kga4n.mongodb.net/hospital_app");
}