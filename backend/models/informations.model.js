const mongoose = require('mongoose');

const informationsSchema = new mongoose.Schema({
    education: {
        type: String,
        required: 'education is required'
    },
    experience: {
        type: String,
        required: 'experience is required'
    },
    skills: {
        type: String,
        required: 'skills is required'
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Information',informationsSchema);