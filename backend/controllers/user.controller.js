const { ObjectID } = require('bson');
const Information = require('../models/informations.model');
const User = require('../models/users.model');
const Post = require('../models/posts.model');
const Applicant = require('../models/applicant.model');

const getUserInformation = async (req, res) => {
    id = req.user._id;
    const user = await User.findById(id).populate('informations');
    return res.send(user)
}

const updateInformation = async (req, res) => {
    id = req.user.informations[0];
    const { education, experience, skills } = req.body;
    const information = await Information.findOneAndUpdate(id, {
        education,
        experience,
        skills
    })

return res.send(information)
}

const getAllPosts = async (req, res) => {
    const user = await User.find({$where: 'this.posts.length > 0'}).populate('posts');
    return res.send(user)
}

const addApplicant = async (req, res) => {
    const { post_id } = req.body;
    id = req.user._id;
    console.log(post_id)
    
    const applicant = await Applicant.create({
        users: id,
        post:post_id
    });
    await applicant.save();

    return res.send(applicant);
}

const getAllAplicants = async (req, res) => {
    const { id } = req.body;
    const user = await Applicant.findOne({id}).populate('users');
    console.log(user.users[0].informations[0])
    return res.send(user)
}

module.exports = {
    getUserInformation,
    updateInformation,
    getAllPosts,
    addApplicant,
    getAllAplicants
}