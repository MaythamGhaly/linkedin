const Information = require('../models/informations.model');
const User = require('../models/users.model');


const find = async (req, res) => {
    i = req.params;
    id = i.id;
    const user = await User.findById(id).populate('informations');
    return res.send(user)
}

const postsByUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).populate('posts');

    res.send(user.posts);
}

const addInformation = async (req, res) => {
    const { education, experience, skills } = req.body;
    user = req.params;
    id = user.id;

    try {
        const information = new Information();
        information.education = education;
        information.experience = experience;
        information.skills = skills;
        information.id = id;


        await information.save();
        // const userById = await User.findById(id);

        // userById.posts.push(post);
        // await userById.save();

        res.json(information)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    find,
    postsByUser,
    addInformation
}