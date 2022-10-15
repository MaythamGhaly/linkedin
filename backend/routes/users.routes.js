const {Router} = require('express');
const {addInformation, find } = require('../controllers/user.controller')
const router = Router();

router.post('/add-informations', addInformation);
router.post('/find/:id', find);


module.exports = router;