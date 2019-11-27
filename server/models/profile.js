const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    rationhistory: {
        Month: {
            type : Date,
            required : true
        },
        history:{
            item: {
                type : String,
                required : true
            },
            ammount: {
                type : String,
                required : true
            },
            price :{
                type : String,
                required : true
            }
        }

    }    

})

module.exports = Profile = mongoose.model('profile', ProfileSchema );