const Information = require('../models/informations.model');
const User = require('../models/users.model');

const create = async (req, res) => {

    id = req.user._id;
    const { education, experience, skills } = req.body;
    const information = await Information.create({
        education,
        experience,
        skills,
        user_id: id
    });
    await information.save();

    const userById = await User.findById(id);

    userById.informations.push(information);
    await userById.save();

    return res.send(userById);
}

module.exports = {
    create
}
