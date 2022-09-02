const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gymSchema = new Schema({
    name: {type: String, required: [true, 'Gym name is required']},
    contact: {type: 
                {
                    mobile1: {type: Number, required: false},
                    whatsapp: {type: Number, required: true},
                    facebookLink: {type: String, required: false}
                } 
        , required: false},
    location: {type:    
                {
                    city: String,
                    area: String,
                    address: String
                }
        , required: [true, 'Gym location is required']}
    
})

const gym = mongoose.model('gym',gymSchema);
module.exports=gym;