const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: [true, 'Email is required']},
    password: {type: String, required:[true, 'Email is required']}
    
})

const users = mongoose.model('users',userSchema);
module.exports=users;