const express = require("express");
const Speciality = require("../models/speciality.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
      const speciality = await Speciality.create(req.body);
  
      return res.status(201).send(speciality);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

router.get("/", async (req, res) => {
    try{
        const specialitys = await Speciality.find().lean().exec();
        return res.status(201).send({specialitys});
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
})

router.get("/:id", async (req, res) => {
    try{
        const speciality = await Speciality.findById(req.params.id).lean().exec();
        return res.status(201).send(speciality);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

router.patch("/:id", async (req, res) => {
    try{
        const speciality = await Speciality.findByIdAndUpdate(req.params.id, req.body, {
          new: true,  
        }).lean().exec();
        return res.status(201).send(speciality);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

router.delete("/:id", async (req, res) => {
    try{
        const speciality = await Speciality.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(speciality);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

module.exports = router;

