const express = require('express');
const router = express.Router();

const recordDataController = require('../controllers/record_data_controller');
router.post('/',recordDataController.perform);
module.exports = router;