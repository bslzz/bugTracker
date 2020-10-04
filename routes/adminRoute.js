const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

//get Admin
router.route('/').get(adminController.getAdmin);

//register Admin
router.route('/register').post(adminController.adminRegister);

module.exports = router;
