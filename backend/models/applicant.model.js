const mongoose = require('mongoose');

const applicantsSchema = new mongoose.Schema({
    post :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Applicant',applicantsSchema);