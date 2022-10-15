const {Router} = require('express');
const { getUserInformation } = require('../controllers/user.controller')
const {create} = require('../controllers/information.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router();

router.post('/get-user-information/:id',authMiddleware, getUserInformation);
router.post('/add-info/:id',authMiddleware, create);


module.exports = router;