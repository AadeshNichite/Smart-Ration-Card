const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    rationCardNo: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required:true,
        unique: true
    },
    noOfPeople: {
        type:Number,
        required:true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    date :{
        type:Date,
        default:Date.now
    }  
})
module.exports = User = mongoose.model('UserData',UserSchema);