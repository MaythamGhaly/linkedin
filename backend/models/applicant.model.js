const mongoose = require('mongoose');

const applicantsSchema = new mongoose.Schema({
    users :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        
    }],
    
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
})

module.exports = mongoose.model('Applicant',applicantsSchema);