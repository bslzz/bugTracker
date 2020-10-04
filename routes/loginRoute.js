const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.route('/').post(loginController.loginUser);

module.exports = router;
