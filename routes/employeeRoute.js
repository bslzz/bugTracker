const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employees');
const checkAuth = require('../middleware/Auth');

// GET EMPLOYEE
router.route('/').get(employeeController.getEmployee);

// REGISTER EMPLOYEE
router.route('/employeeRegister').post(employeeController.employeeRegister);

// GET ASSIGNED BUG
router
  .route('/getassignedbug/:id')
  .get(checkAuth, employeeController.getAssignedBug);

// GIVE SOLUTION
router.route('/givesolution').post(checkAuth, employeeController.giveSolution);

module.exports = router;
