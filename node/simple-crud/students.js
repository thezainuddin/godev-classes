const express = require('express');
const router = express.Router();
const database = require('nedb');
const studentDb = new database ( {filename: 'database/students.db', autoload: true});

// GET API
// Get all  students' data from the database
// Endpoint:    localhost:4300/api/v1/students

router.get('/', (req,res) => {
    try {
        studentDb.find({}, (err, data) => {
            if (err){
                return res.send('some error', err)
            }
            res.send(data)
        })
    }
    catch (err) {
        res.send('some error :', err)
    }
})

// POST API
// Add single  students' data into  the database
// Endpoint:    localhost:4300/api/v1/students
router.post('/', (req,res) => {
    try {
        studentDb.insert(req.body)
        res.send('Data added successfully')
    }
    catch (err) {
        res.send('some error :', err)
    }
})

router.patch('/:idVariable', (req,res) => {
    try {
        studentDb.update({_id: req.params.idVariable}, req.body)
        res.send('Data updated successfully')
    }
    catch (err) {
        res.send('some error :', err)
    }
})


router.delete('/:idVariable', (req,res) => {
    try {
        studentDb.remove({_id: req.params.idVariable})
        res.send('Data deleted successfully')
    }
    catch (err) {
        res.send('some error :', err)
    }
})

module.exports = router;