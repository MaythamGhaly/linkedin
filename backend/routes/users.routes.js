const {Router} = require('express');
const { getUserInformation , updateInformation ,getAllPosts} = require('../controllers/user.controller')
const {create} = require('../controllers/information.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router();

router.get('/get-user-information',authMiddleware, getUserInformation);
router.post('/update-information',authMiddleware, updateInformation);
router.post('/add-info',authMiddleware, create);
router.get('/get-all-posts',authMiddleware, getAllPosts)


module.exports = router;