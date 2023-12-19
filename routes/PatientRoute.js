const {getAllDoctors} = require('../controllers/PatientController');
const express = require('express');
const router = express.Router();

router.get('/doctors', getAllDoctors);

module.exports = router;
