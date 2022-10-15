const {Router} = require('express');
const { getUserInformation } = require('../controllers/user.controller')
const {create} = require('../controllers/information.controller')
const router = Router();

router.post('/get-user-information/:id', getUserInformation);
router.post('/add-info/:id', create);


module.exports = router;