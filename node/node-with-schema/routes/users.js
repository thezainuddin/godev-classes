const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const userModel = require('../models/users');



router.get('/', async(req,res)=> {
    try {
        const getDat = await userModel.find();
        res.status(200).json(getDat)
    }
    catch(err){
        res.status(400).json({message: "Error: " + err.message})
    }
})

router.post('/signup', async(req,res) => {
    try{
        const checkEmail = await userModel.find({email: req.body.email});
        // To avoid duplicated emails in the database, ensure email doesnt exist
        if(checkEmail==null){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            let userDat = new userModel(req.body);
            const dataToSave = await userDat.save();
            res.status(200).json({message: "User Added Successfully"});
        }
        res.status(200).json({message: "User Exists In the DB"});
    }
    catch(err){
        res.status(400).json({message: "Error: " + err.message})
    }
})

router.post('/', async(req,res) => {
    try{
        res.status(200).json({message: "User Logged In Successfully"});
    }
    catch(err){
        res.status(400).json({message: "Error: " + err.message})
    }
})



module.exports = router;