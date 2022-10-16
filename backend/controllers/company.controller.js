const Post = require('../models/posts.model');
const User = require('../models/users.model');

const create = async (req, res) => {
    id = req.user._id;
    const { job_title, job_descreption, specifics_of_the_job_role, requirements } = req.body;
    const post = await Post.create({
        job_title,
        job_descreption,
        specifics_of_the_job_role,
        requirements,
        user_id: id
    });
    await post.save();

    const userById = await User.findById(id);

    userById.posts.push(post);
    await userById.save();

    return res.send(userById);
}

const getCompanyPost = async (req, res) => {
    id = req.user._id;
    const user = await User.find(id).populate('posts');
    return res.send(user)
}

module.exports = {
    create,
    getCompanyPost
}