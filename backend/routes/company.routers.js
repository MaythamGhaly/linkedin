const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middleware')
const {create , getJobPosts} = require ('../controllers/company.controller')
const router = Router();

router.get('/get-job-post',authMiddleware, getJobPosts);
router.post('/add-post',authMiddleware, create);


module.exports = router;