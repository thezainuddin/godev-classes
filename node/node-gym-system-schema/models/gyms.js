const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const gymSchema = new Schema ({
    name: { type: String, required: [true, 'Gym name is required']},
    contact: { type: Number, required: false},
    location: {type: String, required: [true, 'Gym city is required']}
})

const gym = mongoose.model('gym',gymSchema);
module.exports=gym;