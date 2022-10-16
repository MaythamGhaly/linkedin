const {Router} = require('express');
const { getUserInformation , updateInformation} = require('../controllers/user.controller')
const {create} = require('../controllers/information.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router();

router.get('/get-user-information',authMiddleware, getUserInformation);
router.post('/update-information',authMiddleware, updateInformation);
router.post('/add-info',authMiddleware, create);


module.exports = router;