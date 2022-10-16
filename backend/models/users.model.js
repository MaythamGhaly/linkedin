const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },
    type :{
        type : String,
        required: 'type is required',
        enum: ['Company', 'User']
    },
    informations: [
        {type: mongoose.Schema.Types.ObjectId,ref:'Information'}
    ],
    posts: [
        {type: mongoose.Schema.Types.ObjectId,ref:'Post'}
    ],
    applicant :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Applicant'
    }

})

module.exports = mongoose.model('User', userSchema);