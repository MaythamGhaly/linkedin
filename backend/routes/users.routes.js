const {Router} = require('express');
const { getUserInformation , updateInformation} = require('../controllers/user.controller')
const {create} = require('../controllers/information.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router();

router.post('/get-user-information/:id',authMiddleware, getUserInformation);
router.post('/update-information/:id',authMiddleware, updateInformation);
router.post('/add-info/:id',authMiddleware, create);


module.exports = router;