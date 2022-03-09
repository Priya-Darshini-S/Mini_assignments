const express = require("express");
const Doctor = require("../models/doctor.model");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
      const doctor = await Doctor.create(req.body);
  
      return res.status(201).send(doctor);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });


router.get("/speciality/:id", async (req, res) => {
    console.log("sdjhfjhj")
    try{
        const doctors = await Doctor.find({speciality: {$eq: req.params.id}}).lean().exec();
        console.log('doctors:', doctors)
        return res.status(201).send(doctors);
       
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
})

router.get("/", async (req, res) => {
    try{
        const doctors = await Doctor.find().lean().exec();
        return res.status(201).send(doctors);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
})

router.get("/:id", async (req, res) => {
    try{
        const doctor = await Doctor.findById(req.params.id).lean().exec();
        return res.status(201).send(doctor);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

router.patch("/:id", async (req, res) => {
    try{
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
          new: true,  
        }).lean().exec();
        return res.status(201).send(doctor);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

router.delete("/:id", async (req, res) => {
    try{
        const doctor = await doctor.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(Doctor);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

module.exports = router;

