const Information = require('../models/informations.model');
const User = require('../models/users.model');

const getUserInformation = async (req, res) => {
    i = req.params;
    id = i.id;
    const user = await User.findById(id).populate('informations');
    return res.send(user)
}

module.exports = {
    getUserInformation
}