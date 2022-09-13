const express = require('express');
const router = express.Router();

const Database = require('nedb');
const students = new Database ({filename: 'database/students.db', autoload: true});

// GET all students data from the db
// Endpoint: /api/v1/students/
router.get('/', async (req,res)=> {
    try{
        await students.find({}).exec( (err,data) => {
            if(err){
                return res.status(500).json( { message: "Error in the DB"})
            }
            res.send(data)
        })
    }
    catch{
        res.status(500).json( { message: "Error in this API"})
    }
})

// GET one student data by their ID
// Endpoint: /api/v1/students/213213

router.get('/:idVariable', async(req, res) => {
    try{
        await students.findOne( {_id: req.params.idVariable}, (err, data) => {
            if(err){
                return res.status(500).json( { message: "Error in the DB"})
            }
            
            if(data!=null){
                res.status(200).send(data)
            }
            else{
                res.status(400).json( { message: "Student with this ID does not exist"})
            }
        })
    }
    catch{
        res.status(500).json( { message: "Error in this API"})
    }
})


// GET all students from particular city
// Endpoint: /api/v1/students/city/karachi

router.get('/city/:cityVar', async(req, res) => {
    try{
        await students.find( {city: req.params.cityVar}, (err, data) => {

            if(err){
                return res.status(500).json( { message: "Error in the DB"})
            }
            
            if( (data!=null) && (data.length>0) ){
                res.status(200).send(data)
            }
            else{           //data.length=0
                res.status(400).json( { message: "No Student from this city"})
            }
        })
    }
    catch{
        res.status(500).json( { message: "Error in this API"})
    }
})

router.post('/', async(req,res) => {
    try{
        await students.insert(req.body);
        res.status(200).json( { message: "Student Added Successfully"})
    }
    catch{
        res.status(500).json( { message: "Error in this API"})
    }
})

router.patch('/:idVariable', async(req,res) => {
    try{
        await students.update({_id: req.params.idVariable}, req.body, {upsert: false}, (err, isDataUpdated) => {
            if(err){ return res.status(500).json( { message: "Error in the DB"}) };
            if(isDataUpdated){
                res.status(200).json({message: "Student name: " + req.body.name + " Updated Successfully"})
            }
            else {
                res.status(400).json( { message: "Student with this ID does not exist"})
            }
        })
    }
    catch{
        res.status(500).json( { message: "Error in this API"})
    }
})

router.delete('/:idVariable', async(req,res) => {
    try{
        await students.remove({_id: req.params.idVariable}, (err, isDataDeleted) => {
            if(err){ return res.status(500).json( { message: "Error in the DB"}) };
            if(isDataDeleted){          // if(isDataDeleted==true)
                res.status(200).json({message: "Student Deleted Successfully"})
            }
            else{       // if(isDataDeleted==false)
                res.status(400).json( { message: "Student with this ID does not exist"})
            }
        })
    }
    catch{
        res.status(500).json( { message: "Error in this API"})
    }
})

router.delete('/', async(req,res) => {
    try{
        await students.remove({}, {multi:true}, (err, isDataDeleted) => {
            if(err){ return res.status(500).json( { message: "Error in the DB"}) };
            if(isDataDeleted){          // if(isDataDeleted==true)
                res.status(200).json({message: "Student Deleted Successfully"})
            }
            else{       // if(isDataDeleted==false)
                res.status(400).json( { message: "No Student Data in the DB"})
            }
        })
    }
    catch{
        res.status(500).json( { message: "Error in this API"})
    }
})

module.exports = router;