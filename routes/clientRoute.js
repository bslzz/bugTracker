const express = require('express');
const router = express.Router();

const clientController = require('../controllers/client');
const checkAuth = require('../middleware/Auth');

// GET CLIENTS
router.route('/').get(clientController.getClients);

//REGISTER CLIENT
router.route('/clientRegister').post(clientController.clientRegister);

// REPORT BUG
router.route('/report_bug').post(checkAuth, clientController.reportBug);

// DELETE BUG
router.route('/delete_bug').post(checkAuth, clientController.deleteBug);

//GET BUG STATUS
router.route('/bugs/:id').get(checkAuth, clientController.getBugStatus);

// CONFIRM SOLUTION
router
  .route('/confirmsolution')
  .post(checkAuth, clientController.confirmsolution);

// DENY SOLUTION / NOT WORKING
router.route('/notworking').post(checkAuth, clientController.denysoluton);

module.exports = router;
