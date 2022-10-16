const { ObjectID } = require('bson');
const Information = require('../models/informations.model');
const User = require('../models/users.model');
const Post = require('../models/posts.model');

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

module.exports = {
    getUserInformation,
    updateInformation,
    getAllPosts
}