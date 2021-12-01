const express = require('express');

const router = express.Router();
const updateDataController = require('../controllers/update_data_controller');

router.get('/toggle_Status',updateDataController.status);

module.exports = router;