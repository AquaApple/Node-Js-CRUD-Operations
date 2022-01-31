const mongoose = require('mongoose')

const dbSchema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;