const Information = require('../models/addinformation.model');

const addInformation = async (req, res) => {
    const {education, experience, skills} = req.body;

    try{
        const information = new Information();
        information.education = education;
        information.experience = experience;
        information.skills = skills;

        await information.save();
        res.json(information)
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
    addInformation
}