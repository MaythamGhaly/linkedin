const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router();

router.get('/get-user-information',authMiddleware, getUserInformation);
router.post('/update-information',authMiddleware, updateInformation);
router.post('/add-post',authMiddleware, create);


module.exports = router;