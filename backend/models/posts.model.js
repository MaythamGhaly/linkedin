const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    job_title: {
        type: String,
        required: 'job_title is required'
    },
    job_descreption: {
        type: String,
        required: 'job_descreption is required'
    },
    specifics_of_the_job_role: {
        type: String,
        required: 'specifics_of_the_job_role is required'
    },
    requirements:{
        type: String,
        required: 'requirements is required'
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    apllicants: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Applicant'
    }]
})

module.exports = mongoose.model('Post',postsSchema);