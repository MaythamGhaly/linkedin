const {Router} = require('express');
const {addInformation} = require('../controllers/addInformation.controller')
const router = Router();

router.post('/add-informations', addInformation);

module.exports = router;