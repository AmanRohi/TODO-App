const express = require('express');

const router = express.Router();
console.log("Router is loaded successfully ");

const mainController = require('../controllers/main_controller');
router.get('/',mainController.main);

router.use('/record_data',require('./record'));
router.use('/delete_data',require('./delete'));
router.use('/update_data',require('./update'));

module.exports = router;