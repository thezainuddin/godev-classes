const express = require('express');
const { default: mongoose } = require('mongoose');

const app = express();

const cors = require('cors');
var corsOptions = {
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

// Connect to MongoDB database
const uri = "mongodb+srv://zainuddin:test123@cluster0.saempfh.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });
const dbConn = mongoose.connection;
dbConn.on('open', () => {
    console.log('Connected to DB')
})

const users = require('./routes/users');
app.use('/api/v1/users', users);


const gym = require('./routes/gyms');
app.use('/api/v1/gyms', gym);

app.listen(4300, () => {
    console.log('Server has started!!')
})