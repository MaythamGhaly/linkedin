const Information = require('../models/informations.model');
const User = require('../models/users.model');

const create = async (req, res) => {

        console.log(req.params);
        user = req.params;
        id = user.id;
        const { education, experience, skills} = req.body;
        const information = await Information.create({
            education,
            experience,
            skills,
            user_id:id
        });
        await information.save();

        const userById = await User.findById(id);

        userById.informations.push(information);
        await userById.save();

        return res.send(userById);
    }
    
const userByInformation = async (req,res)=>{
        const { id } = req.params;
        const userByInformation = await Information.findById(id).populate('user');
        res.send(userByInformation);
    }

    module.exports = {
        create,
        userByInformation
    }
