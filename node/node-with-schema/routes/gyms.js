const express = require('express');
const router = express.Router();
const gymModel = require('../models/gyms');

router.get('/', async(req,res)=> {
    try {
        const getDat = await gymModel.find();
        res.status(200).json(getDat)
    }
    catch(err){
        res.status(400).json({message: "Error: " + err.message})
    }
})

// HW: get by ID

router.post('/', async(req,res) => {
    let gymDat = new gymModel(req.body);
    try{
        const dataToSave = await gymDat.save();
        res.status(200).json({message: "Saved data: "+ dataToSave});
    }
    catch(err){
        res.status(400).json({message: "Error: " + err.message})
    }
})

// HW: patch by ID

// HW: delete by ID

// HW: delete all
router.delete('/', async(req,res) => {
    try{
        const dataToDelete = await gymModel.deleteMany({});
        res.status(200).json({message: "Deleted All Data"});
    }
    catch{
        res.status(500).json({message: 'Error in this function'})
    }

})


module.exports = router;