const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');
const checkAuth = require('../middleware/Auth');

//get Admin
router.route('/').get(adminController.getAdmin);

//register Admin
router.route('/register').post(adminController.adminRegister);

//get all bugs
router.route('/bugs').get(checkAuth, adminController.getAllBugs);

//assign bug
router.route('/assignbug').post(checkAuth, adminController.assignBug);

//unassign bug
router.route('/unassignbug').post(checkAuth, adminController.unassignBug);

//delete bug
router.route('/deletebug').post(checkAuth, adminController.deleteBug);

module.exports = router;
