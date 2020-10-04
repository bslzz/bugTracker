const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employees');

router.route('/').get(employeeController.getEmployee);
router.route('/employeeRegister').post(employeeController.employeeRegister);

module.exports = router;
