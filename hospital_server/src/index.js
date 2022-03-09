const express = require("express");
const app = express();

const specialityController = require("./controllers/speciality.controller");
const doctorController = require("./controllers/doctor.controller");
const availablController = require("./controllers/availability.controller");
const costController = require("./controllers/cost.controller")
app.use(express.json());


app.use("/specs", specialityController);
app.use("/doctor", doctorController);
app.use("/avails", availablController);
app.use("/cost", costController);



module.exports = app;