const express = require('express');
const { handleFormSubmission } = require('../controllers/UpdateController');
const router = express.Router();

router.post('/submit', handleFormSubmission);

module.exports = router;
