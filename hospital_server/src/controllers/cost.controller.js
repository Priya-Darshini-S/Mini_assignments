const express = require("express");
const Cost = require("../models/cost.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
      const cost = await Cost.create(req.body);
  
      return res.status(201).send(cost);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

router.get("/", async (req, res) => {
    try{
        const costs = await Cost.find().lean().exec();
        return res.status(201).send({costs});
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
})

router.get("/:id", async (req, res) => {
    try{
        const cost = await Cost.findById(req.params.id).lean().exec();
        return res.status(201).send(cost);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

router.patch("/:id", async (req, res) => {
    try{
        const cost = await Cost.findByIdAndUpdate(req.params.id, req.body, {
          new: true,  
        }).lean().exec();
        return res.status(201).send(cost);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

router.delete("/:id", async (req, res) => {
    try{
        const cost = await Cost.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(cost);
    }catch(e){
        return res.status(500).json({message: e.message, status: "Failed"});
    }
});

module.exports = router;

