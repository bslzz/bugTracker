const express = require('express');
const router = express.Router();

const clientController = require('../controllers/client');

router.route('/').get(clientController.getClients);
router.route('/clientRegister').post(clientController.clientRegister);

module.exports = router;
