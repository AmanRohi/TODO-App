const express = require('express');

const router = express.Router();

const deleteDataController = require('../controllers/delete_data_controller');

router.get('/',deleteDataController.delete);
module.exports = router;