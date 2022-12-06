const express = require('express');
const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

const students = require('./students');

app.use('/api/v1/students',students);

app.get("/api/v1/test", (req, res) => {
    res.send('TEST API is Working')
})

app.listen(4300, () => {
        console.log('Server has Started')
    }
)