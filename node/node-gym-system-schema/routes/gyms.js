const express = require('express');
const router = express.Router();
const gymModel = require('../models/gyms');

router.get('/', async(req,res)=> {
    try {
        const getData = await gymModel.find();
        res.status(200).json(getData)
    }
    catch(err){
        res.status(400).json({message: "Error: " + err.message})
    }
})

router.post('/', async(req,res) => {
    let gymData = new gymModel(req.body);
    try{
        const savedData = await gymData.save(); 
        res.status(200).json({message: "Saved data: "});
    }
    catch(err){
        res.status(400).json({message: "Error: " + err.message})
    }
})


module.exports = router;

