const { ObjectID } = require('bson');
const Information = require('../models/informations.model');
const User = require('../models/users.model');

const getUserInformation = async (req, res) => {
    id = req.user._id;
    const user = await User.findById(id).populate('informations');
    return res.send(user)
}

const updateInformation = async (req, res) => {
    console.log(req.user.informations[0])
    id = req.user.informations[0];
    const { education, experience, skills } = req.body;
    const information = await Information.findOneAndUpdate(id, {
        education,
        experience,
        skills
    })

return res.send(information)
}

module.exports = {
    getUserInformation,
    updateInformation
}