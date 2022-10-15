const mongoose = require('mongoose');
const {informationsSchema} = require('./addinformation.model');

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
    informations: [
        {type: mongoose.Schema.Types.ObjectId,ref:'Information'}
    ]

})

const User = mongoose.model('User', userSchema);

module.exports = User ;