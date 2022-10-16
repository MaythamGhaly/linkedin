const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middleware')
const {create , getCompanyPost} = require ('../controllers/company.controller');
const companyMiddleware = require('../middlewares/company.middleware');
const router = Router();

router.get('/get-job-post',authMiddleware, companyMiddleware, getCompanyPost);
router.post('/add-post',authMiddleware, companyMiddleware, create);


module.exports = router;