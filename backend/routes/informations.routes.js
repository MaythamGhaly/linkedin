const {Router} = require('express');
const {create} = require('../controllers/information.controller')
const router = Router();

router.post('/add-info/:id', create);


module.exports = router;