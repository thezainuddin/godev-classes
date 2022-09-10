const express = require('express');
const app = express();
const port = 4300;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

app.get('/api/v1/test', (req, res) => {
    res.send("Node CRUD Student System is Running")
})

// Import student route
const students = require('./students');
app.use('/api/v1/students',students);

// Start serving
app.listen(port, () => { console.log('Node Server Started')})